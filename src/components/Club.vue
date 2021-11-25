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
    <div class="info">
      <h2>Distance</h2>
      <p>{{distance}} min</p>
    </div>
    <div class="info">
      <h2>Music</h2>
      <p>{{music}}</p>
    </div>
    <div class="info">
      <h2>Events</h2>
      <a class="link" v-bind:href="events" target="_blank">Go to website</a>
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

<style scoped>

.club {
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: left;
  width: 100vw;
}

.info {
  display: flex;
  flex-direction: column;
  /* border-bottom: 3px solid #40DDC2; */
  padding: 8px 5% 8px 5%;
  margin: 16px 0 0px 0;
}

.link {
  font-family: "Jost";
  font-size: 1.3em;
  color: white;
  padding: 5% 0;
}


</style>
