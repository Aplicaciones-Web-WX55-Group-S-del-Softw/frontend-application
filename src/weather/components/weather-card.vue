<script>
import {WeatherApi} from "../services/weather-api.js";


export default {
  name: "weather-card",
  data() {
    return {
      weathers: [],
      weatherApi: new WeatherApi(),
      weatherImages: {
        'rainy.png': '../../assets/rainy.png',
        'cloudy.png': '../../assets/cloudy.png',
        'mcloudy.png': '../../assets/mcloudy.png',
        'clear.png': '../../assets/clear.png'
      }
    };
  },
  methods: {

    shuffleWeathers() {
      for (let i = this.weathers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tempDegree = this.weathers[i].degree;
        const tempImage = this.weathers[i].image;
        this.weathers[i].degree = this.weathers[j].degree;
        this.weathers[i].image = this.weathers[j].image;
        this.weathers[j].degree = tempDegree;
        this.weathers[j].image = tempImage;
      }
    }
  },
  created() {
    this.weatherApi.getWeathers().then(response => {
      this.weathers = response.data;
      this.shuffleWeathers(); // Mezcla los datos de forma aleatoria
    }).catch(error => {
      console.error(error);
    });
  }
};
</script><template>
  <h1>WEATHER</h1>
  <div class="weather-cards">
    <div v-for="weather in weathers" :key="weather.id" class="weather-card">
      <h3>{{ weather.day }}</h3>
      <p>{{ weather.date }}</p>
      <p>{{ weather.degree }}°</p>
      <img v-if="weather.image === 'rainy.png'" src="../../assets/rainy.png" alt="rainy" style="width: 150px; height: auto;">
      <img v-if="weather.image === 'cloudy.png'" src="../../assets/cloudy.png" alt="rainy" style="width: 150px; height: auto;">
      <img v-if="weather.image === 'mcloudy.png'" src="../../assets/mcloudy.png" alt="rainy" style="width: 150px; height: auto;">
      <img v-if="weather.image === 'clear.png'" src="../../assets/clear.png" alt="rainy" style="width: 150px; height: auto;">      </div>
  </div>
</template>

<style scoped>
.weather-cards {
  display: flex;
  justify-content: center;
}

.weather-card {
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  width: 180px;
  text-align: center;
  color: black;
}
h1{
  color:darkgreen;
  font-size: 100px;

}
</style>
