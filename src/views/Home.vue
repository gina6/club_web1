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
    <Map ref="map" v-show="showMap" class="map" @emitClubInfo="clubInfo($event)" />


    <div
      id="array-rendering"
      v-show="showClubInfo"
      
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
    },
    clubInfo: function (clubIndex) {
      console.log("show club info");
      this.showClubInfo = true;
      this.showMap = false;
      this.hideClubButton = true;
      this.index = clubIndex;
    },
    next: function () {
      this.showStart = false;
      this.showMap = true;
      this.$nextTick( () => {
        this.$refs.map.updateMap();
      });
    },
    hide: function () {
      this.showClubInfo = false;
      this.showMap = true;
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
  margin-bottom: 5%;
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
