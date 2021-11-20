<template>
  <div>
    <button v-on:click="toggle">INSELI</button>
    <div id="array-rendering" v-show="clicked">
      <div v-for="c in clubs" :key="c">
        <Club
          :name="c.fields.name"
          :entry="c.fields.entry"
          :openings="c.fields.openings"
          :distance="c.fields.distance"
          :music="c.fields.music"
          :events="c.fields.events"
          :insider="c.fields.insider"
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
      clicked: false,
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
    toggle: function() {
      if(this.clicked){
        this.clicked = false;
      } else {
        this.clicked = true;
      }
    }

  }
};
</script>

<style scoped>

#array-rendering{
  background: url('../assets/gradient-bg.svg') no-repeat;
  background-attachment: fixed;

}
</style>