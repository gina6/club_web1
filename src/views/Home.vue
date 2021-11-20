<template>
  <div class="home">
    <button v-on:click="showOverlay = true">Open Popup</button>
    <Map class="map" />

    <Club />
  </div>
</template>


<script>
import Map from '@/components/Map_track.vue'
import Club from '@/components/Club.vue'

export default {
  name: "Home",
  components: {
        Map,
        Club,
    },
  data() {
    return {
      showOverlay: false
    }
  },
};
</script>


<style scoped>

.map{
  width: 100vw;
  height: 90vh;
}


</style>
