<template>
  <div class="club">
    <h1>{{name}}</h1>
    <div class="info">
      <h2>Entry</h2>
      <p>{{entry}}</p>
    </div>
    <div class="info">
      <h2>Opening Hours</h2>
      <p>{{openings}}</p>
    </div>
    <div class="infos">
      <h2>Distance from Trainstation</h2>
      <p>{{distance}} km</p>
    </div>
    <div class="info">
      <h2>Music</h2>
      <p>{{music}}</p>
    </div>
    <div class="info">
      <h2>Events</h2>
      <p>{{events}}</p>
    </div>
    <div class="info">
      <h2>Insider</h2>
      <p>{{insider}}</p>
    </div>
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

.club {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5% 0 5%;
  text-align: left;
}

.info {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 40px;
}

</style>
