<template>
  <div id='app'>
    <span>Completed tasks: <b>{{completedTasksCount}}</b></span> |
    <span>Upcoming tasks: <b>{{upcomingTasksCount}}</b></span> |
    <span>Overdue tasks: <b>{{overdueTasksCount}}</b></span>
    <task-list :tasks='tasks'></task-list>
  </div>
</template>

<script>
  import TaskList from './components/TaskList'

  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {
      tasks () {
        return this.$store.state.tasks.map((task) => {
          return Object.assign(task, {
            user: this.getUser(task.assigneeId),
            document: this.getDocument(task.documentId)
          })
        })
      },
      completedTasksCount () {
        return this.$store.state.completedTasksCount
      },
      upcomingTasksCount () {
        return this.$store.state.upcomingTasksCount
      },
      overdueTasksCount () {
        return this.$store.state.overdueTasksCount
      }
    },
    methods: {
      getUser (userId) {
        return this.$store.getters.getUser(userId)
      },
      getDocument (documentId) {
        return this.$store.getters.getDocument(documentId)
      }
    },
    components: {
      TaskList
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
  background: #86a9e0;
}
</style>

