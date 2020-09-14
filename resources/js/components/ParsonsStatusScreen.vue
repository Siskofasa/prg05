<template>
    <div id="parsonsStatusScreen" v-if="shouldRender">
        <h2>All problems solved!</h2>
        <p>Good job!</p>
        <!--        <ul id="solved-assignments">-->
        <!--            <li v-for="(assignment, index) in assignments" :key="assignment.assignment_id">-->
        <!--                Assignment {{index + 1}}: {{ assignment.attempts }} attempts, completed in {{assignment.time_completed / 1000 }} seconds.-->
        <!--            </li>-->
        <!--        </ul>-->
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Assignment</th>
                <th>Attempts</th>
                <th>Time spend solving (s)</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(assignment, index) in assignments" :key="assignment.assignment_id">
                <th scope="row" :id="'table-row-' + index">{{ assignment.problemName }}</th>
                <td>{{ assignment.attempts }}</td>
                <td>{{ assignment.time_completed / 1000 }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ParsonsStatusScreen",
        props: ["userId", "getAssignmentsRoute"],
        data() {
            return {
                shouldRender: false,
                assignments: [
                    {
                        attempts: 0,
                        time_completed: 0,
                        problemName: "",
                        problemSubject: ""
                    }
                ]
            }
        },
        methods: {
            showStatusScreen() {
                this.shouldRender = true;
                this.getAssignments();
            },
            getAssignments() {
                axios.get(this.getAssignmentsRoute).then(data => {
                    this.assignments = data.data.exercises;
                    console.log(this.assignments);
                    const url = 'http://siskofasa.nl:3000/api/parsonsproblems';
                    return this.axios.get(url)
                }).catch(err => {
                    console.log(err)
                }).then(data => {
                    const items = data.data.items;
                    console.log(items);

                    this.assignments = this.assignments.map(assignment => {
                        const foundItem = items.find(item => {
                            // console.log()
                            return item["_id"] === assignment["assignment_id"]
                        });

                        return ({
                            ...assignment,
                            problemName: foundItem.problemName,
                            problemSubject: foundItem.problemSubject
                        });
                    });
                })
            }
        }
    }
</script>

<style scoped>

</style>
