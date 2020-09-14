import AbstractGrader from "./AbstractGrader";

// Grader that will execute the code and check variable values after that
// Expected and supported options:
//  - vartests (required): array of variable test objects
// Each variable test object can/must have the following properties:
//  - initcode: code that will be prepended before the learner solution code
//  - code: code that will be appended after the learner solution code
//  - message (required): a textual description of the test, shown to learner
// Properties specifying what is tested:
//  - variables: an object with properties for each variable name to
//                          be tested; the value of the property is the expected
//                          value
// or
//  - variable: a variable name to be tested
//  - expected: expected value of the variable after code execution
export default class VariableCheckGrader extends AbstractGrader {

    type() {
        return "VariableCheckGrader"
    }

    // Formats a JavaScript variable to the corresponding Python value *and*
    // formats a Skulpt variable to the corresponding Python value
    formatVariableValue(varValue) {
        const varType = typeof varValue;

        let returnValue = varValue;

        if (varType === "undefined" || varValue === null) {
            returnValue = "None";
        } else if (varType === "string") { // show strings in quotes
            returnValue = '"' + varValue + '"';
        } else if (varType === "boolean") { // Python booleans with capital first letter
            returnValue = varValue ? "True" : "False";
        } else if ($.isArray(varValue)) { // JavaScript arrays
            returnValue = '[' + varValue.join(', ') + ']';
        } else if (varType === "object" && varValue.tp$name === "number") { // Python numbers
            returnValue = varValue.v;
        } else if (varType === "object" && varValue.tp$name === "int") { // Also Python numbers?
            returnValue = varValue.v
        } else if (varType === "object" && varValue.tp$name === "NoneType") { // None
            returnValue = "None";
        } else if (varType === "object" && varValue.tp$name === "bool") { // Python strings
            returnValue = varValue.v ? "True" : "False";
        } else if (varType === "object" && varValue.tp$name === "str") { // Python strings
            returnValue = '"' + varValue.v + '"';
        } else if (varType === "object" && varValue.tp$name === "list") { // Python lists
            returnValue = '[' + varValue.v.join(', ') + ']';
        }

        return returnValue
    };

    grade(studentCodeTemp) {

        const that = this
        let feedback = ""
        let logErrors = []
        let allPassed = true;

        $.each(this.parson.options.vartests, function (index, testData) {
            const studentCode = studentCodeTemp || that._codelinesAsString();
            const executableCode = `${testData.initcode || ""}\n${studentCode}\n${testData.code || ""}`;
            let variables
            let expectedVals;

            if ('variables' in testData) {
                variables = _.keys(testData.variables);
                expectedVals = testData.variables;
            } else {
                variables = [testData.variable];
                expectedVals = {};
                expectedVals[testData.variable] = testData.expected;
            }
            const res = that._variablesAfterExecution(executableCode, variables);
            let testCaseFeedback = ""
            let success = true
            let logEntry = {'code': testData.code, 'msg': testData.message}
            let expectedValue
            let actualValue;

            if ("_error" in res) {
                testCaseFeedback += that.parson.translations.unittest_error(that.stripLineNumberIfNeeded(res._error,
                    testData.initcode,
                    studentCode));
                success = false;
                logEntry.type = "error";
                logEntry.errormsg = res._error;
            } else {
                logEntry.type = "assertion";
                logEntry.variables = {};
                for (let j = 0; j < variables.length; j++) {
                    let variable = variables[j]
                    let variableSuccess;
                    if (variable === "__output") { // checking output of the program
                        expectedValue = expectedVals[variable];
                        actualValue = res._output;
                        variableSuccess = (actualValue == expectedValue); // should we do a strict test??
                        testCaseFeedback += `<div class='${variableSuccess ? "pass" : "fail"}'>`;
                        testCaseFeedback += `${that.parson.translations.unittest_output_assertion(expectedValue, actualValue)}</div>`;
                    } else {
                        expectedValue = that.formatVariableValue(expectedVals[variable]);
                        actualValue = that.formatVariableValue(res.variables[variable]);

                        variableSuccess = (actualValue == expectedValue);  // should we do a strict test??
                        testCaseFeedback += `<div class='${variableSuccess ? "pass" : "fail"}'>`;
                        testCaseFeedback += `${that.parson.translations.variabletest_assertion(
                            variable, expectedValue, actualValue)}</div>`;
                    }
                    logEntry.variables[variable] = {expected: expectedValue, actual: actualValue};
                    if (!variableSuccess) {
                        success = false;
                    }
                }
            }
            allPassed = allPassed && success;
            logEntry.success = success;
            logErrors.push(logEntry);
            feedback += `<div class='testcase ${(success ? "pass" : "fail")}'>
                        <span class='msg'>${testData.message}</span><br>${testCaseFeedback}"</div>`;
        });
        return {html: feedback, tests: logErrors, success: allPassed};
    }
}
