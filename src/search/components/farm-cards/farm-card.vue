<script>
import { WeatherApi } from "../../../weather/services/weather-api.js";
import { FarmApi } from "../../services/farm-api.js";

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
  <div class="container">
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
  </div>
</template>
<style scoped>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top:10%;
}

.searchSection {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.searchSection input {
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.searchSection input:focus {
  border-color: #2e7d32;
}

.searchButton {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.searchButton:hover {
  background-color: #45a049;
}

.searchButton:active {
  background-color: #388e3c;
}

.farmContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.farmCard {
  flex: 1 1 calc(25% - 40px);
  max-width: calc(25% - 40px);
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
  height: 150px;
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

.additionalDetails {
  display: flex;
  justify-content: center;
  font-size: 12px;
  padding: 10px;
  border-top: 1px solid #e0e0e0;
  background-color: #f9f9f9;
}

.details {
  color: #807A7A;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-top: 10px;
}

@media (max-width: 1200px) {
  .farmCard {
    flex: 1 1 calc(33.333% - 40px);
    max-width: calc(33.333% - 40px);
  }
}

@media (max-width: 992px) {
  .farmCard {
    flex: 1 1 calc(50% - 40px);
    max-width: calc(50% - 40px);
  }
}

@media (max-width: 768px) {
  .farmCard {
    flex: 1 1 calc(100% - 40px);
    max-width: calc(100% - 40px);
  }

  .searchSection {
    margin-top:20%;
    flex-direction: column;
    align-items: stretch;
  }

  .searchSection input,
  .searchButton {
    width: 100%;
    margin-bottom: 10px;
  }

  .searchButton {
    align-self: center;
    width: 100%;

  }
}
</style>
