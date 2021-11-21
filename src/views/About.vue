<template>
  <div>
    <button v-on:click="toggle('inseli')">INSELI</button>
    <button v-on:click="toggle('rok')">ROK</button>
    <div id="array-rendering" v-show="inseli">
      <div v-bind:key="clubs">
        <Club
          :name="clubs[0].fields.name"
          :entry="clubs[0].fields.entry"
          :openings="clubs[0].fields.openings"
          :distance="clubs[0].fields.distance"
          :music="clubs[0].fields.music"
          :events="clubs[0].fields.events"
          :insider="clubs[0].fields.insider"
        />
      </div>
    </div>
    <div id="array-rendering" v-show="rok">
      <div v-bind:key="clubs">
        <Club
          :name="clubs[1].fields.name"
          :entry="clubs[1].fields.entry"
          :openings="clubs[1].fields.openings"
          :distance="clubs[1].fields.distance"
          :music="clubs[1].fields.music"
          :events="clubs[1].fields.events"
          :insider="clubs[1].fields.insider"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Club from "@/components/Club.vue";
import { createClient } from "contentful";
export default {
  name: "About",
  components: {
    Club,
  },
  data: function () {
    return {
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
      if (message == 'inseli') {
        this.rok = false;
        this.inseli = true;
      } else if (message == 'rok') {
        this.inseli = false;
        this.rok = true;
      } 
    },
  },
};
</script>

<style scoped>
#array-rendering {
  background: url("../assets/gradient-bg.svg") no-repeat;
  background-attachment: fixed;
}
</style>