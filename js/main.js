new Vue({
    el: '#app',
    data(){
        return {
            newTask: {
                title: '',
                description: '',
                deadline: '',
                createdAt: new Date().toISOString().slice(0,10),
                lastEdited: null
            },
            editedTask: null,
            editedTaskIndex: null,
            plannedTasks: [],
            inProgressTasks: [],
        }
    },
    methods:{
        addTask() {
            this.plannedTasks.push({...this.newTask});
            this.newTask = { title: '', description: '', deadline: '', createdAt: new Date().toISOString().slice(0,10), lastEdited: null };
        },
        deleteTask(taskIndex) {
            this.plannedTasks.splice(taskIndex, 1);
        },
        startEditing(taskIndex) {
            this.editedTask = {...this.plannedTasks[taskIndex]};
            this.editedTaskIndex = taskIndex;
        },
        finishEditing(taskIndex) {
            this.plannedTasks[taskIndex] = {...this.editedTask, lastEdited: new Date().toISOString().slice(0,10)};
            this.editedTask = null;
            this.editedTaskIndex = null;
        },
        moveToInProgress(taskIndex) {
            const taskToMove = this.plannedTasks.splice(taskIndex, 1)[0];
            this.inProgressTasks.push(taskToMove);
        }
    }
})
