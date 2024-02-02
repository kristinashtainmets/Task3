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
        editTask(taskIndex, updatedTask) {
            this.plannedTasks[taskIndex] = {...updatedTask, lastEdited: new Date().toISOString().slice(0,10)};
        },
        moveToInProgress(taskIndex) {
            const taskToMove = this.plannedTasks.splice(taskIndex, 1)[0];
            this.inProgressTasks.push(taskToMove);
        }
    }
})
