<template>
  <div class="task">
    <div class='content'>
      <div class='content'>
        <div class='header'>
          <p>{{ task.name }}</p>
        </div>
        <div class='meta'>
          <p>{{ task.description }}</p>
          <span>Due Date: {{ task.dueDate }}</span>
          <span>Assignee: {{ task.user.name }}</span>
          <span>Document: {{ task.document.name }}</span>
          <span>
            <button v-if="task.status == 0" v-on:click="completeTask(task.id)">Mark as complete</button>
            <span v-else><b>This task has been completed</b></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-info',
  props: ['task'],
  data () {
    return {
    }
  },
  methods: {
    completeTask: function (id) {
      this.$store.commit({ type: 'updateTaskStatus', id: id })
      this.$store.commit({ type: 'updateCompletedTasksCount' })
      this.$store.commit({ type: 'decreaseUpcomingTasksCount' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.header p {
font-weight: bold;
}
</style>
