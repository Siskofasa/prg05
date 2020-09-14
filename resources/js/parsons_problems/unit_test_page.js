import ParsonsWidget from "../parsons_lib/ParsonsWidget";
import ParsonsConverter from "../lib/parsons_converter";

// const initial = "def maxindex(arg):\n" +
//     " ans = 0\n" +
//     " for i in range(len(arg)):\n" +
//     " if arg[i] > arg[ans]:\n" +
//     " ans = i\n" +
//     " while True:\n" +
//     "pass\n" +
//     " return ans\n";

const initial = `def maxindex(arg):\n
 return ans\n
 for i in range(len(arg)):\n
 if arg[i] > arg[ans]:\n
 ans = i\n
 ans = 0\n
 while True:\n
pass\n`

const unitTests = 'class myTests(unittest):\n' +
    '  def testOne(self):\n' +
    '    self.assertEqual(maxindex([0, 2, 4]),2,' +
    '"Calling function <code>maxindex([0, 2, 4])</code>.")\n' +
    '    self.assertEqual(maxindex([7, 2, 4]),0,' +
    '"Calling function <code>maxindex([7, 2, 4])</code>.")\n' +
    '    self.assertEqual(maxindex([7, 8, 4]),1,' +
    '"Calling function <code>maxindex([7, 8, 4])</code>.")\n' +
    '  def testTwo(self):\n' +
    '    self.assertEqual(maxindex([0, 2, 4]),2,' +
    '"Calling function <code>maxindex([0, 2, 4])</code>.")\n' +
    '    self.assertEqual(maxindex([7, 2, 4]),0,' +
    '"Calling function <code>maxindex([7, 2, 4])</code>.")\n' +
    '    self.assertEqual(maxindex([7, 8, 4]),1,' +
    '"Calling function <code>maxindex([7, 8, 4])</code>.")\n' +
    '_test_result = myTests().main()';


$(document).ready(function () {

    const parson = new ParsonsWidget({
        'sortableId': 'sortable',
        'trashId': 'sortableTrash',
        'unittests': unitTests
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
        $("#jsparson").html("<h2>Feedback from testing your program:</h2>" +
            fb.feedback);
        if (fb.success) { alert("Good, you solved the assignment!"); }
    });
});
