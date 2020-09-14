import Translations from "./Translations";
import UnitTestGrader from "./UnitTestGrader";
import VariableCheckGrader from "./VariableCheckGrader";
import LineBasedGrader from "./LineBasedGrader";
import TurtleGrader from "./TurtleGrader";
import LanguageTranslationGrader from "./LanguageTranslationGrader";

import ParsonsCodeLine from "./ParsonsCodeLine";

export default class ParsonsWidget {
    constructor(options) {
        // Contains line objects of the user-draggable code.
        // The order is not meaningful (unchanged from the initial state) but
        // indent property for each line object is updated as the user moves
        // code lines around. (see parseCode for line object description)
        this.modifiedLines = [];
        // contains line objects of distractors (see parseCode for line object description)
        this.extraLines = [];
        // contains line objects (see parseCode for line object description)
        this.modelSolution = [];

        //To collect statistics, feedback should not be based on this
        this.userActions = [];

        this.translations = new Translations().translations;

        //State history for feedback purposes
        this.statePath = [];
        this.states = {};

        const defaults = {
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
        this.feedbackExists = false;
        this.idPrefix = this.options['sortableId'] + 'codeline';
        if (this.translations.hasOwnProperty(this.options.lang)) {
            this.translations = this.translations[this.options.lang];
        } else {
            this.translations = this.translations['en'];
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
            if (typeof (this.options["unittests"]) !== "undefined") { /// unittests are specified
                this.grader = new UnitTestGrader(this);
            } else if (typeof (this.options.vartests) !== "undefined") { /// tests for variable values
                this.grader = new VariableCheckGrader(this);
            } else { // "traditional" parson feedback
                this.grader = new LineBasedGrader(this);
            }
        }

        this.defaultToggleTypeHandlers = {
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
    };

    createGraders() {
        this.graders = {};
        this.graders.VariableCheckGrader = VariableCheckGrader;
        this.graders.TurtleGrader = TurtleGrader;
        this.graders.UnitTestGrader = UnitTestGrader;
        this.graders.LanguageTranslationGrader = LanguageTranslationGrader;
        this.graders.LineBasedGrader = LineBasedGrader;
    }

    static getStaticGraders() {
        const graders = {};
        graders.VariableCheckGrader = VariableCheckGrader;
        graders.TurtleGrader = TurtleGrader;
        graders.UnitTestGrader = UnitTestGrader;
        graders.LanguageTranslationGrader = LanguageTranslationGrader;
        graders.LineBasedGrader = LineBasedGrader;
        return graders
    }

    ////Public methods

    // Parses an assignment definition given as a string and returns and
    // transforms this into an object defining the assignment with line objects.
    //
    // lines: A string that defines the solution to the assignment and also
    //   any possible distractors
    // max_distractors: The number of distractors allowed to be included with
    //   the lines required in the solution
    parseCode(lines, maxDistractors) {
        let distractors = []
        let indented = []
        let widgetData = []
        let lineObject
        let errors = []
        const that = this;

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
            lineObject = new ParsonsCodeLine(item, that);

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

            if(item.search(/#vital\s*$/) >= 0) {
                lineObject.vitalElement = true;
            }

            if(item.search(/#static\s*$/) >= 0) {
                lineObject.static = true;
            }
        });

        let normalized = this.normalizeIndents(indented);

        $.each(normalized, function (index, item) {
            if (item.indent < 0) {
                // Indentation error
                errors.push(this.translations.no_matching(normalized.orig));
            }
            widgetData.push(item);
        });

        // Remove extra distractors if there are more alternative distrators
        // than should be shown at a time
        let permutation = this.getRandomPermutation(distractors.length);
        let selectedDistractors = [];
        for (let i = 0; i < maxDistractors; i++) {
            selectedDistractors.push(distractors[permutation[i]]);
            widgetData.push(distractors[permutation[i]]);
        }

        return {
            // an array of line objects specifying  the solution
            solution: $.extend(true, [], normalized),
            // an array of line objects specifying the requested number
            // of distractors (not all possible alternatives)
            distractors: $.extend(true, [], selectedDistractors),
            // an array of line objects specifying the initial code arrangement
            // given to the user to use in constructing the solution
            widgetInitial: $.extend(true, [], widgetData),
            errors: errors
        };
    };

    init(text) {
        // TODO: Error handling, parseCode may return errors in an array in property named errors.

        let initialStructures = this.parseCode(text.split("\n"), this.options.max_wrong_lines);
        this.modelSolution = initialStructures.solution;
        this.extraLines = initialStructures.distractors;

        this.modifiedLines = initialStructures.widgetInitial;

        let idPrefix = this.idPrefix;

        // Add ids to the line objects in the user-draggable lines
        $.each(this.modifiedLines, function (index, item) {
            item.id = idPrefix + index;
            item.indent = 0;
        });
    };

    getHash(searchString) {
        let hash = []
        let ids = $(searchString).sortable('toArray')
        let line;
        for (let i = 0; i < ids.length; i++) {
            if(!ids[i].includes("Empty")) {
                line = this.getLineById(ids[i]);
                hash.push(line.orig + "_" + line.indent);
            }
        }
        //prefix with something to handle empty output situations
        if (hash.length === 0) {
            return "-";
        } else {
            return hash.join("-");
        }
    };

    solutionHash() {
        return this.getHash("#ul-" + this.options.sortableId);
    };

    trashHash() {
        return this.getHash("#ul-" + this.options.trashId);
    };

    whatWeDidPreviously() {
        let hash = this.solutionHash();
        let previously = this.states[hash];
        if (!previously) {
            return undefined;
        }
        let visits = _.filter(this.statePath, function (state) {
            return state === hash;
        }).length - 1;
        let stepsToLast = 0;
        let s;
        let outputStepTypes = ['removeOutput', 'addOutput', 'moveOutput'];
        for (let i = this.statePath.length - 2; i > 0; i--) {
            s = this.states[this.statePath[i]];
            if (s && outputStepTypes.indexOf(s.type) !== -1) {
                stepsToLast++;
            }
            if (hash === this.statePath[i]) {
                break;
            }
        }
        return $.extend(false, {'visits': visits, stepsToLast: stepsToLast}, previously);
    };

    /**
     * Returns states of the toggles for logging purposes
     */
    _getToggleStates() {
        let context = $("#" + this.options.sortableId + ", #" + this.options.trashId)
        let toggles = $(".jsparson-toggle", context)
        let toggleStates = {};
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

    addLogEntry(entry) {
        let state
        let previousState;
        let logData = {
            time: new Date(),
            output: this.solutionHash(),
            type: "action"
        };

        if (this.options.trashId) {
            logData.input = this.trashHash();
        }

        if (entry.target) {
            entry.target = entry.target.replace(this.idPrefix, "");
        }

        // add toggle states to log data if there are toggles
        let toggles = this._getToggleStates();
        if (toggles) {
            logData.toggleStates = toggles;
        }

        state = logData.output;

        jQuery.extend(logData, entry);
        this.userActions.push(logData);

        //Updating the state history
        if (this.statePath.length > 0) {
            previousState = this.statePath[this.statePath.length - 1];
            this.states[previousState] = logData;
        }

        //Add new item to the state path only if new and previous states are not equal
        if (this.statePath[this.statePath.length - 1] !== state) {
            this.statePath.push(state);
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
    updateIndent(leftDiff, id) {

        let codeLine = this.getLineById(id);
        let newIndent = this.options.can_indent ? codeLine.indent + Math.floor(leftDiff / this.options.x_indent) : 0;
        newIndent = Math.max(0, newIndent);
        codeLine.indent = newIndent;

        return newIndent;
    };

    // Get a line object by the full id including id prefix
    // (see parseCode for description of line objects)
    getLineById(id) {

        let index = -1;
        for (let i = 0; i < this.modifiedLines.length; i++) {
            if (this.modifiedLines[i].id === id) {
                index = i;
                break;
            }
        }
        return this.modifiedLines[index];
    };

    // Check and normalize code indentation.
    // Does not use the current object (this) to make changes to
    // the parameter.
    // Returns a new array of line objects whose indent fields' values
    // may be different from the argument. If indentation does not match,
    // i.e. code is malformed, value of indent may be -1.
    // For example, the first line may not be indented.
    normalizeIndents(lines) {

        let normalized = [];
        let newLine;
        const matchIndent = function (index) {
            //return line index from the previous lines with matching indentation
            for (let i = index - 1; i >= 0; i--) {
                if (lines[i].indent === lines[index].indent) {
                    return normalized[i].indent;
                }
            }
            return -1;
        };
        for (let i = 0; i < lines.length; i++) {
            //create shallow copy from the line object
            newLine = jQuery.extend({}, lines[i]);
            const parsonCodeLineFunctions = Object.getOwnPropertyNames(Object.getPrototypeOf(lines[i]));

            for (const f in parsonCodeLineFunctions) {
                newLine[parsonCodeLineFunctions[f]] = lines[i][parsonCodeLineFunctions[f]];
            }

            if (i === 0) {
                newLine.indent = 0;
                if (lines[i].indent !== 0) {
                    newLine.indent = -1;
                }
            } else if (lines[i].indent === lines[i - 1].indent) {
                newLine.indent = normalized[i - 1].indent;
            } else if (lines[i].indent > lines[i - 1].indent) {
                newLine.indent = normalized[i - 1].indent + 1;
            } else {
                // indentation can be -1 if no matching indentation exists, i.e. IndentationError in Python
                newLine.indent = matchIndent(i);
            }
            normalized[i] = newLine;
        }

        return normalized;
    };

    /**
     * Retrieve the code lines based on what is in the DOM
     *
     * TODO(petri) refactor to UI
     * */
    getModifiedCode(searchString) {
        //ids of the the modified code
        let linesToReturn = []
        let solutionIds = $(searchString).sortable('toArray')
        let item;

        console.log(solutionIds.length);

        for (let i = 0; i < solutionIds.length; i++) {
            if(!solutionIds[i].includes("Empty")) {
                item = this.getLineById(solutionIds[i]);
                linesToReturn.push($.extend(new ParsonsCodeLine(), item));
            } else {
                linesToReturn.push(new ParsonsCodeLine());
            }
        }
        return linesToReturn;
    };

    hashToIDList(hash) {
        let lineValues;
        let h;

        if (hash === "-" || hash === "" || hash === null) {
            h = [];
        } else {
            h = hash.split("-");
        }

        let ids = [];
        for (let i = 0; i < h.length; i++) {
            lineValues = h[i].split("_");
            ids.push(this.modifiedLines[lineValues[0]].id);
        }
        return ids;
    };

    updateIndentsFromHash(hash) {
        let lineValues;
        let h;

        if (hash === "-" || hash === "" || hash === null) {
            h = [];
        } else {
            h = hash.split("-");
        }

        let ids = [];
        for (let i = 0; i < h.length; i++) {
            lineValues = h[i].split("_");
            this.modifiedLines[lineValues[0]].indent = Number(lineValues[1]);
            this.updateHTMLIndent(this.modifiedLines[lineValues[0]].id);
        }
        return ids;
    };


    /**
     * TODO(petri) refoctor to UI
     */
    displayError(message) {
        if (this.options.incorrectSound && $.sound) {
            $.sound.play(this.options.incorrectSound);
        }
        alert(message);
    };

    colorFeedback(elemId) {
        return new LineBasedGrader(this).grade(elemId);
    };


    /**
     * @return
     * TODO(petri): Separate UI from here
     */
    getFeedback() {
        this.feedbackExists = true;

        const fb = this.grader.grade();

        console.log(fb);

        if (this.options.feedback_cb) {
            this.options.feedback_cb(fb); //TODO(petri): what is needed?
        }
        // if answer is correct, mark it in the UI
        if (fb.success) {
            //$("#ul-" + this.options.sortableId).addClass("correct");
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

    clearFeedback() {
        if (this.feedbackExists) {
            const li_elements = $("#ul-" + this.options.sortableId + " li");
            $.each(this.FEEDBACK_STYLES, function (index, value) {
                li_elements.removeClass(value);
            });
        }
        this.feedbackExists = false;
    };


    getRandomPermutation(n) {
        let permutation = [];
        for (let i = 0; i < n; i++) {
            permutation.push(i);
        }
        let swap1;
        let swap2;
        let tmp;
        for (let i = 0; i < n; i++) {
            swap1 = Math.floor(Math.random() * n);
            swap2 = Math.floor(Math.random() * n);
            tmp = permutation[swap1];
            permutation[swap1] = permutation[swap2];
            permutation[swap2] = tmp;
        }
        return permutation;
    };


    shuffleLines() {
        let permutation = (this.options["permutation"] ? this.options["permutation"] :
            this.getRandomPermutation)(this.modifiedLines.length);
        let idList = [];
        for (let i in permutation) {
            if (permutation.hasOwnProperty(i)) {
                idList.push(this.modifiedLines[permutation[i]].id);
            }
        }
        if (this.options.trashId) {
            this.createHTMLFromLists([], idList);
        } else {
            this.createHTMLFromLists(idList, []);
        }
        this.addToggleableElements(); //TODO: Port this function

        this.checkStaticPieces();
    };

    createHTMLFromHashes(solutionHash, trashHash) {
        const solution = this.hashToIDList(solutionHash);
        const trash = this.hashToIDList(trashHash);

        this.createHTMLFromLists(solution, trash);
        this.updateIndentsFromHash(solutionHash);
    };

    updateHTMLIndent(codeLineID) {
        const line = this.getLineById(codeLineID);
        $('#' + codeLineID).css("margin-left", this.options.x_indent * line.indent + "px");
    };

    codeLineToHTML(codeLine) {
        //return '<li id="' + codeLine.id + '" class="prettyprint lang-py">' + codeLine.code + '<\/li>';
        return `<li id=${codeLine.id}> <pre><code class="python">${codeLine.code}</code></pre></li>`
    };

    emptyLineToHTML(index) {
        return `<li id=sortableCodeLineEmpty${index} data-is-empty="true"> <pre><code class="python"></code></pre></li>`;
    }

    codeLinesToHTML(codeLineIDs, destinationID) {
        const lineHTML = [];
        for (let id in codeLineIDs) {
            let line = this.getLineById(codeLineIDs[id]);
            lineHTML.push(this.codeLineToHTML(line));
        }
        return '<ul id="ul-' + destinationID + '">' + lineHTML.join('') + '</ul>';
    };

    /** modifies the DOM by inserting exercise elements into it */
    createHTMLFromLists(solutionIDs, trashIDs) {
        let html;

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

        hljs.initHighlighting.called = false;
        hljs.initHighlighting();

        const that = this;
        const sortable = $("#ul-" + this.options.sortableId).sortable(
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
                    const ind = that.updateIndent(ui.position.left - ui.item.parent().position().left,
                        ui.item[0].id);
                    that.updateHTMLIndent(ui.item[0].id);
                    that.addLogEntry({type: "addOutput", target: ui.item[0].id}, true);
                },
                grid: that.options.can_indent ? [that.options.x_indent, 1] : false
            });
        sortable.addClass("output");
        if (this.options.trashId) {
            const trash = $("#ul-" + this.options.trashId).sortable(
                {
                    connectWith: sortable,
                    start: function () {
                        that.clearFeedback();
                    },
                    receive: function (event, ui) {
                        if(ui.item[0].id.includes("Empty")) {
                            ui.item[0].remove();
                        } else {
                            that.getLineById(ui.item[0].id).indent = 0;
                            that.updateHTMLIndent(ui.item[0].id);
                            that.addLogEntry({type: "removeOutput", target: ui.item[0].id}, true);
                        }
                    },
                    stop: function (event, ui) {
                        if ($(event.target)[0] !== ui.item.parent()[0]) {
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
        let bindings = [];
        for (let i = 0; i < this.modifiedLines.length; i++) {
            const line = this.modifiedLines[i];
            bindings.push({code: line.code, distractor: line.distractor})
        }
        this.addLogEntry({type: 'init', time: new Date(), bindings: bindings});
    };

    checkStaticPieces() {
        const sortableList = $("#ul-sortable")

        this.modifiedLines.forEach((line, index) => {
            if(line.static) {
                const lineElement = $(`#${line.id}`);
                lineElement.detach().appendTo(sortableList)
            }
        })
    }

    binDistractors() {

        const extraLineIDs = [];
        this.extraLines.forEach(line => extraLineIDs.push(line.id));

        const html = this.codeLinesToHTML(extraLineIDs, "removedDistractors");
        $("#removedDistractors").html(html);

        $("#ul-sortable").children().each((_, element) => {
            if (this.getLineById(element.id).distractor) {
                element.remove();
            }
        });
        $("#ul-sortableTrash").children().each((_, element) => {
            if (this.getLineById(element.id).distractor) {
                element.remove();
            }
        });
    }

    partlySolveExercise() {

        const sortableList = $("#ul-sortable")

        sortableList.children().each((_, element) => {
            if(element.dataset.isEmpty) {
                element.remove();
            }
        });

        this.modifiedLines.forEach((line, index) => {
            if(!line.distractor) {
                const lineElement = $(`#${line.id}`);
                if(line.vitalElement) {
                    sortableList.append(this.emptyLineToHTML(index));
                } else {
                    lineElement.detach().appendTo(sortableList)
                }

            }
        })
    }

    showCorrectness() {
        this.grader.grade(null, false);
    }

    addToggleableElements() {
        for (let i = 0; i < this.modifiedLines.length; i++) {
            this.modifiedLines[i]._addToggles();
        }
        // toggleable elements are only enabled for unit tests
        if (!this.options.unittests && !this.options.vartests) {
            return;
        }
        const handlers = $.extend(this.defaultToggleTypeHandlers, this.options.toggleTypeHandlers)
        const context = $(`#${this.options.sortableId}, #${this.options.trashId}`);
        $(".jsparson-toggle", context).each(function (index, item) {
            const type = $(item).data("type");
            if (!type) {
                return;
            }
            const handler = handlers[type]
            let jspOptions;
            if ($.isFunction(handler)) {
                jspOptions = handler($(item));
            } else {
                jspOptions = handler;
            }
            if (jspOptions && $.isArray(jspOptions)) {
                $(item).attr("data-jsp-options", JSON.stringify(jspOptions));
            }
        });

        const that = this;
        // register a click handler for all the toggleable elements (and unregister existing)
        context.off("click", ".jsparson-toggle").on("click", ".jsparson-toggle", function () {
            const $this = $(this)
            const curVal = $this.text()
            const choices = $this.data("jsp-options")
            const newVal = choices[(choices.indexOf(curVal) + 1) % choices.length]
            const $parent = $this.parent("li");
            // clear existing feedback
            that.clearFeedback();
            // change the shown toggle element
            $this.text(newVal);
            // log the event
            that.addLogEntry({
                type: "toggle", oldvalue: curVal, newvalue: newVal,
                target: $parent[0].id,
                toggleindex: $parent.find(".jsparson-toggle").index($this)
            });
        });
    }
}
