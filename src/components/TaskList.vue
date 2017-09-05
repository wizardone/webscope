<template>
  <div class="task-list">
    <div v-show="tasks.length">Total tasks: {{tasks.length}}</div>
    <div class='ui centered card' v-for="task in tasks">
      <div class='content'>
        <div class='header'>
          {{ task.name }}
        </div>
        <div class='meta'>
          <p>{{ task.description }}</p>
          <p>Due Date: {{ task.dueDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-list',
  props: ['tasks'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
.header {
  font-weight: bold;
}
</style>
