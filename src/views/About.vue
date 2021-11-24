<template>
  <div id="container">
    <img src="../assets/About_pagetitle.svg" alt="CLUB Logo" />
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
</template>

<script>
</script>

<style scoped>

#container {
  display: flex;
  flex-direction: row;
  margin: 10%;
  padding: 5%;
  height: 66vh;
}

.info {
  display: flex;
  flex-direction: column;
  /* background: rgba(64, 221, 194, 0.5); */
  border-radius: 2em;
  padding: 10% 10%;
  margin: 10% 20%;
  }

h2 {
  display: flex;
  text-align: left;
  letter-spacing: 0.1em;
}

ul {
  list-style: none;
  text-align: left;
  font-family: "Jost";
  font-size: 1.3em;
  padding: 0;
}

p {
  display: flex;
  text-align: left;
  font-family: "Jost";
  font-size: 1.3em;
}
</style>