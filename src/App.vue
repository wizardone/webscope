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

  export default {
    name: 'app',
    data () {
      return {
        tasks: [],
        documents: [],
        users: []
      }
    },
    beforeMount: function () {
      this.loadJson()
    },
    methods: {
      loadJson: function () {
        let jsonData = require('../data.json')
        this.tasks = jsonData.tasks
        this.documents = jsonData.documents
        this.users = jsonData.users
      }
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

