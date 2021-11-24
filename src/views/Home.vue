<template>
  <div class="home">
    <button v-on:click="toggle('inseli')">INSELI</button>
    <button v-on:click="toggle('rok')">ROK</button>
    <Map v-show='showMap' class="map" />

    <div id="array-rendering" v-show="inseli">
      <div v-bind:key="clubs">
        <Club
          :name="clubs[2].fields.name"
          :entry="clubs[3].fields.entry"
          :openings="clubs[3].fields.openings"
          :distance="clubs[3].fields.distance"
          :music="clubs[3].fields.music"
          :events="clubs[3].fields.events"
          :insider="clubs[3].fields.insider"
        />
      </div>
    </div>
    <div id="array-rendering" v-show="rok">
      <div v-bind:key="clubs">
        <Club
          :name="clubs[5].fields.name"
          :entry="clubs[5].fields.entry"
          :openings="clubs[5].fields.openings"
          :distance="clubs[5].fields.distance"
          :music="clubs[5].fields.music"
          :events="clubs[5].fields.events"
          :insider="clubs[5].fields.insider"
        />
      </div>
    </div>
  </div>
</template>


<script>
import Map from "@/components/Map_track.vue";
import Club from "@/components/Club.vue";
import { createClient } from "contentful";

export default {
  name: "Home",
  components: {
    Map,
    Club,
  },
  data() {
    return {
      showMap: true,
      showOverlay: false,
      clubs: [],
      inseli: false,
      rok: false,
    };
  },
  created: function () {
    let client = createClient({
      space: "u9dhuprfyl2f",
      accessToken: "2huSEg1MXrqlf2D3wvB3Izb5kCLDXHY5TZLKZdEHB9U",
    });

    client.getEntries().then((entries) => {
      // log the title for all the entries that have it
      console.log(entries.items);
      this.clubs = entries.items;
      console.log(this.clubs);
    });
  },
  methods: {
    toggle: function (message) {
      console.log(message);
      if (message == "inseli") {
        if (this.inseli) {
          this.inseli = false;
          this.showMap = true;
        } else {
          this.rok = false;
          this.inseli = true;
          this.showMap = false;
        }
      } else if (message == "rok") {
        if (this.rok) {
          this.rok = false;
          this.showMap = true;
        } else {
          this.inseli = false;
          this.rok = true;
          this.showMap = false;
        }
      }
    },
  },
};
</script>


<style scoped>
.map {
  width: 100vw;
  height: 90vh;
}

#array-rendering {
  /* background: url("../assets/gradient-bg.svg") no-repeat; */
  background-attachment: fixed;
}
</style>
