<template>
  <div ref="container" class="map"></div>
</template>



<script>
import mapboxgl from "mapbox-gl";
import getCoordinatesFromGpxFile from "@/modules/gpx-utilities.js";
import contentful from "@/modules/contentful.js";
import * as turf from "@turf/turf";

export default {
  name: "Map",

  data: function () {
    return {
      clubs: [],
    };
  },

  mounted: async function () {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGlnaXRhbGlkZWF0aW9udmFuZWIiLCJhIjoiY2t2dGk1aGdmMngxbjJ4b3VuenF1ZHBzbiJ9.EQOJw9sGg2zuIg4LX8e2nA";
    let map = new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style: "mapbox://styles/digitalideationvaneb/ckvwd9hz20or214kiunsr99ht", // My custom style
      center: [8.310294, 47.050235],
      zoom: 20, // starting zoom
      interactive: false,
      pitch: 10,
      bearing: 90,
    });

    // Displaying a GPX track
    map.on("load", async function () {
      let coordinates = await getCoordinatesFromGpxFile(
        await contentful.getFirstGPXFileUrl()
      );
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: coordinates,
          },
        },
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 8,
        },
      });

      // this is the path the camera will look at
      //const targetRoute = coordinates;
      // this is the path the camera will move along
      //const cameraRoute = mapboxgl.routes.camera;
      const animationDuration = 100000;
      const cameraAltitude = 0;
      // get the overall distance of each route so we can interpolate along them
      const routeDistance = turf.lineDistance(turf.lineString(coordinates));
      const cameraRouteDistance = turf.lineDistance(
        turf.lineString(coordinates)
      );

      let start;

      function frame(time) {
        if (!start) start = time;
        // phase determines how far through the animation we are
        const phase = (time - start) / animationDuration;

        // phase is normalized between 0 and 1
        // when the animation is finished, reset start to loop the animation
        if (phase > 1) {
          // wait 1.5 seconds before looping
          setTimeout(() => {
            start = 0.0;
          }, 1500);
        }

        // use the phase to get a point that is the appropriate distance along the route
        // this approach syncs the camera and route positions ensuring they move
        // at roughly equal rates even if they don't contain the same number of points
        const alongRoute = turf.along(
          turf.lineString(coordinates),
          routeDistance * phase
        ).geometry.coordinates;

        const alongCamera = turf.along(
          turf.lineString(coordinates),
          cameraRouteDistance * phase
        ).geometry.coordinates;

        const camera = map.getFreeCameraOptions();

        // set the position and altitude of the camera
        camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
          {
            lng: alongCamera[0],
            lat: alongCamera[1],
          },
          cameraAltitude
        );

        // tell the camera to look at a point along the route
        camera.lookAtPoint({
          lng: alongRoute[0] + 0.001,
          lat: alongRoute[1],
        });

        //camera.setPitchBearing(80, 90);

        map.setFreeCameraOptions(camera);

        window.requestAnimationFrame(frame);
      }

      window.requestAnimationFrame(frame);
    });
  },
};
</script>

<style src='mapbox-gl/dist/mapbox-gl.css'>
</style>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>