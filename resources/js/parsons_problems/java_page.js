import ParsonsWidget from "../parsons_lib/ParsonsWidget";

const initial = 'for (int i=0;i<3;i++) {\nSystem.out.print(\"I \");\nSystem.out.print(\"am \");\nSystem.out.print(\"a Java program \");\n}';

$(document).ready(function () {
    const parson = new ParsonsWidget({
        'sortableId': 'sortable',
        'max_wrong_lines': 1,
        'vartests': [{initcode: "output = ''", code: "", message: "Testing...", variables: {output: "I am a Java program I am a Java program I am a Java program "}},
        ],
        'grader': ParsonsWidget.getStaticGraders().LanguageTranslationGrader,
        'executable_code': "for x in range(3):\n" +
            "output += 'I '\n" +
            "output += 'am '\n" +
            "output += 'a Java program '\npass\n",
        'programmingLang': "java"
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
        $("#unittest").html("<h2>Feedback from testing your program:</h2>" + fb.feedback);
    });
});
