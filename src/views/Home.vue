<template>
  <div class="home">
    <!-- <button v-on:click="toggle('inseli', 1)">INSELI</button> -->
    <Start  v-show="showStart" />
    <Map v-show="showMap" class="map" />

    <div id="array-rendering" v-show="inseli">
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
    <div class="overlay"  v-show="showOverlay">
      <Overlay />
    </div>
    <Button/>
  </div>
</template>


<script>
import Map from "@/components/Map_track.vue";
import Club from "@/components/Club.vue";
import Overlay from "@/components/Overlay.vue"
import Button from "@/components/Button.vue"
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
      showStart: true,
      showMap: false,
      showOverlay: false,
      clubs: [],
      inseli: false,
      index: 0,
      showClubButton: false,
    };
  },
  created: async function () {
    this.clubs = await contentful.getClubs();

  },
  methods: {
    toggle: function (message, idx) {
      console.log(message);
      if (message == "inseli") {
        if (this.inseli) {
          this.inseli = false;
          this.showMap = true;
          this.showStart = false;
          this.index = idx;
        } else {
          this.inseli = true;
          this.showMap = false;
          this.index = idx;
        }
      }
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
</style>
