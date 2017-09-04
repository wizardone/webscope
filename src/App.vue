<template>
  <div id="app">
    <task></task>
  </div>
</template>

<script>
import User from './components/User'
import Document from './components/Document'
import Task from './components/Task'

export default {
  name: 'app',
  components: {
    User, Document, Task
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
