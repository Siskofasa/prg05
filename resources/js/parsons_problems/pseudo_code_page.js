import ParsonsWidget from "../parsons_lib/ParsonsWidget";
import ParsonsConverter from "../lib/parsons_converter"

const initial = 'IF $$toggle::a::b$$ $$toggle::<::>::<>$$ b THEN\n  min := a\nELSE\n  min := b\nENDIF';

$(document).ready(function () {

    const parson = new ParsonsWidget({
        'sortableId': 'sortable',
        'trashId': 'sortableTrash',
        'max_wrong_lines': 1,
        'vartests': [{initcode: "min = None\na = 0\nb = 2", code: "", message: "Testing with a = 0 ja b = 2", variables: {min: 0}},
            {initcode: "min = None\na = 7\nb = 4\n", code: "", message: "Testing with a = 7 ja b = 4",
                variables: {min: 4}}],
        'grader': ParsonsWidget.getStaticGraders().LanguageTranslationGrader,
        'executable_code': "if $$toggle$$ $$toggle::<::>::!=$$ b:\n" +
            "min = a\n" +
            "else:\n" +
            "min = b\n  pass",
        'programmingLang': "pseudo"
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
        var fb = parson.getFeedback();
        $("#unittest").html("<h2>Feedback from testing your program:</h2>" + fb.feedback);
    });
});
