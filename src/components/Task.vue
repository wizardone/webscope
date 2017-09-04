<template>
  <div class="task">
    <span>{{ name }}</span>
    <span>{{ dueDate }}</span>
    <span>{{ status }}</span>
    <h1>{{ description }}</h1>
  </div>
</template>

<script>
export default {
  name: 'task',
  props: ['user', 'document'],
  data () {
    return {
      name: 'Name of task',
      description: 'Description of the task',
      dueDate: 'Due date of the task',
      status: 'Status of the task'
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
</style>



