import AbstractGrader from "./AbstractGrader";
import UnitTestGrader from "./UnitTestGrader";
import VariableCheckGrader from "./VariableCheckGrader";
import {min} from "underscore";

// Code "Translating" grader
export default class LanguageTranslationGrader extends AbstractGrader {

    constructor(parson) {
        super(parson);
        this._languageBlocks = {};
        // specify the blocks for the pseudo language as a simple example case
        this._languageBlocks["pseudo"] = {
            open: {
                "^\s*IF.*THEN\s*$": "IF", "^\s*ELSE\s*$": "IF", // IF
                "^\s*WHILE.*DO\s*$": "WHILE", // WHILE
                "^\s*REPEAT.*TIMES\s*$": "REPEAT..TIMES",
                "^\s*REPEAT\s*$": "REPEAT",   // REPEAT ... UNTIL
                "^\s*FOR.*DO\s*$": "FOR",
                "^\s*FOR.*TO.*\s*$": "FOR",
                "^\s*MODULE.*\\)\s*$": "MODULE", "^\s*MODULE.*RETURNS.*$": "MODULE",
                "^\s*DO\s*$": "DO..WHILE"
            },
            close: {
                "^\s*ELSE\s*$": "IF", "^\s*ENDIF\s*$": "IF", // ENDIF
                "^\s*ENDWHILE\s*$": "WHILE",
                "^\s*ENDREPEAT\s*$": "REPEAT..TIMES",
                "^\s*UNTIL.*\s*$": "REPEAT",
                "^\s*ENDFOR\s*$": "FOR",
                "^\s*ENDMODULE\s*$": "MODULE",
                "^\s*WHILE(?!.*DO)": "DO..WHILE"
            }
        };
        this._languageBlocks["java"] = {
            open: {
                "^.*\{\s*$": "block"
            },
            close: {
                "^.*\}\s*$": "block"
            }
        };
    }

    type() {
        return "LanguageTranslationGrader"
    }

    grade() {

        const studentCode = this.parson.normalizeIndents(
            this.parson.getModifiedCode("#ul-" + this.parson.options.sortableId)
        );

        // Check opening and closing blocks.
        // The block_open and block_close are expected to be maps with regexps as properties and
        // names of blocks as the property values. For example, a pseudocode IF..THEN..ELSE..ENDIF
        // blocks can be defined like this:
        //    open = {"^\s*IF.*THEN\s*$": "IF", "^\s*ELSE\s*$":"IF"};
        //    close = {"^s*ELSE\s*$": "IF", "^\s*ENDIF\s*$": "IF"};
        let open = this.parson.options.block_open
        let close = this.parson.options.block_close
        let blockErrors = []
        const progLang = this.parson.options.programmingLang;

        if (progLang && this._languageBlocks[progLang]) {
            open = $.extend({}, open, this._languageBlocks[progLang].open);
            close = $.extend({}, close, this._languageBlocks[progLang].close);
        }

        if (open && close) { // check blocks only if block definitions are given
            let blocks = []
            let prevIndent = 0 // keep track of previous indent inside blocks
            let minIndent = 0; // minimum indent needed inside newly opened blocks
            // go through all student code lines
            for (let i = 0; i < studentCode.length; i++) {
                let isClose = false; // was a new blocks opened on this line
                let isOpen = false;  // was a block closed on this line
                let item = studentCode[i];
                let line = $("#" + item.id).text().trim(); // code of the line
                let topBlock;
                let bO;

                // Check if a proper indentation or the line was found in normalizeIndents
                // -1 will mean no matching indent was found
                if (item.indent < 0) {
                    blockErrors.push(this.parson.translations.no_matching(i + 1));
                    $("#" + item.id).addClass("incorrectIndent");
                    break; // break on error
                }

                // Go through all block closing regexps and test if they match
                // Some lines can both close and open a block (such as else), so the
                // closing blocks need to be handled first
                for (let blockClose in close) {
                    if(!close.hasOwnProperty(blockClose)) {
                        continue
                    }

                    if (new RegExp(blockClose).test(line)) {
                        isClose = true;
                        topBlock = blocks.pop();

                        if(!topBlock) {
                            blockErrors.push(this.parson.translations.no_matching_open(i + 1, close[blockClose]));
                            $("#" + item.id).addClass("incorrectPosition");
                        } else if (close[blockClose] !== topBlock.name) { // incorrect closing block
                            blockErrors.push(this.parson.translations.block_close_mismatch(i + 1, close[blockClose], topBlock.line, topBlock.name));
                            $("#" + item.id).addClass("incorrectPosition");
                        } else if (studentCode[i].indent !== topBlock.indent) { // incorrect indent
                            blockErrors.push(this.parson.translations.no_matching(i + 1));
                            $("#" + item.id).addClass("incorrectIndent");
                        }
                        prevIndent = topBlock ? topBlock.indent : 0;
                        minIndent = 0;
                        break; // only one block can be closed on a single line
                    }
                }
                // Go through all block opening regexps and test if they match
                for (let blockOpen in open) {
                    if(!open.hasOwnProperty(blockOpen)) {
                        continue
                    }

                    if (new RegExp(blockOpen).test(line)) {
                        isOpen = true;
                        bO = {name: open[blockOpen], indent: studentCode[i].indent, line: i + 1, item: item};
                        blocks.push(bO);
                        prevIndent = 0;
                        minIndent = bO.indent;
                        break; // only one block can be opened on a single line
                    }
                }

                // if not opening or closing a block, check block indentation
                if (!isClose && !isOpen && blocks.length > 0) {
                    // indentation should match previous indent if inside block
                    // and be greater than the indent of the block opening the block (minIndent)
                    if ((prevIndent && studentCode[i].indent !== prevIndent) ||
                        studentCode[i].indent <= minIndent) {
                        blockErrors.push(this.parson.translations.no_matching(i + 1));
                        $("#" + item.id).addClass("incorrectIndent");
                    }
                    prevIndent = studentCode[i].indent;
                }
                // if we have errors, clear the blocks and exit from the loop
                if (blockErrors.length > 0) {
                    blocks = [];
                    break;
                }
            }
            // create errors for all blocks opened but not closed
            for (let i = 0; i < blocks.length; i++) {
                blockErrors.push(this.parson.translations.no_matching_close(blocks[i].line, blocks[i].name));
                $("#" + blocks[i].item.id).addClass("incorrectPosition");
            }
        }
        // if there were errors in the blocks, give feedback and don't execute the code
        if (blockErrors.length > 0) {
            let feedback = "<div class='testcase fail'>"
            let feedbackMessage = "";
            for (let i = 0; i < blockErrors.length; i++) {
                feedbackMessage += blockErrors[i] + "</br>";
            }
            feedback += this.parson.translations.unittest_error(feedbackMessage);
            feedback += "</div>";
            return {html: feedback, success: false};
        }

        // Replace codelines show with codelines to be executed
        const code = this._replaceCodelines();
        // run unit tests or variable check grader
        if (this.parson.options.unittests) {
            return new UnitTestGrader(this.parson).grade(code);
        } else {
            return new VariableCheckGrader(this.parson).grade(code);
        }
    };

    // Replaces codelines in the student's solution with the codelines
    // specified in the executable_code option of the parsons_problems widget.
    // The executable_code option can be an array of lines or a string (in
    // which case it will be split on newline.
    // For each line in the model solution, there should be a matching line
    // in the executable_code.
    _replaceCodelines() {
        let student_code = this.parson.normalizeIndents(this.parson.getModifiedCode("#ul-" +
            this.parson.options.sortableId))
        let executableCodeString = ""
        let executableCode = this.parson.options.executable_code;

        const that = this;

        if (typeof executableCode === "string") {
            executableCode = executableCode.split("\n");
        }
        // replace each line with in solution with the corresponding line in executable code
        const toggleRegexp = new RegExp(
            `\\$\\$toggle(${this.parson.options.toggleSeparator}.*?)?\\$\\$`, "g"
        );

        $.each(student_code, function (index, item) {
            const ind = parseInt(item.id.replace(that.parson.idPrefix, ''), 10);

            // Handle toggle elements. Expects the toggle areas in executable code to be marked
            // with $$toggle$$ and there to be as many toggles in executable code than in the
            // code shown to learner.
            let execLine = executableCode[ind];
            const toggles = execLine.match(toggleRegexp);
            if(toggles) {
                for (let i = 0; i < toggles.length; i++) {
                    const opts = toggles[i]
                        .substring(10, toggles[i].length - 2)
                        .split(that.parson.options.toggleSeparator);

                    if (opts.length >= 1 && opts[0] !== "$$") {
                        // replace the toggle content with Python executable version as well
                        execLine = execLine.replace(toggles[i], opts[item.selectedToggleIndex(i)]);
                    } else { // use the same content for the toggle in Python
                        execLine = execLine.replace(toggles[i], item.toggleValue(i));
                    }
                }
            }
            const execLines = execLine.split(/<br\s*\/?>/);
            for (let i = 0; i < execLines.length; i++) {
                // add the modified codeLine to the executable code
                executableCodeString += that.pythonIndents[item.indent] + execLines[i] + "\n";
            }
        });
        return executableCodeString;
    };



}
