import ParsonsConverter from "../lib/parsons_converter";

function displayErrors(fb) {
    if (fb.errors.length > 0) {
        alert(fb.errors[0]);
    }
}

function buildParsonString(parsonObject) {
    let parsonString = ""

    parsonObject["assignment"].forEach(parsonRule => {
        console.log(parsonRule);
        parsonString += `${' '.repeat(parsonRule["ident"])}${parsonRule["rule"]} ${parsonRule["distractor"] ? " #distractor" : ""}\n`
    })
    // console.log(parsonString);
    return parsonString
}

function convertParsonString(parsonString) {

    const resultingObject = {
        "assignment": []
    }

    parsonString.split("\n").forEach(row => {
        console.log(row);
        if (row.length === 0) {
            return
        }

        const distractor = row.search("#distractor") !== -1
        console.log(distractor);
        if (distractor) {
            row = row.split("#distractor")[0];
        }

        resultingObject["assignment"].push({
            "rule": row.trim(),
            "ident": row.match(/^\s*/)[0].length,
            "distractor": distractor
        })
    })

    console.log(resultingObject);
    return resultingObject;
}

import ParsonsWidget from "../parsons_lib/ParsonsWidget";

var initial = "$$toggle::x::y::tmp$$ = " +
    "$$toggle::x::y::tmp$$\n" +
    "$$toggle::x::y::tmp$$ = " +
    "$$toggle::x::y::tmp$$\n" +
    "$$toggle::x::y::tmp$$ = " +
    "$$toggle::x::y::tmp$$\n";

$(document).ready(function(){
    var parson = new ParsonsWidget({
        'sortableId': 'sortable',
        'trashId': 'sortableTrash',
        'vartests': [{initcode: "x = 0\ny = 2", code: "", message: "Testing with initial variable values x = 0 and y = 2", variables: {x: 2, y: 0}},
            {initcode: "x = 3\ny = 4\n", code: "", message: "Testing with initial variable values x = 3 and y = 4", variables: {x: 4, y: 3}}],
        lang: "en"
    });

    const parsonObject = ParsonsConverter.convertParsonString(initial);
    const parsonString = ParsonsConverter.buildParsonString(parsonObject);

    parson.init(parsonString);
    parson.shuffleLines();

    $("#newInstanceLink").click(function(event){
        event.preventDefault();
        parson.shuffleLines();
    });
    $("#feedbackLink").click(function(event){
        event.preventDefault();
        const fb = parson.getFeedback();
        $("#unittest").html("<h2>Feedback from testing your program:</h2>" + fb.feedback);
        if (fb.success) { alert("Good, you solved the assignment!"); }
    });
});
