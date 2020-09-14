import ParsonsConverter from "../lib/parsons_converter";

const jsonParsonOriginal = {
    "assignment":
        `def is_true(boolean_value):\n
        if boolean_value:\n
          return True\n
        return False\n
        return true #distractor\n`
}

const jsonParsonArray = {
    "assignment": [
        "def is_true(boolean_value):",
        "  if boolean_value:",
        "    return True",
        "  return False",
        "return true #distractor"
    ]
}

const jsonParsonProperties = {
    "assignment": [
        {
            rule: "def is_true(boolean_value)",
            ident: 0,
            distractor: false
        }, {
            rule: "if boolean_value:",
            ident: 2,
            distractor: false
        }, {
            rule: "return True",
            ident: 4,
            distractor: false
        }, {
            rule: "return False",
            ident: 2,
            distractor: false
        }, {
            rule: "return true",
            ident: 0,
            distractor: true
        }
    ]
}

const parsonProblemRaw = 'def is_true(boolean_value):\n' +
    '  if boolean_value:\n' +
    '    return True\n' +
    '  return False\n' +
    '  return true #distractor\n'

function displayErrors(fb) {
    if (fb.errors.length > 0) {
        alert(fb.errors[0]);
    }
}

import ParsonsWidget from "../parsons_lib/ParsonsWidget";

$(document).ready(function () {

    console.log("hi");

    // const parsonStringTest = ParsonsConverter.convertParsonString(parsonProblemRaw);
    //
    // var parson = new ParsonsWidget({
    //     'sortableId': 'sortable',
    //     'trashId': 'sortableTrash',
    //     'max_wrong_lines': 1,
    //     'feedback_cb' : displayErrors
    // });
    // parson.init(ParsonsConverter.buildParsonString(parsonStringTest));
    // parson.shuffleLines();
    // $("#newInstanceLink").click(function(event){
    //     event.preventDefault();
    //     parson.shuffleLines();
    // });
    // $("#feedbackLink").click(function(event){
    //     event.preventDefault();
    //     parson.getFeedback();
    // });

    // hljs.initHighlightingOnLoad();
});
