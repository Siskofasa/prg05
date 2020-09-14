import AbstractGrader from "./AbstractGrader";

// Grader that will execute student code and Skulpt unittests
export default class UnitTestGrader extends AbstractGrader {

    constructor(props) {
        super(props);

        this.unitTestLibrary = "__author__ = 'vkaravir'\n" +
            "\n" +
            "class unittest():\n" +
            "    \"\"\"\n" +
            "    A simple unittest class to be used with the js-parsons\n" +
            "    exercise framework: https://github.com/vkaravir/js-parsons/\n" +
            "    \"\"\"\n" +
            "    def __init__(self):\n" +
            "        self.tlist = []\n" +
            "        testNames = {}\n" +
            "        for name in dir(self):\n" +
            "            if name[:4] == 'test' and name not in testNames:\n" +
            "                self.tlist.append(getattr(self,name))\n" +
            "                testNames[name]=True\n" +
            "\n" +
            "    def setup(self):\n" +
            "        pass\n" +
            "\n" +
            "    def tearDown(self):\n" +
            "        pass\n" +
            "\n" +
            "    def main(self):\n" +
            "        self.result = []\n" +
            "        for func in self.tlist:\n" +
            "            try:\n" +
            "                self.setup()\n" +
            "                func()\n" +
            "                self.tearDown()\n" +
            "            except Exception as e:\n" +
            "                self.appendErrorResult(e)\n" +
            "\n" +
            "        # join the result array to return a JSON string\n" +
            "        return '[' + ', '.join(self.result) + ']';\n" +
            "\n" +
            "    def assertEqual(self, actual, expected, feedback=\"\"):\n" +
            "        res = actual==expected and type(actual)==type(expected)\n" +
            "        self.appendResult(res, actual, ' to be equal to ',expected, feedback)\n" +
            "\n" +
            "    def assertNotEqual(self, actual, expected, feedback=\"\"):\n" +
            "        res = actual != expected\n" +
            "        self.appendResult(res, actual, ' to not equal ',expected,feedback)\n" +
            "\n" +
            "    def assertTrue(self,x, feedback=\"\"):\n" +
            "        res = x\n" +
            "        self.appendResult(res, x, ' to be ',True,feedback)\n" +
            "\n" +
            "    def assertFalse(self,x, feedback=\"\"):\n" +
            "        res = not x\n" +
            "        self.appendResult(res, x, ' to be ',False,feedback)\n" +
            "\n" +
            "    def assertIs(self,a,b, feedback=\"\"):\n" +
            "        res = a is b\n" +
            "        self.appendResult(res, a, ' to be the same object as ',b,feedback)\n" +
            "\n" +
            "    def assertIsNot(self,a,b, feedback=\"\"):\n" +
            "        res = a is not b\n" +
            "        self.appendResult(res, a, ' to not be the same object as ',b,feedback)\n" +
            "\n" +
            "    def assertIsNone(self,x, feedback=\"\"):\n" +
            "        res = x is None\n" +
            "        self.appendResult(res, x, ' to be', None,feedback)\n" +
            "\n" +
            "    def assertIsNotNone(self,x, feedback=\"\"):\n" +
            "        res = x is not None\n" +
            "        self.appendResult(res, x, ' to not be ',None,feedback)\n" +
            "\n" +
            "    def assertIn(self,a,b, feedback=\"\"):\n" +
            "        res = a in b\n" +
            "        self.appendResult(res, a, ' to be in ',b,feedback)\n" +
            "\n" +
            "    def assertNotIn(self,a,b, feedback=\"\"):\n" +
            "        res = a not in b\n" +
            "        self.appendResult(res, a, ' to not be in ',b,feedback)\n" +
            "\n" +
            "    def assertIsInstance(self,a,b, feedback=\"\"):\n" +
            "        res = isinstance(a,b)\n" +
            "        self.appendResult(res, a, ' to be an instance of ',b,feedback)\n" +
            "\n" +
            "    def assertNotIsInstance(self,a,b, feedback=\"\"):\n" +
            "        res = not isinstance(a,b)\n" +
            "        self.appendResult(res, a, ' to not be an instance of ',b,feedback)\n" +
            "\n" +
            "    def assertAlmostEqual(self,a,b, feedback=\"\"):\n" +
            "        res = round(a-b,7) == 0\n" +
            "        self.appendResult(res, a, ' to equal ',b,feedback)\n" +
            "\n" +
            "    def assertNotAlmostEqual(self,a,b, feedback=\"\"):\n" +
            "        res = round(a-b,7) != 0\n" +
            "        self.appendResult(res, a, ' to not equal ',b,feedback)\n" +
            "\n" +
            "    def assertGreater(self,a,b, feedback=\"\"):\n" +
            "        res = a > b\n" +
            "        self.appendResult(res, a, ' to be greater than ',b,feedback)\n" +
            "\n" +
            "    def assertGreaterEqual(self,a,b, feedback=\"\"):\n" +
            "        res = a >= b\n" +
            "        self.appendResult(res, a, ' to be greater than or equal to ',b,feedback)\n" +
            "\n" +
            "    def assertLess(self,a,b, feedback=\"\"):\n" +
            "        res = a < b\n" +
            "        self.appendResult(res, a, ' to be less than ',b,feedback)\n" +
            "\n" +
            "    def assertLessEqual(self,a,b, feedback=\"\"):\n" +
            "        res = a <= b\n" +
            "        self.appendResult(res, a, ' to be less than or equal to ',b,feedback)\n" +
            "\n" +
            "    def appendErrorResult(self, error):\n" +
            "        # generate a JSON string for this error\n" +
            "        self.result.append('{\"status\":\"error\", \"_error\":\"%s\"}'%str(error))\n" +
            "\n" +
            "    def appendResult(self,res,actual,comp, expected,feedback):\n" +
            "        if res:\n" +
            "            status = \"pass\"\n" +
            "        else:\n" +
            "            status = \"fail\"\n" +
            "        # generate a JSON string for this result\n" +
            "        jsonstr = '{\"status\": \"%s\", \"expected\": \"%s\", \"actual\": \"%s\", \"test\":\"%s\", \"feedback\":\"%s\"}' \\\n" +
            "                            %(status, str(expected), str(actual), comp, feedback)\n" +
            "        self.result.append(jsonstr)\n"
    }

    type() {
        return "UnitTestGrader"
    }

    // do the grading
    grade(studentCodeTemp) {

        let success = true
        let unitTests = this.parson.options.unittests
        const studentCode = studentCodeTemp || this._codelinesAsString().trim();
        let feedbackHtml = "" // HTML to be returned as feedback
        let result
        let mainMod;

        let executableCode = `${studentCode}\n${unitTests}`;

        // if there is code to add before student code, add it
        if(this.parson.options.unittest_code_prepend) {
            executableCode = `${this.parson.options.unittest_code_prepend}\n${executableCode}`;
        }

        executableCode = `${this.unitTestLibrary}\n${executableCode}`;

        try {
            mainMod = this._python_exec(executableCode).mainMod;
            result = JSON.parse(mainMod.tp$getattr("_test_result").v);
        } catch (e) {
            result = [{status: "error", _error: e.toString()}];
        }

        // go through the results and generate HTML feedback
        for (let i = 0, l = result.length; i < l; i++) {
            const res = result[i];
            feedbackHtml += `<div class="testcase ${res.status}'">`;
            if(res.status === "error") { // errors in execution
                feedbackHtml += this.parson.translations.unittest_error(this.stripLineNumberIfNeeded(res._error,
                    this.parson.options.unittest_code_prepend,
                    studentCode));
                success = false;
            } else { // passed or failed tests
                feedbackHtml += `<span class="msg">${this.stripLineNumberIfNeeded(res.feedback)}</span><br />`;
                feedbackHtml += `Expected <span class="expected">${res.expected}
                    </span>${res.test}<span class="actual">${res.actual}</span>`;
                if (res.status === "fail") {
                    success = false;
                }
            }
            feedbackHtml += '</div>';
        }

        return {html: feedbackHtml, tests: result, success: success};
    };

}
