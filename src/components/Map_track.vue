<template>
  <div class="map">
    <img src="../assets/NavArrow.svg" v-on:click="navigate()" alt="" />
    <button v-show="showButton" @click="emitClubInfo(clubIndex)">Show Information</button>
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import getCoordinatesFromGpxFile from "@/modules/gpx-utilities.js";
import contentful from "@/modules/contentful.js";
import * as turf from "@turf/turf";

const CAMERA_ALTITUDE = 600;
const STEP_LENGTH = 0.02;
const CAMERA_DISTANCE_BACK = 5 * STEP_LENGTH;
let routeCoords;
let camCoords;
let distance = 0;
let globalMap;

export default {
  name: "Map",

  data: function () {
    return {
      clubs: [],
      showClubInfo: false,
      clubIndex: 1,
      showButton: false,
      pos: 0,
    };
  },
  methods: {
    navigate: function () {
      move();
      this.pos++;

      if(this.pos == 11){
        this.showButton = true;
        this.clubIndex = 1;
      } else if (this.pos == 20){
        this.showButton = true;
        this.clubIndex = 2;
      } else{
        this.showButton = false;
      }

    },
    emitClubInfo(clubIndex){
      console.log('emit')
      this.$emit('emitClubInfo', clubIndex);
    }
  },
  created: async function () {
    this.clubs = await contentful.getClubs();
  },

  mounted: async function () {
    // set waypoints and initialize Positions
    //wayPoints = await contentful.getWayPoints();

    // initialize map
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGlnaXRhbGlkZWF0aW9udmFuZWIiLCJhIjoiY2t2dGk1aGdmMngxbjJ4b3VuenF1ZHBzbiJ9.EQOJw9sGg2zuIg4LX8e2nA";
    let map = new mapboxgl.Map({
      container: this.$refs.container,
      style: "mapbox://styles/digitalideationvaneb/ckvwd9hz20or214kiunsr99ht",
      center: [8.310294, 47.050235],
      zoom: 20,
      interactive: false,
      pitch: 85,
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
          "line-color": "#ffffff",
          "line-width": 8,
        },
      });

      routeCoords = turf.cleanCoords(turf.lineString(coordinates));
      camCoords = turf.cleanCoords(turf.lineString(coordinates));
      globalMap = map;
      setCameraPosition(map, routeCoords, camCoords, distance);
    });
  },


};

// move function
function move() {
    moveAlong(globalMap, routeCoords, camCoords);
}

/* ------------------------------------------
Helper functions for camera and movement 
(by Simon from BrumBrum)
------------------------------------------*/

function setCameraPosition(
  map,
  routeLineString,
  cameraRouteLineString,
  distanceTravelled
) {
  const camera = map.getFreeCameraOptions();
  camera.position = getCameraPos(cameraRouteLineString, distanceTravelled);
  camera.lookAtPoint(getLookAt(routeLineString, distanceTravelled));
  map.setFreeCameraOptions(camera);
}

function moveAlong(map, routeLineString, camRouteLineString) {
  distance += STEP_LENGTH;
  setCameraPosition(map, routeLineString, camRouteLineString, distance);
}

function getLookAt(routeLineString, distanceTravelled) {
  let cameraCoord = turf.along(
    routeLineString,
    turf.lineDistance(routeLineString) * distanceTravelled
  ).geometry.coordinates;
  return { lng: cameraCoord[0], lat: cameraCoord[1] };
}

function getCameraPos(routeLineString, distanceTravelled) {
  let distanceAlong;
  // we can't go backwards outside the route so we wait until the distanceTravelled is greater than Distance back
  if (distanceTravelled <= CAMERA_DISTANCE_BACK) {
    distanceAlong = STEP_LENGTH;
  } else {
    distanceAlong = distanceTravelled - CAMERA_DISTANCE_BACK;
  }
  //interpolate along route
  const cameraCoord = turf.along(
    routeLineString,
    turf.lineDistance(routeLineString) * distanceAlong
  ).geometry.coordinates;
  // create the proper form of coordinates
  return mapboxgl.MercatorCoordinate.fromLngLat(
    {
      lng: cameraCoord[0],
      lat: cameraCoord[1],
    },
    CAMERA_ALTITUDE
  );
}
</script>

<style src='mapbox-gl/dist/mapbox-gl.css'>
</style>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}

img {
  position: fixed;
  bottom: 5%;
  left: 30%;
  z-index: 1;
}

button {
  position: fixed;
  bottom: 2%;
  left: 32%;
  z-index: 1;
  padding: 2.5%;
  border: white solid 2px;
  border-radius: 2px;
  color: white;
  background-color:black;
  font-family: "Orbitron", Helvetica, Arial, sans-serif;
}
</style>