<template>
  <div class="home">
    <!-- <button v-on:click="toggle('inseli', 1)">INSELI</button> -->
    <Start v-show="showStart" />
    <Map v-show="showMap" class="map" />

    <button v-on:click="toggle(1)">Show Club Info</button>
    <div
      id="array-rendering"
      v-show="showClubInfo"
      @emitClubInfo="clubInfo($event)"
    >
      <div v-bind:key="clubs" v-if="clubs.length > 0">
        <Club
          :name="clubs[index].fields.name"
          :entry="clubs[index].fields.entry"
          :openings="clubs[index].fields.openings"
          :distance="clubs[index].fields.distance"
          :music="clubs[index].fields.music"
          :events="clubs[index].fields.events"
          :insider="clubs[index].fields.insider"
        />
      </div>
    </div>
    <div class="overlay" v-show="showOverlay">
      <Overlay />
    </div>
    <Button />
  </div>
</template>


<script>
import Map from "@/components/Map_track.vue";
import Club from "@/components/Club.vue";
import Overlay from "@/components/Overlay.vue";
import Button from "@/components/Button.vue";
import Start from "@/components/Start.vue";
import contentful from "@/modules/contentful";

export default {
  name: "Home",
  components: {
    Map,
    Club,
    Overlay,
    Button,
    Start,
  },
  data() {
    return {
      showStart: false,
      showMap: true,
      showOverlay: false,
      clubs: [],
      showClubInfo: false,
      index: 0,
      showClubButton: false,
    };
  },
  created: async function () {
    this.clubs = await contentful.getClubs();
  },
  methods: {
    toggle: function (idx) {
      if (!this.showClubInfo) {
        this.showClubInfo = true;
        this.index = idx;
        this.showMap = false;
      } else {
        this.showClubInfo = false;
        this.showMap = true;
      }
    },
    clubInfo: function (clubIndex) {
      console.log("show club info");
      this.showClubInfo = true;
      this.showMap = false;
      this.index = clubIndex;
    },
  },
};
</script>


<style scoped>
.map {
  width: 100vw;
  height: 100vh;
}

#array-rendering {
  background-attachment: fixed;
}

button {
  padding: 2.5%;
  border: white solid 2px;
  border-radius: 2px;
  color: white;
  background-color: black;
  font-family: "Orbitron", Helvetica, Arial, sans-serif;
}
</style>
