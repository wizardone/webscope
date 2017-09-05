<template>
  <div id='app'>
    <task-list v-bind:tasks='tasks'></task-list>
  </div>
</template>

<script>
  import User from './components/User'
  import Document from './components/Document'
  import Task from './components/Task'
  import TaskList from './components/TaskList'
  // import { mapState } from 'vuex'

  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {
      tasks () {
        return this.$store.state.tasks
      },
      documents () {
        return this.$store.state.documents
      },
      users () {
        return this.$store.state.users
      }
    },
    beforeMount: function () {
    },
    components: {
      User, Document, Task, TaskList
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

