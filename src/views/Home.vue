<template>
  <div class="home">
    <div v-show="showStart">
      <Start />
      <img
        src="../assets/Arrow_next.svg"
        v-on:click="next()"
        alt=""
        id="arrowNext"
      />
    </div>
    <Map ref="map" v-show="showMap" class="map" />

    <button id="clubInfoBtn" v-on:click="toggle(1)" v-show="showClubButton">
      Show Club Info
    </button>

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
      <button id="clubInfoBtn" v-on:click="hide()" v-show="hideClubButton">
        Hide Club Info
      </button>
    </div>
  </div>
</template>


<script>
import Map from "@/components/Map_track.vue";
import Club from "@/components/Club.vue";
import Start from "@/components/Start.vue";
import contentful from "@/modules/contentful";

export default {
  name: "Home",
  components: {
    Map,
    Club,
    Start,
  },
  data() {
    return {
      showStart: true,
      showMap: false,
      showOverlay: false,
      clubs: [],
      showClubInfo: false,
      index: 0,
      showClubButton: false,
      hideClubButton: false,
    };
  },
  created: async function () {
    this.clubs = await contentful.getClubs();
  },
  methods: {
    toggle: function (idx) {
      this.showClubInfo = true;
      this.index = idx;
      this.showMap = false;
      this.hideClubButton = true;
      this.showClubButton = false;
    },
    clubInfo: function (clubIndex) {
      console.log("show club info");
      this.showClubInfo = true;
      this.showMap = false;
      this.index = clubIndex;
    },
    next: function () {
      this.showStart = false;
      this.showMap = true;
      this.showClubButton = true;
      setTimeout(1000, function () {
        this.$refs.map.updateMap();
      });
    },
    hide: function () {
      this.showClubInfo = false;
      this.showMap = true;
      this.showClubButton = true;
      this.hideClubButton = false;
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

#arrowNext {
  height: 4vh;
  width: auto;
  position: fixed;
  bottom: 5%;
  right: 10%;
}

#clubInfoBtn {
  z-index: 3;
}
</style>
