<template>
<div>
  <div id="container">
    <img class="About1" src="@/assets/about_pagetitle.svg" alt="About" />
    <div class="info">
      <h2>CREATORS</h2>
      <ul>
        <li>Giuliana Costa</li>
        <li>Gina Fontana</li>
        <li>Vanessa Buchmann</li>
        <li>Michelle Egli</li>
      </ul>
      <p>
        Digital Ideation <br />
        Studio Web &amp; Mobile 2021
      </p>
    </div>
  </div>
  <div id="photo">
    <img class="groupphoto" src="@/assets/Groupphoto.jpg" alt="Groupphoto" />
  </div>
  </div>
</template>
<script>
</script>
<style scoped>

#container {
  display: flex;
  flex-direction: row;
  padding: 5%;
  width: 100%;
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: -1;
  background: linear-gradient(#72728300, #010033);
}
.About1{
  padding: 35% 0% 14% 10%;
}
#photo {
  padding-bottom: 5%;
  height: 60vh;
  width: 100%;
  background: linear-gradient(#010033, #72728300);
}
.groupphoto {
  height: 100%;
  border-radius: 5%;
}
.info {
  display: flex;
  flex-direction: column;
  margin: 25% 18% 25% 15%;
  }
ul {
  list-style: none;
  text-align: left;
  font-family: "Jost";
  font-size: 1.3em;
  padding: 0;
}
</style>