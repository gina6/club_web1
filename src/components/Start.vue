<template>
 <Map v-show="showMap" class="map" />
  <div id="gradient" v-show="showStart">
    <div id="container">
      <img src="../assets/03_cLUb_avatar_Hugo.png" alt="Hugo" id="hugo" />
      <h2>I’m thirsty... We should get us a drink!</h2>
      <img
        src="../assets/Arrow_next.svg"
        v-on:click="next()"
        alt=""
        id="arrowNext"
      />
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map_track.vue";
export default {
  name: "Start",
  components: {
    Map,
  },
  data() {
    return {
      showStart: true,
      showMap: false,
    };
  },
  methods: {
    next() {
      this.showMap = true;
      this.showStart = false;
    },
  },
};
</script>


<style scoped>

#gradient {
  width: 100%;
  height: 82vh;
  background: linear-gradient(#01003300, #010033 90%);
}

#hugo {
  height: 80vh;
  width: auto;
}

#arrowNext {
  height: 4vh;
  width: auto;
  position: fixed;
  bottom: 5%;
  right: 10%;
}

h2 {
  text-align: center;
  width: 75%;
  position: fixed;
  bottom: 15%;
  left: 13%;
}
</style>