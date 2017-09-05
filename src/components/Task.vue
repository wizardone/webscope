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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task',
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.header p {
font-weight: bold;
}
</style>



