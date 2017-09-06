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
          <!--<span>Assignee: {{ task.user.name }}</span>
          <span>Document: {{ task.document.name }}</span>-->
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
