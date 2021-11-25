<template>
  <Button v-on:click="drink" :ButtonName="DrinkButton" />

  <Button v-on:click="backToMap"  :ButtonName="BackToMapButton" />

  <Map v-show="showMap" class="map" />
</template>

<script>
import Button from "@/components/Button.vue";
import contentful from "@/modules/contentful.js";

export default {
  name: "Overlay",
  components: {
    Button,
  },
  data: function () {
    return {
      assets: [],
      DrinkButton: "Drink",
      BackToMapButton: "Back to map",
      showMap: true,
    };
  },
  mounted: async function () {
    this.assets = await contentful.getAssets();
    console.log(this.assets);
  },
  methods: {
    drink: function () {
        alert("drink")
    },
    backToMap: function () {
        this.showMap = true
    }
  },
};
</script>
