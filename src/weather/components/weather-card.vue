<script>
import WeatherCard from "./weather-card.vue";

export default {
  name: "weather-card"
}
</script>
<template>
  <div class="card-wrapper">
    <h1>WEATHER</h1>
    <div class="card-row">
      <div class="weather-card">
        <div class="weather-picture">
          <img src="../../assets/rainy.png" alt="rainy" style="width: 150px; height: auto;"  />

        </div>
        <div>
          <p style="margin-left: 8px">33º</p>
          <p>Sunday</p>
          <p style="font-size: 12px;">2024-04-01</p>
        </div>

      </div>
      <div class="weather-card">
        <div class="weather-picture">
          <img src="../../assets/cloudy.png" alt="cloudy" style="width: 150px; height: auto; margin-left: 20px"  />

        </div>

        <div>
          <p style="margin-left: 8px">28º</p>
          <p>Monday</p>
          <p style="font-size: 12px;">2024-04-02</p>
        </div>

      </div>

    </div>

    <div class="card-row"> <div class="weather-card">
      <div class="weather-picture">
        <img src="../../assets/mcloudy.png" alt="mcloudy" style="width: 150px; height: auto; margin-right:20px "  />

      </div>
      <div>
        <p style="margin-left: 8px">31º</p>
        <p>Tuesday</p>
        <p style="font-size: 12px;">2024-04-03</p>
      </div>

    </div>
      <div class="weather-card">
        <div class="weather-picture">
          <img src="../../assets/clear.png" alt="clear" style="width: 150px; height: auto; margin-right: 12px"  />

        </div>
        <div>
          <p style="margin-left: 8px">14º</p>
          <p>Wednesday</p>
          <p style="font-size: 12px;">2024-04-02</p>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
h1{
  color:darkgreen;
  font-size: 100px;

}
p{
color:black;
  font-size: 30px;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.weather-card {width: 400px;
  height: 300px;
  margin: 10px;
  background-color: #d6d6d6;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center; /* Alinea elementos verticalmente */
}

.weather-picture {
  margin-left: 15%; /* Espacio entre la imagen y el texto */
}

.weather-card p {
  margin: 0px;
  text-align: center; /* Alinear texto a la izquierda */
}
</style>