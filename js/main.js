new Vue({
    el: '#app',
    data(){
        return {
            newTask: {
                title: '',
                description: '',
                deadline: '',
                createdAt: new Date().toISOString().slice(0,10)
            },
            tasks: []
        }
    },
    methods:{
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = { title: '', description: '', deadline: '', createdAt: new Date().toISOString().slice(0,10) };
        }
    }
})
