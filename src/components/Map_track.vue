<template>
  <div class="map">
    <img src="../assets/NavArrow.svg" v-on:click="navigate('navigate')" alt="">
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import getCoordinatesFromGpxFile from "@/modules/gpx-utilities.js";
import contentful from "@/modules/contentful.js";
import * as turf from "@turf/turf";

//const ANIMATION_DURATION = 100000;
const CAMERA_ALTITUDE = 600;
const STEP_LENGTH = 0.01;
const CAMERA_DISTANCE_BACK = 5 * STEP_LENGTH;
let routeCoords;
let camCoords;
let distance = 0;
let globalMap;
let currentIndex;
let currentPos = {};
let nextPos = {};
let wayPoints;
let logoAssets;

export default {
  name: "Map",

  data: function () {
    return {
      clubs: [],
      logoAssets: [],
    };
  },
  methods: {
    navigate: function (message) {
      move();
      console.log(message);
    },
  },
  created: async function () {
    this.clubs = await contentful.getClubs();
  },

  mounted: async function () {
    // set waypoints and initialize Positions
    wayPoints = await contentful.getWayPoints();
    logoAssets = await contentful.getLogoAssets();
    console.log(logoAssets[0].fields.media.fields.file.url);

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
      window.onkeydown = function (event) {
        if (event.code == "ArrowUp") {
          moveAlong(globalMap, routeCoords, camCoords);
        }
      };
    });
  },
};

// move function
function move() {
  if (!currentIndex) {
    currentIndex = 0;
  }

  let routeIndex = 0;
  currentPos = routeCoords.geometry.coordinates[routeIndex];
  nextPos = setPositions(currentIndex + 1);

  console.log(currentPos, nextPos);
  console.log(routeCoords);

  while (currentPos[0] != nextPos.lon && currentPos[1] != nextPos.lat) {
    moveAlong(globalMap, routeCoords, camCoords);
    routeIndex++;
    currentPos = routeCoords.geometry.coordinates[routeIndex];
  }
}

function setPositions(index) {
  return { lat: wayPoints[index].lat, lon: wayPoints[index].lon };
}

/* ------------------------------------------
helper functions for camera and movement 
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
</style>