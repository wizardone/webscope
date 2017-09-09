<template>
  <div>
    <div class="new-task">
      <button v-on:click="toggleTaskForm">Add New Task</button>
    </div>
    <form class="new-task" v-bind:class="{ hidden: hideTaskForm }" v-on:submit="submitTask">
      <span class="errors" v-show="formErrors">Please fill in all the fields and check your date!</span>
      <label>Title: <input type="text" v-model="task.name" data-vv-name="title"/></label><br />
      <label>Description: <textarea v-model="task.description" rows="15" cols="20"></textarea></label><br />
      <label>Due Date: <input type="date" v-model="task.dueDate"/></label><br />
      <label>
        Assignee:
          <select name="assignee" v-model="task.assigneeId">
            <option v-for="assignee in getUsers" v-bind:value="assignee.id">
              {{ assignee.name }}
            </option>
          </select>
      </label><br />
      <label>
        Document:
        <select name="Document" v-model="task.documentId">
          <option v-for="document in getDocuments" v-bind:value="document.id">
            {{ document.name }}
          </option>
        </select>
      </label><br />
      <input type="submit" value="Add task"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'task-form',
  props: [],
  data () {
    return {
      hideTaskForm: true,
      formErrors: false,
      task: {
        name: '',
        description: '',
        dueDate: '',
        id: '',
        status: 0,
        assigneeId: '',
        documentId: ''
      }
    }
  },
  computed: {
    getDocuments () {
      return this.$store.getters.getDocuments
    },
    getUsers () {
      return this.$store.getters.getUsers
    }
  },
  methods: {
    getNextTaskId: function () {
      return this.$store.getters.getNextId
    },
    toggleTaskForm: function () {
      if (this.hideTaskForm === true) {
        this.hideTaskForm = false
      } else {
        this.hideTaskForm = true
      }
    },
    submitTask: function (e) {
      // OMG, there surely must be a more elegant approach to form handling, cause this is awful!!!
      // Tried using some vue validation plugins to no good. Don't know why they are not working
      // Fallback with some very basic custom validation
      e.preventDefault()
      // Add the new id to the task, this was the only way that I got it working...
      let newTask = Object.assign(this.task, { id: this.getNextTaskId() })
      if (this.taskValid(newTask)) {
        this.$store.dispatch({ type: 'addTask', task: newTask })
        this.formErrors = false
        this.toggleTaskForm()
      } else {
        this.formErrors = true
      }
    },
    taskValid: function (task) {
      let valid = true
      for (let attribute in task) {
        if (task[attribute] === '' || task[attribute] === undefined || task[attribute] === null) {
          valid = false
        }
        if (attribute === 'dueDate' && (new Date(task[attribute]).getTime() < new Date().getTime())) {
          valid = false
        }
      }
      return valid
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  display: none;
}

.errors {
  color: red;
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
