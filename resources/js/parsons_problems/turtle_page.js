import ParsonsWidget from "../parsons_lib/ParsonsWidget";

$(document).ready(function(){
    const initial = 'REPEAT 3 TIMES\nforward(100)\nleft(120)\nENDREPEAT';

    Sk.canvas = "studentCanvas";
    const parson = new ParsonsWidget({
        'sortableId': 'sortable',
        'trashId': 'sortableTrash',
        'max_wrong_lines': 1,
        turtleModelCode: "modelTurtle.forward(100)\n" +
            "modelTurtle.left(120)\nmodelTurtle.forward(100)\nmodelTurtle.left(120)\nmodelTurtle.forward(100)\n" +
            "modelTurtle.left(120)",
        'grader': ParsonsWidget.getStaticGraders().TurtleGrader,
        'executable_code': "for i in range(0,3):\n" +
            "myTurtle.forward(100)\n" +
            "myTurtle.left(120)\n" +
            "pass",
        'programmingLang': "pseudo"
    });
    parson.init(initial);
    parson.shuffleLines();
    $("#newInstanceLink").click(function(event){
        event.preventDefault();
        parson.shuffleLines();
    });
    $("#feedbackLink").click(function(event){
        event.preventDefault();
        const fb = parson.getFeedback();
//                $("#unittest").html("<h2>Feedback from testing your program:</h2>" + fb.feedback);
        if (fb.success) {
            alert("Great job, you solved the exercise!");
        } else {
            alert("Sorry, your solution does not match the model image");
        }
    });
});
