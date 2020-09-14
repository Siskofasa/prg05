import AbstractGrader from "./AbstractGrader";
import VariableCheckGrader from "./VariableCheckGrader";
import LanguageTranslationGrader from "./LanguageTranslationGrader";

// A grader to be used for exercises which draw turtle graphics.
// Required options:
//  - turtleModelCode: The code constructing the model drawing. The turtle is initialized
//                    to modelTurtle variable, so your code should use that variable.
//
// Options that can be specified (that is, optional):
//  - turtlePenDown: a boolean specifying whether or not the pen should be put down
//                   initially for the student constructed code
//  - turtleModelCanvas: ID of the canvas DOM element where the model solution will be drawn.
//                  Defaults to modelCanvas.
//  - turtleStudentCanvas: ID of the canvas DOM element where student turtle will draw.
//                  Defaults to studentCanvas.
//
// Grading is based on comparing the commands executed by the model and student turtle.
// If the executable_code option is also specified, the code on each line of that option will
// be executed instead of the code in the student constructed lines. Note, that the student
// code should use the variable myTurtle for commands to control the turtle in order for the
// grading to work.
export default class TurtleGrader extends AbstractGrader {
    constructor(parson) {
        super(parson);

        this.turtleLibrary = "print(turtle)\nfrom turtle import Turtle\n" +
            "class ParsonTurtle(Turtle):\n" +
            "  def __init__(self):\n" +
            "    self._turtle = Turtle()\n" +
            "    self._turtle.shape('turtle')\n" +
            "    self._commands = []\n" +
            "\n" +
            "  def forward(self, dist, log=True):\n" +
            "    self._turtle.forward(dist)\n" +
            "    if log:\n" +
            "      self._commands.append(\"fwd\" + str(dist))\n" +
            "  def fd(self, dist, log=True):\n" +
            "    return self.forward(dist, log=log)\n" +
            "\n" +
            "\n" +
            "  def backward(self, dist, log=True):\n" +
            "    self._turtle.backward(dist)\n" +
            "    if log:\n" +
            "      self._commands.append(\"bwd\" + str(dist))\n" +
            "  def back(self, dist, log=True):\n" +
            "    return self.backward(dist, log=log)\n" +
            "  def bk(self, dist, log=True):\n" +
            "    return self.backward(dist, log=log)\n" +
            "\n" +
            "  def left(self, angle, log=True):\n" +
            "    self._turtle.left(angle)\n" +
            "    if log:\n" +
            "      self._commands.append(\"lt\" + str(angle))\n" +
            "  def lt(self, angle, log=True):\n" +
            "    return self.left(angle, log=log)\n" +
            "\n" +
            "  def right(self, angle, log=True):\n" +
            "    self._turtle.right(angle)\n" +
            "    if log:\n" +
            "      self._commands.append(\"rt\" + str(angle))\n" +
            "  def rt(self, angle, log=True):\n" +
            "    return self.right(angle, log=log)\n" +
            "\n" +
            "  def goto(self, nx, ny, log=True):\n" +
            "    self._turtle.goto(nx, ny)\n" +
            "    if log:\n" +
            "      self._commands.append(\"gt\" + str(nx) + \"-\" + str(ny))\n" +
            "\n" +
            "  def setposition(self, nx, ny, log=True):\n" +
            "    self._turtle.setposition(nx, ny)\n" +
            "    if log:\n" +
            "      self._commands.append(\"setpos\" + str(nx) + \"-\" + str(ny))\n" +
            "  def setpos(self, nx, ny, log=True):\n" +
            "    return self.setposition(nx, ny, log=log)\n" +
            "\n" +
            "  def setx(self, nx, log=True):\n" +
            "    self._turtle.setx(nx)\n" +
            "    if log:\n" +
            "      self._commands.append(\"setx\" + str(nx))\n" +
            "\n" +
            "  def sety(self, ny, log=True):\n" +
            "    self._turtle.sety(ny)\n" +
            "    if log:\n" +
            "      self._commands.append(\"sety\" + str(ny))\n" +
            "\n" +
            "  def dot(self, size, color, log=True):\n" +
            "    self._turtle.dot(size, color)\n" +
            "    if log:\n" +
            "      self._commands.append(\"dot\" + str(size) + \"-\" + str(color))\n" +
            "\n" +
            "  def circle(self, radius, extent, log=True):\n" +
            "    self._turtle.circle(radius, extent)\n" +
            "    if log:\n" +
            "      self._commands.append(\"circle\" + str(radius) + \"-\" + str(extent))\n" +
            "\n" +
            "  def up(self, log=True):\n" +
            "    self._turtle.up()\n" +
            "    if log:\n" +
            "      self._commands.append(\"up\")\n" +
            "  def penup(self, log=True):\n" +
            "    return self.up(log=log)\n" +
            "  def pu(self, log=True):\n" +
            "    return self.up(log=log)\n" +
            "\n" +
            "  def down(self, log=True):\n" +
            "    self._turtle.down()\n" +
            "    if log:\n" +
            "      self._commands.append(\"down\")\n" +
            "  def pendown(self, log=True):\n" +
            "    return self.down(log=log)\n" +
            "  def pd(self, log=True):\n" +
            "    return self.down(log=log)\n" +
            "\n" +
            "  def speed(self, spd):\n" +
            "    self._turtle.speed(spd)\n" +
            "\n" +
            "  def _logColorChange(self, command, color, green, blue):\n" +
            "    if blue is not None:\n" +
            "      self._commands.append(\"%s(%d, %d, %d)\"%(command, color, green, blue))\n" +
            "    else:\n" +
            "      self._commands.append(\"%s(%s)\"%(command, color))\n" +
            "\n" +
            "  def pencolor(self, color, green=None, blue=None, log=True):\n" +
            "    if blue is not None:\n" +
            "      self._turtle.pencolor(color, green, blue)\n" +
            "    else:\n" +
            "      self._turtle.pencolor(color)\n" +
            "    if log:\n" +
            "      self._logColorChange(\"pcolor\", color, green, blue)\n" +
            "\n" +
            "  def color(self, color, green=None, blue=None, log=True):\n" +
            "    if blue is not None:\n" +
            "      self._turtle.color(color, green, blue)\n" +
            "    else:\n" +
            "      self._turtle.color(color)\n" +
            "    if log:\n" +
            "      self._logColorChange(\"color\", color, green, blue)\n" +
            "\n" +
            "  def fillcolor(self, color, green=None, blue=None, log=True):\n" +
            "    if blue is not None:\n" +
            "      self._turtle.fillcolor(color, green, blue)\n" +
            "    else:\n" +
            "      self._turtle.fillcolor(color)\n" +
            "    if log:\n" +
            "      self._logColorChange(\"fcolor\", color, green, blue)\n" +
            "\n" +
            "  def width(self, size, log=True):\n" +
            "    self._turtle.pensize(size)\n" +
            "    if log:\n" +
            "      self._commands.append(\"width%d\"%size)\n" +
            "  def pensize(self, size, log=True):\n" +
            "    return self.width(size, log=log)\n" +
            "\n" +
            "  def commands(self):\n" +
            "    return ':'.join(self._commands)"


        // execute the model solution turtlet path to have the target "picture" visible in the
        // beginning
        const modelCommands = this._executeTurtleModel();

        // specify variable tests for the commands executed by the student turtlet and the model
        const penDown = typeof this.parson.options.turtlePenDown === "boolean" ?
            this.parson.options.turtlePenDown : true;
        // set the vartests in the parson options
        this.parson.options["varTests"] = [
            {
                initcode: "import parsonturtle\nmyTurtle = parsonturtle.ParsonTurtle()\n" +
                    "myTurtle.speed(0.3)\nmyTurtle.pensize(3, False)\n" +
                    (penDown ? "" : "myTurtle.up()\n"), // set the state of the pen
                code: (this.parson.options.turtleTestCode ?
                    this.parson.options.turtleTestCode : "") + "\ncommands = myTurtle.commands()",
                message: "", variables: {commands: modelCommands}
            }
        ];
    };

    type() {
        return "TurtleGrader"
    }

    _executeTurtleModel() {
        const code = this.turtleLibrary + "\nmodelTurtle = parsonturtle.ParsonTurtle()\n" +
            "modelTurtle.color(160, 160, 160, False)\n" +
            this.parson.options.turtleModelCode +
            "\ncommands = modelTurtle.commands()\n";
        Sk.canvas = this.parson.options.turtleModelCanvas || "modelCanvas";

        // console.log(code);
        const result = this._variablesAfterExecution(code, ["commands"]);
        console.log(result);
        if (!result.variables || !result.variables.commands || !result.variables.commands.v) {
            return "None";
        }
        return result.variables.commands.v;
    };

    grade(){
        // set the correct canvas where the turtle should draw
        Sk.canvas = this.parson.options.turtleStudentCanvas || "studentCanvas";
        // Pass the grading on to either the LangTranslationGrader or VariableChecker
        if (this.parson.options.executable_code) {
            return new LanguageTranslationGrader(this.parson).grade();
        } else {
            return new VariableCheckGrader(this.parson).grade();
        }
    };
}
