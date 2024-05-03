<script>
export default {
  name: "FarmCard",
  methods: {
    redirectToDescription() {
      this.$router.push('/farm/description');
    }
  }
}


</script>

<template>
  <div class="searchSection">
    <input type="text" placeholder="Product">
    <input type="text" placeholder="Location">
    <button class="searchButton">Search</button>
  </div>

  <div class="additionalCard">
    <h2>Featured farms: </h2>
  </div>

  <div class="farmContainer" @click="redirectToDescription">

    <pv-card class="farmImage">
      <template #content>
        <img class="farmImg" src="../../../assets/img-granja1.jpg" alt="Granja">
      </template>
    </pv-card>

    <pv-card class="farmDetails">
      <template #content>
        <h1 class="farmTitle">Farm Tsuneo</h1>
        <div class="locationContainer">
          <!--<img src="/../assets/location.png" alt="Ubicación" class="locationIcon">-->

          <p class="additionalInfo">Asia, Lima</p>
        </div>
        <p class="details">Chickens</p>
        <p class="details">50 ha</p>
        <p class="details">$293,000,000</p>
      </template>
    </pv-card>

    <div class="additionalDetails">
      <p class="details">20 Stables</p>
      <p class="details">20 Pens</p>
      <p class="details">Drinking water</p>
    </div>

  </div>

</template>

<style>

.additionalCard {
  margin-left: 200px;
}

.searchSection {
  margin-top: 80px;
  display: flex;
  padding: 40px;
  justify-content: center;
  gap: 30px;
}


.location {
  font-size: 15px;
  color: gray;

}


hr {
  border: none;
  height: 2px;
  background-color: black;
  margin: 20px 0;
}

h1 {
  color: #276749;
}


.searchButton {
  background-color: #45BF6C;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 8%;
  margin-top: 30px;
}

.searchButton:hover {
  transform: scale(1.05);
}

.searchSection {
  display: flex;
  align-items: center;

}

.searchSection input[type="text"] {
  padding: 10px;
  border: 2px solid #276749;
  border-radius: 8px;
  margin-right: 10px;
  font-size: 16px;
}

.searchSection button {
  padding: 10px 1px;
  border: none;
  border-radius: 8px;
  background-color: #45BF6C;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: -5px; /* Ajusta este valor según sea necesario */
}

.searchSection button:hover {
  background-color: #1d4d34;
}

.searchSection button:focus {
  outline: none;
}

.farmContainer {
  margin-top: 450px;
  display: flex;
  justify-content: flex-start;
  margin-left: 55%;
}


.farmTitle {
  color: darkgreen;
  margin-top: -25px;
  margin-left: -10px;
  font-size: 26px;
  margin-bottom: 3px;
}

.locationContainer {
  display: flex;
  align-items: center;
}

.locationIcon {
  width: 45.92px;
  height: 30.04px;
  margin-right: -30px;
  margin-left: -16px;
}

.location {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.42);
  margin-bottom: -10px;
  margin-left: 20px;
  transform: translateY(-10px);
}

.details {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #807A7A;
  margin-bottom: -10px;
  margin-left: 20px;
  transform: translateY(-10px);
}

.additionalDetails {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: -40px;
  transform: translateX(-300px);
  padding: 10px;
}

.additionalDetails::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10px;
  right: -13px;
  border-top: 1px solid rgba(0, 0, 0, 0.42);
}

.farmImg {
  width: 291px;
  height: 210px;
  object-fit: cover;
  object-position: top;
  margin-top: -32px;
  margin-left: -15px;
  border-radius: 10px; /* Ajusta el valor según el grado de curvatura que desees */

}

.farmImage {
  margin-top: -400px;
  width: 295px;
  height: 280px;
  margin-left: -200px;
}

.farmDetails p {
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-left: -10px;
}

.farmDetails {
  margin-top: -195px;
  width: 295px;
  height: 195px;
  border: 0px solid gray; /* Elimina el borde */
  margin-left: -294px;
}
</style>