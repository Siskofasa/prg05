import ParsonsWidget from "../parsons_lib/ParsonsWidget";
import ParsonsConverter from "../lib/parsons_converter";

const initial = "def find_largest(a, b, c):\n" +
    "if <span class='jsparson-toggle' data-type='abc'></span> > <span class='jsparson-toggle' data-type='abc'></span>:\n" +
    "if <span class='jsparson-toggle' data-type='abc'></span> > <span class='jsparson-toggle' data-type='abc'></span>:\n" +
    "return <span class='jsparson-toggle' data-type='abc'></span>\n" +
    "else:\n" +
    "return <span class='jsparson-toggle' data-type='abc'></span>\n" +
    "elif <span class='jsparson-toggle' data-type='abc'></span> > <span class='jsparson-toggle' data-type='abc'></span>:\n" +
    "return <span class='jsparson-toggle' data-type='abc'></span>\n" +
    "else:\n" +
    "return <span class='jsparson-toggle' data-type='abc'></span>\n";
const unittests = 'class myTests(unittest):\n' +
    '  def testOne(self):\n' +
    '    self.assertEqual(find_largest(0, 2, 4),4,' +
    '"Calling function <code>find_largest(0, 2, 4)</code>.")\n' +
    '    self.assertEqual(find_largest(4, 2, 4),4,' +
    '"Calling function <code>find_largest(4, 2, 4)</code>.")\n' +
    '    self.assertEqual(find_largest(-5, -1, -4),-1,' +
    '"Calling function <code>find_largest(-5, -1, -4)</code>.")\n' +
    '    self.assertEqual(find_largest(7, 2, 4),7,' +
    '"Calling function <code>find_largest(7, 2, 4)</code>.")\n' +
    '_test_result = myTests().main()';+

$(document).ready(function(){

    const parsonUnitObject = ParsonsConverter.convertParsonString(unittests);
    const parsonUnitTests = ParsonsConverter.buildParsonString(parsonUnitObject);

    const parson = new ParsonsWidget({
        'sortableId': 'sortable',
        'trashId': 'sortableTrash',
        'unittests': parsonUnitTests,
        toggleTypeHandlers: {abc: ["a", "b", "c"]}
    });

    const parsonObject = ParsonsConverter.convertParsonString(initial);
    const parsonString = ParsonsConverter.buildParsonString(parsonObject);

    console.log(parsonObject);
    console.log(parsonString);

    console.log(parsonUnitObject);
    console.log(parsonUnitTests);


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
        if (fb.success) { alert("Good, you solved the assignment!"); }
    });
});
