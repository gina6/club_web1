<template>
  <div ref="container" class="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl"; 

export default {
  name: "Map",
  mounted: async function () {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZ2l1Y29zIiwiYSI6ImNrdnRpMzZyejIzeWUyb3FobjllamUyNHQifQ.gn06GCTd19Dq0aZWI6WORA";
    //const map = 
    new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style: "mapbox://styles/giucos/ckvtk1er6234714m35zxwp79m", // style URL
      center: [8.309770447369441, 47.050188260908826],
      zoom: 9, // starting zoom
    });
  },
};
</script>

<style src='mapbox-gl/dist/mapbox-gl.css'>
</style>

<style scoped>
.map{
    width: 100%;
    height: 50%;
}
</style>