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

  </div>
  <div id="photo">
    <img class="groupphoto" src="../assets/Groupphoto.jpg" alt="Groupphoto" />
  </div>

</template>

<script>
</script>

<style scoped>

#container {
  display: flex;
  flex-direction: row;
  margin: 10%;
  margin-bottom: 2%;
  padding: 5%;
  height: 50vh;
}

#photo {
  padding-bottom: 5%;
  height: 60vh;
}

.groupphoto {
  height: 100%;
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