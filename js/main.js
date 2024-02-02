new Vue({
    el: '#app',
    data(){
        return {
            newTask: {
                title: '',
                description: '',
                deadline: '',
                createdAt: new Date().toLocaleString(),
                lastEdited: null
            },
            editedTask: null,
            editedTaskIndex: null,
            editedColumn: null,
            plannedTasks: [],
            inProgressTasks: [],
            testingTasks: [],
        }
    },
    methods:{
        addTask() {
            this.plannedTasks.push({...this.newTask});
            this.newTask = { title: '', description: '', deadline: '', createdAt: new Date().toLocaleString(), lastEdited: null };
        },
        deleteTask(taskIndex) {
            this.plannedTasks.splice(taskIndex, 1);
        },
        startEditing(taskIndex, column) {
            this.editedTask = {...this[column][taskIndex]};
            this.editedTaskIndex = taskIndex;
            this.editedColumn = column;
        },
        finishEditing(taskIndex) {
            this[this.editedColumn][taskIndex] = {...this.editedTask, lastEdited: new Date().toLocaleString()};
            this.editedTask = null;
            this.editedTaskIndex = null;
            this.editedColumn = null;
        },
        moveToInProgress(taskIndex) {
            const taskToMove = this.plannedTasks.splice(taskIndex, 1)[0];
            this.inProgressTasks.push(taskToMove);
        },
        moveToTesting(taskIndex) {
            const taskToMove = this.inProgressTasks.splice(taskIndex, 1)[0];
            this.testingTasks.push(taskToMove);
        },
        moveToTesting(taskIndex) {
            const taskToMove = this.inProgressTasks.splice(taskIndex, 1)[0];
            this.testingTasks.push(taskToMove);
        },
    }
})
