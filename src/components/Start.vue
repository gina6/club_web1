<template>
  <div id="gradient">
    <div id="container">
      <img src="../assets/03_cLUb_avatar_Hugo.png" alt="Hugo" id="hugo" />
      <h2>I’m thirsty... We should get us a drink!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
};
</script>


<style scoped>

#gradient {
  width: 100%;
  height: 82vh;
  background: linear-gradient(#01003300, #010033 90%);
}

#hugo {
  height: 80vh;
  width: auto;
}

h2 {
  text-align: center;
  width: 75%;
  position: fixed;
  bottom: 15%;
  left: 13%;
}
</style>