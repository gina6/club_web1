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
      <h2>Distance from Trainstation</h2>
      <p>{{distance}} min</p>
    </div>
    <div class="info">
      <h2>Music</h2>
      <p>{{music}}</p>
    </div>
    <div class="info">
      <h2>Events</h2>
      <p class="link">{{events}}</p>
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
  align-items: flex-start;
  padding: 0;
  text-align: left;
  width: 100vw;
  background: url('../assets/gradient-bg.svg') no-repeat;
  background-attachment: fixed;

}

.info {
  display: flex;
  flex-direction: column;
  background-color: rgba(50, 50, 50, 0.6);
  padding: 8px 5% 8px 5%;
  margin: 16px 0 16px 0;
}

h2{
  margin: 0;
}

.link {
  font-size: 10px;
}

</style>
