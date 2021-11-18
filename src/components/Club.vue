<template>
  <div class="club">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Club',
  props: {
    name: String,
    entry: String,
    openings: String,
    distance: Object,
    music: String,
    events: String,
    insider: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
