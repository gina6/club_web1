<template>
  <div>
    <h1>cLUb Map</h1>
    <Map class="map" />

  </div>
</template>

<script>
import Map from '../components/Map.vue'

export default {
  name: "About",
  components: {
        Map,
    }

};
</script>


<style scoped>
.map{
  width: 100vw;
  height: 50vh;
}
</style>