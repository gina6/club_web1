<template>
  <div class="home">

    <Map class="map" />
    <ClubInfo />
  </div>
</template>

<script>
import Map from '../components/Map_track.vue'
import ClubInfo from '../components/Club-info.vue'

export default {
  name: "Home",
  components: {
        Map,
        ClubInfo,
    },
  methods: {

  }
};
</script>


<style scoped>
.map{
  width: 100vw;
  height: 90vh;
}

</style>
