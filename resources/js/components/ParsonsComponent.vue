<template>
    <div id="parsonsProblem" v-if="shouldRender">
        <h2 v-html="item.problemName"></h2>
        <p v-html="item.problemSubject"></p>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button v-if="group === 'B'" type="button" class="btn btn-secondary" id="eliminateDistractorButton">
                Eliminate Distractor
            </button>
            <button v-if="group === 'B'" type="button" class="btn btn-secondary" id="partlyCorrectButton">Partly Correct
                Exercise
            </button>
            <button v-if="group === 'B'" type="button" class="btn btn-secondary" id="showCorrectnessButton">Show
                Correctness
            </button>
        </div>
        <div id="sortableTrash" class="sortable-code"></div>
        <div id="sortable" class="sortable-code">
        </div>
        <div style="clear:both;"></div>
        <div id="removedDistractors" class="sortable-code"></div>
        <div class="button-bar">
            <button type="button" class="btn btn-default btn-reset" id="newInstanceLink">New Instance</button>
            <button type="button" class="btn btn-default btn-check" id="feedbackLink">Get Feedback</button>
        </div>
        <div id="progressBar">
            <ul id="progressBarList" style="display: inline">
                <li>
                    <button
                        v-if="this.presentationMode" type="button" class="btn btn-secondary"
                        v-on:click="moveAssignment(true)" :disabled="!(this.index > 0)"><
                    </button>
                </li>
                <li v-for="(item, idx) in progressItems" :key="item.number"
                    v-bind:style="item.shouldShow ? 'display: inline' : 'display: none !important'"
                    :class="[presentationMode ? 'notCompleted' : (item.completed) ? 'completed' : 'notCompleted',
                     (presentationMode && idx === index) ? 'selected': '']">

                    <!--                    v-bind:style="{display: item.shouldShow ? 'inline' : 'none' }" :class="(item.completed) ? 'completed' : 'notCompleted'">-->
                    <!--                       {{ item.number }}: {{ item.completed }}-->
                </li>
                <li>
                    <button v-if="this.presentationMode" type="button" class="btn btn-secondary"
                            v-on:click="moveAssignment(false)" :disabled="!(this.index < this.items.length - 1)">>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ParsonsConverter from "../lib/parsons_converter";
    import ParsonsWidget from "../parsons_lib/ParsonsWidget";

    export default {
        name: "ParsonsComponent",
        props: ["userId", "addAssignmentRoute", "getAssignmentsRoute", "group", "presentationMode"],
        data() {
            return {
                shouldRender: true,
                item: {
                    problemName: "",
                    problemSubject: "",
                    problemPieces: [],
                    problemHints: []
                },
                items: [],
                solvedItems: [],
                index: 0,
                parson: new ParsonsWidget({
                    'sortableId': 'sortable',
                    'trashId': 'sortableTrash',
                    'max_wrong_lines': 10,
                    'feedback_cb': this.displayErrors,
                    'first_error_only': false
                }),
                timer: Date.now(),
                attempts: 0,
                eliminateDistractorButton: null,
                partlyCorrectButton: null,
                showCorrectnessButton: null,
                progressItems: [],
                hintsUsed: {
                    "eliminateDistractors": false,
                    "partlyCorrect": false,
                    "showCorrectness": false
                },
                showItems: [
                    0, 7, 11, 14
                ]
                //Question 11: eliminate distractors well
                //Question 7 partly correct exercise
                //Question 14: show correctness
            }
        },
        created() {
            console.log(this.group);

            $(document).ready(() => {
                this.getItem();

                $("#newInstanceLink").click(event => {
                    event.preventDefault();
                    this.parson.shuffleLines();
                });
                $("#feedbackLink").click(event => {
                    event.preventDefault();
                    this.attempts++;
                    this.parson.getFeedback();
                });

                this.eliminateDistractorButton = $("#eliminateDistractorButton");
                this.partlyCorrectButton = $("#partlyCorrectButton");
                this.showCorrectnessButton = $("#showCorrectnessButton");

                //Hide all distractors
                this.eliminateDistractorButton.click(event => {
                    event.preventDefault();
                    this.eliminateDistractorButton.addClass("btn-success");
                    this.parson.binDistractors();

                    this.hintsUsed.eliminateDistractors = true;
                });

                // Place part of the code in the correct place
                // Specifically: Place all lines in the correct place that are not relevant for the assignment
                this.partlyCorrectButton.click(event => {
                    event.preventDefault();
                    this.parson.partlySolveExercise();

                    this.hintsUsed.partlyCorrect = true;

                });

                this.showCorrectnessButton.click(event => {
                    event.preventDefault();
                    this.parson.showCorrectness();

                    this.hintsUsed.showCorrectness = true;
                });
            })
        },
        methods: {
            getItem() {

                axios.get(this.getAssignmentsRoute).then(data => {
                    this.solvedItems = data.data.exercises;
                    const url = 'http://siskofasa.nl:3000/api/parsonsproblems';
                    return this.axios.get(url)
                }).catch(err => {
                    console.log(err)
                }).then(data => {
                    this.items = data.data.items;

                    if (this.presentationMode) {
                        this.items.forEach(item => {
                            item.shouldShow = this.showItems.includes(parseInt(item.problemName));
                        })
                    }

                    console.log(this.items);

                    this.progressItems = this.combineAssignmentData();

                    this.index = this.findFirstUnsolvedExercise();

                    if (this.index >= this.items.length) {
                        this.renderOverview();
                    } else {
                        this.item = this.items[this.index];
                        this.renderNewProblem();
                    }

                });
            },
            displayErrors(fb) {
                if (fb.errors.length > 0) {
                    this.eliminateDistractorButton.prop("disabled", !this.item.problemHints[0].hintValid)
                    this.partlyCorrectButton.prop("disabled", !this.item.problemHints[1].hintValid)
                    this.showCorrectnessButton.prop("disabled", !this.item.problemHints[2].hintValid)

                    alert(fb.errors[0]);
                } else {
                    this.postExercise();

                    alert("Good job!")
                    this.index++;

                    if (this.index >= this.items.length) {
                        this.renderOverview();
                    } else {
                        this.item = this.items[this.index];
                        this.renderNewProblem();
                    }
                }
            },
            renderNewProblem() {
                const parsonString = ParsonsConverter.buildParsonString(this.item.problemPieces);

                this.hintsUsed = {
                    "eliminateDistractors": false,
                    "partlyCorrect": false,
                    "showCorrectness": false
                }

                this.parson.init(parsonString);
                this.parson.shuffleLines();
                this.parson.clearFeedback();

                this.eliminateDistractorButton.prop("disabled", true);
                this.eliminateDistractorButton.removeClass("btn-success");

                this.partlyCorrectButton.prop("disabled", true);
                this.partlyCorrectButton.removeClass("btn-success");

                this.showCorrectnessButton.prop("disabled", true);
                this.showCorrectnessButton.removeClass("btn-success");

                this.timer = Date.now();
                this.attempts = 0;

                $("#ul-sortable").removeClass("incorrect correct");
                $("#removedDistractors").empty();
            },
            renderOverview() {
                this.shouldRender = false;
                this.$root.$data.shouldRenderStatusScreen = true;

                this.$root.$children[1].showStatusScreen();
            },
            postExercise() {

                if (this.presentationMode) {
                    return
                }

                axios.post(this.addAssignmentRoute, {
                    "user_id": this.userId,
                    "assignment_id": this.item._id,
                    "hints_used": JSON.stringify(this.hintsUsed),
                    "attempts": this.attempts,
                    "time_completed": Date.now() - this.timer
                }).then(_ => {
                    return axios.get(this.getAssignmentsRoute)
                }).then(data => {
                    this.solvedItems = data.data.exercises;
                }).catch(err => {
                    console.log(err)
                })
            },
            findFirstUnsolvedExercise() {

                const assignmentIds = this.solvedItems.map(i => i["assignment_id"]);
                let assignmentId;
                let assignmentIndex = this.items.length;

                this.items.some((item, index) => {
                    if (!assignmentIds.includes(item["_id"])) {
                        assignmentId = item["_id"];
                        assignmentIndex = index;
                    }
                    return !assignmentIds.includes(item["_id"]);
                })

                if (this.presentationMode) {
                    assignmentIndex = 0;
                    // while (!this.items[assignmentIndex].shouldShow && assignmentIndex < this.items.length - 1) {
                    //     assignmentIndex++;
                    // }
                }

                console.log(`Returning assignment ${assignmentId}, ${assignmentIndex}`);

                return assignmentIndex;
            },
            combineAssignmentData() {
                console.log(this.solvedItems);

                if (this.items.length === 0) {
                    return;
                }

                const result = [];
                this.items.forEach(item => {
                    result.push({
                        "name": item.problemName,
                        "number": parseInt(item.problemName),
                        "id": item._id,
                        "completed": false,
                        "shouldShow": item.shouldShow ?? true
                    })
                })

                this.solvedItems.forEach(item => {
                    const index = result.find(resultItem => item["assignment_id"] === resultItem["id"])
                    result[result.indexOf(index)].completed = true;
                });

                console.log(result);

                return result;
            },
            moveAssignment(isLeft) {
                if (isLeft && this.index > 0) {
                    this.index--;
                    while (!this.items[this.index].shouldShow && this.index > 0) {
                        this.index--;
                    }

                } else if (!isLeft && this.index < this.items.length - 1) {
                    this.index++;
                    while (!this.items[this.index].shouldShow && this.index < this.items.length - 1) {
                        this.index++;
                    }
                } else {
                    return;
                }
                this.item = this.items[this.index];
                this.renderNewProblem();
            }
        },
        watch: {
            solvedItems: function () {
                this.progressItems = this.combineAssignmentData();
            }
        }
    }
</script>

<style scoped>

</style>
