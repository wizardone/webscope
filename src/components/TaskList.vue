<template>
  <div class="task-list">
    <task-form></task-form>
    <div v-for="(task, index) in tasks">
      <task-info :task="task"></task-info>
    </div>
  </div>
</template>

<script>
import TaskInfo from './TaskInfo'
import TaskForm from './TaskForm'

export default {
  name: 'task-list',
  components: { TaskInfo, TaskForm },
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
