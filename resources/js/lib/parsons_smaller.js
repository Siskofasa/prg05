import Translations from "../parsons_lib/Translations";
import VariableCheckGrader from "../parsons_lib/VariableCheckGrader";
import TurtleGrader from "../parsons_lib/TurtleGrader";
import UnitTestGrader from "../parsons_lib/UnitTestGrader";
import LanguageTranslationGrader from "../parsons_lib/LanguageTranslationGrader";
import LineBasedGrader from "../parsons_lib/LineBasedGrader";
import ParsonsCodeLine from "../parsons_lib/ParsonsCodeLine";

(function ($, _) { // wrap in anonymous function to not show some helper variables

        // regexp used for trimming
        var trimRegexp = /^\s*(.*?)\s*$/;
        var translations = new Translations().translations;

        // Different graders

        var graders = {};
        graders.VariableCheckGrader = VariableCheckGrader;
        graders.TurtleGrader = TurtleGrader;
        graders.UnitTestGrader = UnitTestGrader;
        graders.LanguageTranslationGrader = LanguageTranslationGrader;
        graders.LineBasedGrader = LineBasedGrader;

        var python_indents = [],
            spaces = "";
        for (var counter = 0; counter < 20; counter++) {
            python_indents[counter] = spaces;
            spaces += "  ";
        }

        var defaultToggleTypeHandlers = {
            boolean: ["True", "False"],
            compop: ["<", ">", "<=", ">=", "==", "!="],
            mathop: ["+", "-", "*", "/"],
            boolop: ["and", "or"],
            range: function ($item) {
                var min = parseFloat($item.data("min") || "0"),
                    max = parseFloat($item.data("max") || "10"),
                    step = parseFloat($item.data("step") || "1"),
                    opts = [],
                    curr = min;
                while (curr <= max) {
                    opts.push("" + curr);
                    curr += step;
                }
                return opts;
            }
        };
        var addToggleableElements = function (widget) {
            for (var i = 0; i < widget.modified_lines.length; i++) {
                widget.modified_lines[i]._addToggles();
            }
            // toggleable elements are only enabled for unit tests
            if (!widget.options.unittests && !widget.options.vartests) {
                return;
            }
            var handlers = $.extend(defaultToggleTypeHandlers, widget.options.toggleTypeHandlers),
                context = $("#" + widget.options.sortableId + ", #" + widget.options.trashId);
            $(".jsparson-toggle", context).each(function (index, item) {
                var type = $(item).data("type");
                if (!type) {
                    return;
                }
                var handler = handlers[type],
                    jspOptions;
                if ($.isFunction(handler)) {
                    jspOptions = handler($(item));
                } else {
                    jspOptions = handler;
                }
                if (jspOptions && $.isArray(jspOptions)) {
                    $(item).attr("data-jsp-options", JSON.stringify(jspOptions));
                }
            });
            // register a click handler for all the toggleable elements (and unregister existing)
            context.off("click", ".jsparson-toggle").on("click", ".jsparson-toggle", function () {
                var $this = $(this),
                    curVal = $this.text(),
                    choices = $this.data("jsp-options"),
                    newVal = choices[(choices.indexOf(curVal) + 1) % choices.length],
                    $parent = $this.parent("li");
                // clear existing feedback
                widget.clearFeedback();
                // change the shown toggle element
                $this.text(newVal);
                // log the event
                widget.addLogEntry({
                    type: "toggle", oldvalue: curVal, newvalue: newVal,
                    target: $parent[0].id,
                    toggleindex: $parent.find(".jsparson-toggle").index($this)
                });
            });
        };


        // expose the type for testing, extending etc
        window.ParsonsCodeline = ParsonsCodeLine;

        var ParsonsWidget = function (options) {
            // Contains line objects of the user-draggable code.
            // The order is not meaningful (unchanged from the initial state) but
            // indent property for each line object is updated as the user moves
            // codelines around. (see parseCode for line object description)
            this.modified_lines = [];
            // contains line objects of distractors (see parseCode for line object description)
            this.extra_lines = [];
            // contains line objects (see parseCode for line object description)
            this.model_solution = [];

            //To collect statistics, feedback should not be based on this
            this.user_actions = [];

            //State history for feedback purposes
            this.state_path = [];
            this.states = {};

            var defaults = {
                'incorrectSound': false,
                'x_indent': 50,
                'can_indent': true,
                'feedback_cb': false,
                'first_error_only': true,
                'max_wrong_lines': 10,
                'lang': 'en',
                'toggleSeparator': '::'
            };

            this.options = jQuery.extend({}, defaults, options);
            this.feedback_exists = false;
            this.id_prefix = options['sortableId'] + 'codeline';
            if (translations.hasOwnProperty(this.options.lang)) {
                this.translations = translations[this.options.lang];
            } else {
                this.translations = translations['en'];
            }

            // translate trash_label and solution_label
            if (!this.options.hasOwnProperty("trash_label")) {
                this.options.trash_label = this.translations.trash_label;
            }
            if (!this.options.hasOwnProperty("solution_label")) {
                this.options.solution_label = this.translations.solution_label;
            }
            this.FEEDBACK_STYLES = {
                'correctPosition': 'correctPosition',
                'incorrectPosition': 'incorrectPosition',
                'correctIndent': 'correctIndent',
                'incorrectIndent': 'incorrectIndent'
            };

            // use grader passed as an option if defined and is a function
            if (this.options.grader && _.isFunction(this.options.grader)) {
                this.grader = new this.options.grader(this);
            } else {
                // initialize the grader
                if (typeof (this.options.unittests) !== "undefined") { /// unittests are specified
                    this.grader = new UnitTestGrader(this);
                } else if (typeof (this.options.vartests) !== "undefined") { /// tests for variable values
                    this.grader = new VariableCheckGrader(this);
                } else { // "traditional" parson feedback
                    this.grader = new LineBasedGrader(this);
                }
            }
        };
        ParsonsWidget._graders = graders;

        ////Public methods

        // Parses an assignment definition given as a string and returns and
        // transforms this into an object defining the assignment with line objects.
        //
        // lines: A string that defines the solution to the assignment and also
        //   any possible distractors
        // max_distractrors: The number of distractors allowed to be included with
        //   the lines required in the solution
        ParsonsWidget.prototype.parseCode = function (lines, max_distractors) {
            var distractors = [],
                indented = [],
                widgetData = [],
                lineObject,
                errors = [],
                that = this;
            // Create line objects out of each codeline and separate
            // lines belonging to the solution and distractor lines
            // Fields in line objects:
            //   code: a string of the code, may include newline characters and
            //     thus in fact represents a block of consecutive lines
            //   indent: indentation level, -1 for distractors
            //   distractor: boolean whether this is a distractor
            //   orig: the original index of the line in the assignment definition string,
            //     for distractors this is not meaningful but for lines belonging to the
            //     solution, this is their expected position
            $.each(lines, function (index, item) {
                lineObject = new ParsonsCodeline(item, that);
                lineObject.orig = index;
                if (item.search(/#distractor\s*$/) >= 0) {
                    // This line is a distractor
                    lineObject.indent = -1;
                    lineObject.distractor = true;
                    if (lineObject.code.length > 0) {
                        // The line is non-empty, not just whitespace
                        distractors.push(lineObject);
                    }
                } else {
                    // This line is part of the solution
                    // Initialize line object with code and indentation properties
                    if (lineObject.code.length > 0) {
                        // The line is non-empty, not just whitespace
                        lineObject.distractor = false;
                        indented.push(lineObject);
                    }
                }
            });

            var normalized = this.normalizeIndents(indented);

            $.each(normalized, function (index, item) {
                if (item.indent < 0) {
                    // Indentation error
                    errors.push(this.translations.no_matching(normalized.orig));
                }
                widgetData.push(item);
            });

            // Remove extra distractors if there are more alternative distrators
            // than should be shown at a time
            var permutation = this.getRandomPermutation(distractors.length);
            var selected_distractors = [];
            for (var i = 0; i < max_distractors; i++) {
                selected_distractors.push(distractors[permutation[i]]);
                widgetData.push(distractors[permutation[i]]);
            }

            return {
                // an array of line objects specifying  the solution
                solution: $.extend(true, [], normalized),
                // an array of line objects specifying the requested number
                // of distractors (not all possible alternatives)
                distractors: $.extend(true, [], selected_distractors),
                // an array of line objects specifying the initial code arrangement
                // given to the user to use in constructing the solution
                widgetInitial: $.extend(true, [], widgetData),
                errors: errors
            };
        };

        ParsonsWidget.prototype.init = function (text) {
            // TODO: Error handling, parseCode may return errors in an array in property named errors.
            var initial_structures = this.parseCode(text.split("\n"), this.options.max_wrong_lines);
            this.model_solution = initial_structures.solution;
            this.extra_lines = initial_structures.distractors;
            this.modified_lines = initial_structures.widgetInitial;
            var id_prefix = this.id_prefix;

            // Add ids to the line objects in the user-draggable lines
            $.each(this.modified_lines, function (index, item) {
                item.id = id_prefix + index;
                item.indent = 0;
            });
        };

        ParsonsWidget.prototype.getHash = function (searchString) {
            var hash = [],
                ids = $(searchString).sortable('toArray'),
                line;
            for (var i = 0; i < ids.length; i++) {
                line = this.getLineById(ids[i]);
                hash.push(line.orig + "_" + line.indent);
            }
            //prefix with something to handle empty output situations
            if (hash.length === 0) {
                return "-";
            } else {
                return hash.join("-");
            }
        };

        ParsonsWidget.prototype.solutionHash = function () {
            return this.getHash("#ul-" + this.options.sortableId);
        };

        ParsonsWidget.prototype.trashHash = function () {
            return this.getHash("#ul-" + this.options.trashId);
        };

        ParsonsWidget.prototype.whatWeDidPreviously = function () {
            var hash = this.solutionHash();
            var previously = this.states[hash];
            if (!previously) {
                return undefined;
            }
            var visits = _.filter(this.state_path, function (state) {
                return state == hash;
            }).length - 1;
            var i, stepsToLast = 0, s,
                outputStepTypes = ['removeOutput', 'addOutput', 'moveOutput'];
            for (i = this.state_path.length - 2; i > 0; i--) {
                s = this.states[this.state_path[i]];
                if (s && outputStepTypes.indexOf(s.type) != -1) {
                    stepsToLast++;
                }
                if (hash === this.state_path[i]) {
                    break;
                }
            }
            return $.extend(false, {'visits': visits, stepsToLast: stepsToLast}, previously);
        };

        /**
         * Returns states of the toggles for logging purposes
         */
        ParsonsWidget.prototype._getToggleStates = function () {
            var context = $("#" + this.options.sortableId + ", #" + this.options.trashId),
                toggles = $(".jsparson-toggle", context),
                toggleStates = {};
            $("#" + this.options.sortableId + " .jsparson-toggle").each(function () {
                if (!toggleStates.output) {
                    toggleStates.output = [];
                }
                toggleStates.output.push($(this).text());
            });
            if (this.options.trashId) {
                toggleStates.input = [];
                $("#" + this.options.trashId + " .jsparson-toggle").each(function () {
                    toggleStates.input.push($(this).text());
                });
            }
            if ((toggleStates.output && toggleStates.output.length > 0) ||
                (toggleStates.input && toggleStates.input.length > 0)) {
                return toggleStates;
            } else {
                return undefined;
            }
        };

        ParsonsWidget.prototype.addLogEntry = function (entry) {
            var state, previousState;
            var logData = {
                time: new Date(),
                output: this.solutionHash(),
                type: "action"
            };

            if (this.options.trashId) {
                logData.input = this.trashHash();
            }

            if (entry.target) {
                entry.target = entry.target.replace(this.id_prefix, "");
            }

            // add toggle states to log data if there are toggles
            var toggles = this._getToggleStates();
            if (toggles) {
                logData.toggleStates = toggles;
            }

            state = logData.output;

            jQuery.extend(logData, entry);
            this.user_actions.push(logData);

            //Updating the state history
            if (this.state_path.length > 0) {
                previousState = this.state_path[this.state_path.length - 1];
                this.states[previousState] = logData;
            }

            //Add new item to the state path only if new and previous states are not equal
            if (this.state_path[this.state_path.length - 1] !== state) {
                this.state_path.push(state);
            }
            // callback for reacting to actions
            if ($.isFunction(this.options.action_cb)) {
                this.options.action_cb.call(this, logData);
            }
        };

        /**
         * Update indentation of a line based on new coordinates
         * leftDiff horizontal difference from (before and after drag) in px
         ***/
        ParsonsWidget.prototype.updateIndent = function (leftDiff, id) {

            var code_line = this.getLineById(id);
            var new_indent = this.options.can_indent ? code_line.indent + Math.floor(leftDiff / this.options.x_indent) : 0;
            new_indent = Math.max(0, new_indent);
            code_line.indent = new_indent;

            return new_indent;
        };

        // Get a line object by the full id including id prefix
        // (see parseCode for description of line objects)
        ParsonsWidget.prototype.getLineById = function (id) {
            var index = -1;
            for (var i = 0; i < this.modified_lines.length; i++) {
                if (this.modified_lines[i].id == id) {
                    index = i;
                    break;
                }
            }
            return this.modified_lines[index];
        };

        // Check and normalize code indentation.
        // Does not use the current object (this) ro make changes to
        // the parameter.
        // Returns a new array of line objects whose indent fields' values
        // may be different from the argument. If indentation does not match,
        // i.e. code is malformed, value of indent may be -1.
        // For example, the first line may not be indented.
        ParsonsWidget.prototype.normalizeIndents = function (lines) {

            var normalized = [];
            var new_line;
            var match_indent = function (index) {
                //return line index from the previous lines with matching indentation
                for (var i = index - 1; i >= 0; i--) {
                    if (lines[i].indent == lines[index].indent) {
                        return normalized[i].indent;
                    }
                }
                return -1;
            };
            for (var i = 0; i < lines.length; i++) {
                //create shallow copy from the line object
                //new_line = jQuery.extend({}, lines[i]);
                new_line = new ParsonsCodeLine(lines[i].code, this); //jQuery.extend({}, lines[i]);

                if (i === 0) {
                    new_line.indent = 0;
                    if (lines[i].indent !== 0) {
                        new_line.indent = -1;
                    }
                } else if (lines[i].indent == lines[i - 1].indent) {
                    new_line.indent = normalized[i - 1].indent;
                } else if (lines[i].indent > lines[i - 1].indent) {
                    new_line.indent = normalized[i - 1].indent + 1;
                } else {
                    // indentation can be -1 if no matching indentation exists, i.e. IndentationError in Python
                    new_line.indent = match_indent(i);
                }
                normalized[i] = new_line;
            }
            return normalized;
        };

        /**
         * Retrieve the code lines based on what is in the DOM
         *
         * TODO(petri) refactor to UI
         * */
        ParsonsWidget.prototype.getModifiedCode = function (search_string) {
            //ids of the the modified code
            var lines_to_return = [],
                solution_ids = $(search_string).sortable('toArray'),
                i, item;
            for (i = 0; i < solution_ids.length; i++) {
                item = this.getLineById(solution_ids[i]);
                lines_to_return.push($.extend(new ParsonsCodeline(), item));
            }
            return lines_to_return;
        };

        ParsonsWidget.prototype.hashToIDList = function (hash) {
            var lines = [];
            var lineValues;
            var lineObject;
            var h;

            if (hash === "-" || hash === "" || hash === null) {
                h = [];
            } else {
                h = hash.split("-");
            }

            var ids = [];
            for (var i = 0; i < h.length; i++) {
                lineValues = h[i].split("_");
                ids.push(this.modified_lines[lineValues[0]].id);
            }
            return ids;
        };

        ParsonsWidget.prototype.updateIndentsFromHash = function (hash) {
            var lineValues;
            var h;

            if (hash === "-" || hash === "" || hash === null) {
                h = [];
            } else {
                h = hash.split("-");
            }

            var ids = [];
            for (var i = 0; i < h.length; i++) {
                lineValues = h[i].split("_");
                this.modified_lines[lineValues[0]].indent = Number(lineValues[1]);
                this.updateHTMLIndent(this.modified_lines[lineValues[0]].id);
            }
            return ids;
        };


        /**
         * TODO(petri) refoctor to UI
         */
        ParsonsWidget.prototype.displayError = function (message) {
            if (this.options.incorrectSound && $.sound) {
                $.sound.play(this.options.incorrectSound);
            }
            alert(message);
        };

        ParsonsWidget.prototype.colorFeedback = function (elemId) {
            return new LineBasedGrader(this).grade(elemId);
        };


        /**
         * @return
         * TODO(petri): Separate UI from here
         */
        ParsonsWidget.prototype.getFeedback = function () {
            this.feedback_exists = true;
            var fb = this.grader.grade();
            if (this.options.feedback_cb) {
                this.options.feedback_cb(fb); //TODO(petri): what is needed?
            }
            // if answer is correct, mark it in the UI
            if (fb.success) {
                $("#ul-" + this.options.sortableId).addClass("correct");
            }
            // log the feedback and return; based on the type of grader
            if ('html' in fb) { // unittest/vartests type feedback
                this.addLogEntry({type: "feedback", tests: fb.tests, success: fb.success});
                return {feedback: fb.html, success: fb.success};
            } else {
                this.addLogEntry({type: "feedback", errors: fb.log_errors, success: fb.success});
                return fb.errors;
            }
        };

        ParsonsWidget.prototype.clearFeedback = function () {
            if (this.feedback_exists) {
                $("#ul-" + this.options.sortableId).removeClass("incorrect correct");
                var li_elements = $("#ul-" + this.options.sortableId + " li");
                $.each(this.FEEDBACK_STYLES, function (index, value) {
                    li_elements.removeClass(value);
                });
            }
            this.feedback_exists = false;
        };


        ParsonsWidget.prototype.getRandomPermutation = function (n) {
            var permutation = [];
            var i;
            for (i = 0; i < n; i++) {
                permutation.push(i);
            }
            var swap1, swap2, tmp;
            for (i = 0; i < n; i++) {
                swap1 = Math.floor(Math.random() * n);
                swap2 = Math.floor(Math.random() * n);
                tmp = permutation[swap1];
                permutation[swap1] = permutation[swap2];
                permutation[swap2] = tmp;
            }
            return permutation;
        };


        ParsonsWidget.prototype.shuffleLines = function () {
            var permutation = (this.options.permutation ? this.options.permutation : this.getRandomPermutation)(this.modified_lines.length);
            var idlist = [];
            for (var i in permutation) {
                idlist.push(this.modified_lines[permutation[i]].id);
            }
            if (this.options.trashId) {
                this.createHTMLFromLists([], idlist);
            } else {
                this.createHTMLFromLists(idlist, []);
            }
            addToggleableElements(this);
        };

        ParsonsWidget.prototype.createHTMLFromHashes = function (solutionHash, trashHash) {
            var solution = this.hashToIDList(solutionHash);
            var trash = this.hashToIDList(trashHash);
            this.createHTMLFromLists(solution, trash);
            this.updateIndentsFromHash(solutionHash);
        };

        ParsonsWidget.prototype.updateHTMLIndent = function (codelineID) {
            var line = this.getLineById(codelineID);
            $('#' + codelineID).css("margin-left", this.options.x_indent * line.indent + "px");
        };


        ParsonsWidget.prototype.codeLineToHTML = function (codeline) {
            return `<li id=${codeline.id}> <pre><code class="python">${codeline.code}</code></pre></li>`
        };

        ParsonsWidget.prototype.codeLinesToHTML = function (codelineIDs, destinationID) {
            var lineHTML = [];
            for (var id in codelineIDs) {
                var line = this.getLineById(codelineIDs[id]);
                lineHTML.push(this.codeLineToHTML(line));
            }
            return '<ul id="ul-' + destinationID + '">' + lineHTML.join('') + '</ul>';
        };

        /** modifies the DOM by inserting exercise elements into it */
        ParsonsWidget.prototype.createHTMLFromLists = function (solutionIDs, trashIDs) {
            var html;
            if (this.options.trashId) {
                html = (this.options.trash_label ? '<p>' + this.options.trash_label + '</p>' : '') +
                    this.codeLinesToHTML(trashIDs, this.options.trashId);
                $("#" + this.options.trashId).html(html);
                html = (this.options.solution_label ? '<p>' + this.options.solution_label + '</p>' : '') +
                    this.codeLinesToHTML(solutionIDs, this.options.sortableId);
                $("#" + this.options.sortableId).html(html);
            } else {
                html = this.codeLinesToHTML(solutionIDs, this.options.sortableId);
                $("#" + this.options.sortableId).html(html);
            }

            if (window.prettyPrint && (typeof (this.options.prettyPrint) === "undefined" || this.options.prettyPrint)) {
                prettyPrint();
            }

            var that = this;
            var sortable = $("#ul-" + this.options.sortableId).sortable(
                {
                    start: function () {
                        that.clearFeedback();
                    },
                    stop: function (event, ui) {
                        if ($(event.target)[0] != ui.item.parent()[0]) {
                            return;
                        }
                        that.updateIndent(ui.position.left - ui.item.parent().position().left,
                            ui.item[0].id);
                        that.updateHTMLIndent(ui.item[0].id);
                        that.addLogEntry({type: "moveOutput", target: ui.item[0].id}, true);
                    },
                    receive: function (event, ui) {
                        var ind = that.updateIndent(ui.position.left - ui.item.parent().position().left,
                            ui.item[0].id);
                        that.updateHTMLIndent(ui.item[0].id);
                        that.addLogEntry({type: "addOutput", target: ui.item[0].id}, true);
                    },
                    grid: that.options.can_indent ? [that.options.x_indent, 1] : false
                });
            sortable.addClass("output");
            if (this.options.trashId) {
                var trash = $("#ul-" + this.options.trashId).sortable(
                    {
                        connectWith: sortable,
                        start: function () {
                            that.clearFeedback();
                        },
                        receive: function (event, ui) {
                            that.getLineById(ui.item[0].id).indent = 0;
                            that.updateHTMLIndent(ui.item[0].id);
                            that.addLogEntry({type: "removeOutput", target: ui.item[0].id}, true);
                        },
                        stop: function (event, ui) {
                            if ($(event.target)[0] != ui.item.parent()[0]) {
                                // line moved to output and logged there
                                return;
                            }
                            that.addLogEntry({type: "moveInput", target: ui.item[0].id}, true);
                        }
                    });
                sortable.sortable('option', 'connectWith', trash);
            }
            // Log the original codelines in the exercise in order to be able to
            // match the input/output hashes to the code later on. We need only a
            // few properties of the codeline objects
            var bindings = [];
            for (var i = 0; i < this.modified_lines.length; i++) {
                var line = this.modified_lines[i];
                bindings.push({code: line.code, distractor: line.distractor})
            }
            this.addLogEntry({type: 'init', time: new Date(), bindings: bindings});
        };


        window['ParsonsWidget'] = ParsonsWidget;
    }
// allows _ and $ to be modified with noconflict without changing the globals
// that parsons_problems uses
)($, _);
