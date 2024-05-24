<script>
import {WeatherApi} from "../../../weather/services/weather-api.js";
import {FarmApi} from "../../services/farm-api.js";
export default {
  name: "FarmCard",
  data() {
    return {
      farms: [],
      farmApi: new FarmApi()
    };
  },
  methods: {
    redirectToDescription(farmId) {
      this.$router.push(`/farm/description/${farmId}`);
    }
  },
  created() {
    this.farmApi.getFarms().then(response => {
      this.farms = response.data;
    }).catch(error => {
      console.error("Error fetching farms: ", error);
    });
  }
};

</script>

<template>
  <div class="searchSection">
    <input type="text" placeholder="Product">
    <input type="text" placeholder="Location">
    <button class="searchButton">Search</button>
  </div>
  <div class="farmContainer">
    <div
        class="farmCard"
        v-for="farm in farms"
        :key="farm.id"
        @click="redirectToDescription(farm.id)"
    >
      <div class="farmImage">
        <img class="farmImg" :src="farm['farm-img']" alt="Granja">
      </div>
      <div class="farmDetails">
        <h1 class="farmTitle">{{ farm['farm-name'] }}</h1>
        <div class="locationContainer">
          <p class="additionalInfo">{{ farm.location }}</p>
          <p class="additionalInfo">{{ farm['type-farm'] }}</p>
          <p class="additionalInfo">{{ farm['farm-hectares'] }}</p>
          <p class="additionalInfo">{{ farm['farm-price'] }}</p>
        </div>
      </div>
      <div class="additionalDetails">
        <p class="details">{{ farm['farm-information'] }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.additionalCard {
  margin-left: 200px;

}

.additionalDetails {
  display: flex;
  justify-content: center;
  font-size: 12px; /* Reducido el tamaño de la fuente */
  padding: 10px;
  border-top: 1px solid #e0e0e0;
  background-color: #f9f9f9; /* Fondo gris claro para separar visualmente */
}

.details {
  color: #807A7A;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-top: 10px;
}

.farmContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.farmCard {
  flex: 1 1 calc(25% - 40px); /* Ajustar el ancho para que sea menos ancho */
  max-width: calc(25% - 40px); /* Ajustar el ancho para que sea menos ancho */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

.farmCard:hover {
  transform: scale(1.02);
}

.farmImage {
  width: 100%;
  height: 150px; /* Ajustar la altura de la imagen */
}

.farmImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.farmDetails {
  padding: 20px;
}

.farmTitle {
  color: darkgreen;
  font-size: 24px;
  margin: 0 0 10px;
}

.locationContainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.locationContainer p {
  margin: 0;
  font-size: 14px;
}

.infoContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.searchButton {
  background-color: #45BF6C;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  text-align: center;
  width: 8%;
  margin-top: 30px;
}

.searchButton:hover {
  transform: scale(1.05);
}

.searchSection {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 80px;
  padding: 40px;
}

.searchSection button {
  background-color: #45BF6C;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
}

.searchSection button:hover {
  background-color: #1d4d34;
}

.searchSection button:focus {
  outline: none;
}

.searchSection input[type="text"] {
  border: 2px solid #276749;
  border-radius: 8px;
  font-size: 16px;
  padding: 10px;
}
</style>