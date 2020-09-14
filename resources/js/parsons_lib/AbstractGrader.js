export default class AbstractGrader {

    constructor(parson) {
        this.parson = parson;

        this.pythonIndents = []
        let spaces = "";
        for (let counter = 0; counter < 20; counter++) {
            this.pythonIndents[counter] = spaces;
            spaces += "  ";
        }
    }

    type() {
        return "AbstractGrader"
    }

    grade(studentCode) {
        throw "Calling Abstract Method";
    }

    // Executes the given Python code and returns an object with two properties:
    //  mainmod: the result of Skulpt importMainWithBody call with the given code
    //  output: the output of the program
    // Note, that the Skulpt execution can throw an exception, which will not be handled
    // by this function, so the caller should take care of that.
    _python_exec(code) {
        let output = "";

        // function for reading python imports with skulpt
        function builtinRead(x) {
            if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
                throw "File not found: '" + x + "'";
            return Sk.builtinFiles["files"][x];
        }

        // configure Skulpt
        Sk.execLimit = this.parson.options.exec_limit || 2500; // time limit for the code to run
        Sk.configure({
            output: function (str) {
                output += str;
            },
            python3: this.parson.options.python3 || false,
            read: builtinRead
        });

        return {mainMod: Sk.importMainWithBody("stdin", false, code, false), output: output};
    };

    // Executes the given code using Skulpt and returns an object with variable
    // values of the variables given in the variables array.
    // Possible errors will be in the _error property of the returned object.
    // Output of the code will be in _output property of the result.
    // Example: this._variablesAfterExecution("x=0\ny=2\nprint x", ["x", "y"])
    //    will return object {"x": 0, "y": 2, "_output": "0"}
    _variablesAfterExecution(code, variables) {
        let output = ""
        let execResult
        let mainMod
        let result = {'variables': {}}
        let varName;
        try {
            execResult = this._python_exec(code);
        } catch (e) {
            return {"_output": output, "_error": "" + e};
        }
        mainMod = execResult.mainMod;
        for (let i = 0; i < variables.length; i++) {
            varName = variables[i];
            result.variables[varName] = mainMod.tp$getattr(varName);
        }
        result._output = execResult.output;
        return result;
    };

    // Fix or strip line numbers in the (error) message
    // Basically removes the number of lines in prependCode from the line number shown.
    stripLineNumberIfNeeded(msg, prependCode, studentCode) {
        const lineNbrRegexp = /.*on line ([0-9]+).*/;
        // function that fixes the line numbers in student feedback
        const match = msg.match(lineNbrRegexp);
        if (match) {
            const lineNo = parseInt(match[1], 10),
                lowerLimit = prependCode ?
                    prependCode.split('\n').length
                    : 0,
                upperLimit = lowerLimit + studentCode.split('\n').length - 1;
            // if error in prepended code or tests, remove the line number
            if (lineNo <= lowerLimit || lineNo > upperLimit) {
                return msg.replace(' on line ' + lineNo, '');
            } else if (lowerLimit > 0) {
                // if error in student code, make sure the line number matches student lines
                return msg.replace(' on line ' + lineNo, ' on line ' + (lineNo - lowerLimit));
            }
        }
        return msg;
    };

    //Return executable code in one string
    _codelinesAsString() {
        const student_code = this.parson.getModifiedCode("#ul-" + this.parson.options.sortableId);
        let executableCode = "";
        const that = this;

        $.each(student_code, function (index, item) {
            // split codeblocks on br elements
            const lines = $("#" + item.id).html().split(/<br\s*\/?>/);
            // go through all the lines
            for (let i = 0; i < lines.length; i++) {
                // add indents and get the text for the line (to remove the syntax highlight html elements)
                executableCode += that.pythonIndents[item.indent] + $("<span>" + lines[i] + "</span>").text() + "\n";
            }
        });
        return executableCode;
    };
}
