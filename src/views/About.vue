<template>
  <div id="container">
    <img src="../assets/About_pagetitle.svg" alt="About" />
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
      <div id="photo">
        <img src="../assets/Groupphoto.jpg" alt="Groupphoto" />
      </div>
  </div>

</template>

<script>
</script>

<style scoped>

#container {
  display: flex;
  flex-direction: row;
  margin: 10%;
  padding: 5%;
  height: 50vh;
}

#photo {
  display: flex;
  flex-direction: row;
  margin-top: 50vh;
  margin-left: -85vw;
  padding: 10%;
  height: 50vh;
}

.info {
  display: flex;
  flex-direction: column;
  margin: 10% 20%;
  }

ul {
  list-style: none;
  text-align: left;
  font-family: "Jost";
  font-size: 1.3em;
  padding: 0;
}

</style>