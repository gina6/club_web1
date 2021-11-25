<template>
<div>
<div id="container">
    <img class="Help1" src="../assets/info_pagetitle.svg" alt="Info" />
    <div class="info">
      <h2>STAY SAFE!</h2>
      <p>
        If you ever feel uneasy because of another person in the bar, the club
        staff or barkeepers are always ready to help. Ask for “Luisa” at the bar
        and you can leave through the backdoor. <br /> <br />
        The app “WayGuard” provides a phone service where you can talk to
        someone while walking home.
      </p>
    </div>
  </div>
  </div>
</template>

<style scoped>

#container {
  display: flex;
  flex-direction: row;
  padding: 5%;
  width: 90vw;
  height: 77vh;
  overflow-y: scroll;
  background: linear-gradient(#01003300, #010033);
  z-index: -1;
}

.info {
  display: flex;
  flex-direction: column;
  margin: 10% 5% 5% 15%;
  }

.Help1{
  top: -11%;
  left: 7%;
  padding: 21% 0% 38% 10%;
}


h2 {
 text-align: left;
}


</style>