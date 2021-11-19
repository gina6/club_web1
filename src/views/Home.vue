<template>
  <div class="home">
    <Map class="map" />
  </div>
</template>

<script>
import Map from '../components/Map_track.vue'

export default {
  name: "Home",
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
