const store = new Vuex.Store({
    state:{
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    },
    mutations:{
        addTask(state, task){
            state.tasks.push(task)
        },

        deleteTask(state, taskIndex){
            state.tasks.splice(taskIndex, 1)
        },

        toggletaskCompletion(state, taskIndex){
            const task = state.tasks[taskIndex]
            task.completed = !task.completed
        },

        saveTasks(state){
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    },

    actions:{
        addTask({commit}, task){
            commit('addTask', task);
            commit('saveTasks')
        },

        deleteTask({commit}, taskIndex){
            commit('deleteTask', taskIndex)
            commit('saveTasks')
        },

        toggletaskCompletion({commit}, taskIndex){
            commit('toggletaskCompletion', taskIndex)
            commit('saveTasks')
        },
    },

    getters:{
        alltasks(state){
            return state.tasks;
        }
    }


})