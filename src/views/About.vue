<template>
  <div>
       <ul id="array-rendering">
      <p v-for="c in clubs" :key="c">
        <Club
          :name="c.fields.name"
          :entry="c.fields.entry"
        />
      </p>
    </ul>


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
};
</script>

<style scoped>
li{
    list-style-type: none;
}
</style>