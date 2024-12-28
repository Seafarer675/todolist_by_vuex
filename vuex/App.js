const App = {
    template: `
      <div class = "main">
        <input v-model="newTask" placeholder="新增待辦事項" v-on:keyup.enter="addNewtask"></input>
        <button v-on:click="addNewtask" class="btn">新增</button>

        <ul>
            <li v-for="(task, index) in tasks" :key= "index">
                <input type="checkbox" v-model="task.completed" v-on:click="toggletaskCompletion(index)">
                <span :class="{completed: task.completed}">{{task.text}}</span>
                <button class="btn1" v-on:click="deleteTask(index)" >刪除</button>              
            </li>
        </ul>
      </div>
    `,
    data() {
      return {
        newTask: "",
        edtask: "",
        isEditing: false,
      };
    },

    computed: {
      tasks(){
        return this.$store.getters.alltasks;
      }
    },
    methods: {
      addNewtask(){
        if(this.newTask.trim()){
          this.$store.dispatch('addTask', {text:this.newTask, completed : false})
          this.newTask = ''
        }
      },

      deleteTask(index){
        this.$store.dispatch('deleteTask', index)
      },

      toggletaskCompletion(index){
        this.$store.dispatch('toggletaskCompletion', index)
      },
    }

  };
  