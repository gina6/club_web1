<template>
<div id="backgroundblack">
  <div id="container">
    <img class="About1" src="../assets/About_pagetitle.svg" alt="About" />
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
</div>
</template>

<script>
</script>

<style scoped>

#container {
  display: flex;
  flex-direction: row;
  padding: 5%;

  width: 90vw;
  height: 77vh;
  /*min-height: 100vh;*/
  overflow-y: scroll;
  background: linear-gradient(#00000000, #000000b0);
  z-index: -1;
  
}

.About1{
  position:relative;
  top: -11%;
  left: 7%;
  padding: 21% 0% 0% 10%;
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