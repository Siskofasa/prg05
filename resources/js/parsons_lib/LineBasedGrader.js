import AbstractGrader from "./AbstractGrader";

// The "original" grader for giving line based feedback.
export default class LineBasedGrader extends AbstractGrader {

    constructor(parson) {
        super(parson);

        this.type = "LineBasedGrader"
    }

    type() {
        return "LinedBasedGrader"
    }

    grade(elementId, shouldMarkIncorrect=true) {

        const elemId = elementId || this.parson.options.sortableId;

        let studentCode;
        if(shouldMarkIncorrect) {
            studentCode = this.parson.normalizeIndents(this.parson.getModifiedCode("#ul-" + elemId));
        } else {
            studentCode = this.parson.getModifiedCode("#ul-" + elemId);
        }

        studentCode = studentCode.filter(item => {
            return item.code !== ""
        });

        const linesToCheck = Math.min(studentCode.length, this.parson.modelSolution.length);
        const errors = []
        const logErrors = [];
        const incorrectLines = []
        const studentCodeLineObjects = [];
        let wrongOrder = false;

        const that = this;

        // Find the line objects for the student's code
        for(let i = 0; i < studentCode.length; i++) {
            studentCodeLineObjects.push(this.parson.getLineById(studentCode[i].id));
        }

        // This maps codeLine strings to the index, at which starting from 0, we have last
        // found this codeLine. This is used to find the best indices for each
        // codeLine in the student's code for the LIS computation and, for example,
        // assigns appropriate indices for duplicate lines.
        const lastFoundCodeIndex = {};
        $.each(studentCodeLineObjects, function (index, lineObject) {
            // find the first matching line in the model solution
            // starting from where we have searched previously
            let i;

            if(!lineObject) {
                return;
            }

            for (i = (typeof (lastFoundCodeIndex[lineObject.code]) !== 'undefined') ? lastFoundCodeIndex[lineObject.code] + 1 : 0;
                 i < that.parson.modelSolution.length;
                 i++) {
                if (that.parson.modelSolution[i].code === lineObject.code) {
                    // found a line in the model solution that matches the student's line
                    lastFoundCodeIndex[lineObject.code] = i;
                    lineObject.lisIgnore = false;
                    // This will be used in LIS computation
                    lineObject.position = i;
                    break;
                }
            }
            if (i === that.parson.modelSolution.length) {
                if (typeof (lastFoundCodeIndex[lineObject.code]) === 'undefined') {
                    // Could not find the line in the model solution at all,
                    // it must be a distractor
                    // => add to feedback, log, and ignore in LIS computation
                    wrongOrder = true;

                    if(shouldMarkIncorrect) {
                        lineObject.markIncorrectPosition();
                    }
                    incorrectLines.push(lineObject.orig);
                    lineObject.lisIgnore = true;
                } else {
                    // The line is part of the solution but there are now
                    // too many instances of the same line in the student's code
                    // => Let's just have their correct position to be the same
                    // as the last one actually found in the solution.
                    // LIS computation will handle such duplicates properly and
                    // choose only one of the equivalent positions to the LIS and
                    // extra duplicates are left in the inverse and highlighted as
                    // errors.
                    // TODO This method will not always give the most intuitive
                    // highlights for lines to supposed to be moved when there are
                    // several extra duplicates in the student's code.
                    lineObject.lisIgnore = false;
                    lineObject.position = lastFoundCodeIndex[lineObject.code];
                }

            }
        });

        const lisStudentCodeLineObjects =
            studentCodeLineObjects.filter(function (lineObject) {
                if(!lineObject) {
                    return false;
                }
                return !lineObject.lisIgnore;
            });
        const inv =
            LIS.best_lise_inverse_indices(lisStudentCodeLineObjects
                .map(function (lineObject) {
                    if(!lineObject) {
                        return 0;
                    }
                    return lineObject.position;
                }));
        $.each(inv, function (_index, lineObjectIndex) {
            // Highlight the lines that could be moved to fix code as defined by the LIS computation
            if(shouldMarkIncorrect) {
                lisStudentCodeLineObjects[lineObjectIndex].markIncorrectPosition();
            }
            incorrectLines.push(lisStudentCodeLineObjects[lineObjectIndex].orig);
        });
        if (inv.length > 0 || incorrectLines.length > 0) {
            wrongOrder = true;
            logErrors.push({type: "incorrectPosition", lines: incorrectLines});
        }

        if (wrongOrder) {
            errors.push(this.parson.translations.order());
        }

        // Check the number of lines in student's code
        if (this.parson.modelSolution.length < studentCode.length) {
            if(shouldMarkIncorrect) {
                $(`#ul-${elemId}`).addClass("incorrect");
            }
            errors.push(this.parson.translations.lines_too_many());
            logErrors.push({type: "tooManyLines", lines: studentCode.length});
        } else if (this.parson.modelSolution.length > studentCode.length) {
            if(shouldMarkIncorrect) {
                $(`#ul-${elemId}`).addClass("incorrect");
            }
            errors.push(this.parson.translations.lines_missing());
            logErrors.push({type: "tooFewLines", lines: studentCode.length});
        }

        // Finally, check indent if no other errors
        if ((!this.parson.options.first_error_only) || errors.length === 0) {
            for (let i = 0; i < linesToCheck; i++) {
                const codeLine = studentCode[i];
                const modelLine = this.parson.modelSolution[i];

                if (codeLine.indent !== modelLine.indent &&
                    ((!this.parson.options.first_error_only) || errors.length === 0)) {

                    if(shouldMarkIncorrect) {
                        codeLine.markIncorrectIndent();
                    }
                    errors.push(this.parson.translations.block_structure(i + 1));
                    logErrors.push({type: "incorrectIndent", line: (i + 1)});
                }
                if (codeLine.code === modelLine.code &&
                    codeLine.indent === modelLine.indent &&
                    ((!this.parson.options.first_error_only) || errors.length === 0)) {
                    codeLine.markCorrect();
                }
            }
        }

        return {errors: errors, log_errors: logErrors, success: (errors.length === 0)};
    };

}
