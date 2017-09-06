<template>
  <div>
    <div class="new-task">
      <button v-on:click="toggleTaskForm">Add New Task</button>
    </div>
    <form class="new-task" v-bind:class="{ hidden: hideTaskForm }" v-on:submit="submitTask">
      <label>Title: <input type="text" v-model="task.name"/></label><br />
      <label>Description: <textarea v-model="task.description" rows="15" cols="20"></textarea></label><br />
      <label>Due Date: <input type="text" v-model="task.dueDate"/></label><br />
      <!--<label>Assignee: <input type="text" name="dueDate"/></label><br />
      <label>Document: <input type="text" name="dueDate"/></label><br />-->
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
      task: {
        name: '',
        description: '',
        dueDate: '',
        id: 13,
        status: 0,
        user: '',
        document: ''
      }
    }
  },
  methods: {
    toggleTaskForm: function () {
      if (this.hideTaskForm === true) {
        this.hideTaskForm = false
      } else {
        this.hideTaskForm = true
      }
    },
    submitTask: function (e) {
      // OMG, there surely must be a more elegant approach to form handling, cause this is awful!!!
      e.preventDefault()
      this.$store.commit({ type: 'addTask', task: this.task })
      this.$store.commit({ type: 'updateUpcomingTasksCount' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  display: none;
}
</style>
