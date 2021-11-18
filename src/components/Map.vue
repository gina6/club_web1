<template>
  <div ref="container" class="map"></div>
</template>


<script>
import mapboxgl from "mapbox-gl";
import { Threebox } from "threebox-plugin";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import contentful from "@/modules/contentful.js";


export default {
  name: "Map",
  mounted: async function () {
    let clubs = await contentful.getCommutes();
    console.log(clubs)
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGlnaXRhbGlkZWF0aW9udmFuZWIiLCJhIjoiY2t2dGk1aGdmMngxbjJ4b3VuenF1ZHBzbiJ9.EQOJw9sGg2zuIg4LX8e2nA";
    const map = new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style: "mapbox://styles/digitalideationvaneb/ckvwd9hz20or214kiunsr99ht", // style URL
      center: [8.541508, 47.377493], // starting position [lng, lat]
      zoom: 9, // starting zoom
      pitch: 60,
      antialias: true,
    });
    map.on("style.load", () => {
      window.tb = new Threebox(map, map.getCanvas().getContext("webgl"), {
        defaultLights: true,
      });

      if (map.getLayer("custom_layer") == null) {
        map.addLayer({
          id: "custom_layer",
          type: "custom",
          renderingMode: "3d",

          onAdd: function () {

            const scene = new THREE.Scene();
            const loader = new GLTFLoader();

            loader.load(
              clubs[0].fields.object.fields.file.url,
              function (gltf) {
                scene.add(gltf.scene);
              },
              undefined,
              function (error) {
                console.error(error);
              }
            );
          },
          render: function () {
            window.tb?.update();
          },
        });
      }
    });
  },
};
</script>

<style src='mapbox-gl/dist/mapbox-gl.css'>
</style>

<style scoped>
.map {
  width: 100%;
  height: 50%;
}
</style>