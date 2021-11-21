<template>
  <div id="header">
    <img src="./assets/CLUB.svg" alt="CLUB Logo" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
</template>



<style>
@import url("https://fonts.googleapis.com/css?family=Orbitron");

/* @font-face {
  font-family: 'Orbitron';
  font-weight: normal;
  src: url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
}

@font-face {
  font-family: 'Orbitron';
  font-weight: bold;
  src: url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&display=swap");
} */
</style>

<style>
:root {
  --bg-black: #2c2c2c;
}

#app {
  font-family: 'Orbitron', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-black);
  width: 100vw;
}

#header {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 5%;
  background: no-repeat url("./assets/grid.svg");
  background-position-x: 100%;
  background-size: 60%;
  height: 10vh;
  overflow: visible;
}

#nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
  font-size: 24px;
}

h1 {
  font-size: 2.5em;
  padding-left: 8px;
}

h2 {
  font-size: 1.5em;
}
</style>
