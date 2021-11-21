<template>
  <div id="container">
    <h1>About</h1>
    <div class="info">
      <h2>STAY SAFE!</h2>
      <p>
        If you ever feel uneasy because of another person in the bar, the club
        staff or barkeepers are always ready to help. Ask for “Luisa” at the bar
        and you can leave through the backdoor. <br />
        The app “WayGuard” provides a phone service where you can talk to
        someone while walking home.
      </p>
    </div>
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
  background: url("../assets/gradient-bg.svg") no-repeat;
  background-attachment: fixed;
  height: 100vh;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background-color: rgba(50, 50, 50, 0.6);
  padding: 5%;
  margin-top: 5%;
  line-height: 1.5em;
}

ul {
  list-style: none;
  text-align: left;
  padding: 0;
  margin-top: 5%;
}

p {
  margin: 5% 0 0 0;
}

h2 {
  margin: 0;
}
</style>