<template>
  <div class="task-list">
    <div>Total tasks: {{tasks.length}}</div>
    <task v-for="(task, index) in tasks" v-bind:task="task" :key="task.id"></task>
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'task-list',
  components: { Task },
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

div span {
  margin: 10px;
}
</style>
