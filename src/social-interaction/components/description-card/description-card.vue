<script>
import FarmCard from "../../../search/components/farm-cards/farm-card.vue";
import {FarmApi} from "../../../search/services/farm-api.js";

export default {
  name: "description-card",
  data() {
    return {
      farm: {}
    };
  },
  created() {
    const farmId = this.$route.params.id; // Obtiene el ID de la granja de la ruta actual
    this.fetchFarmDetails(farmId);
  },
  methods: {
    fetchFarmDetails(farmId) {
      new FarmApi().getFarmById(farmId).then(response => {
        this.farm = response.data;
      }).catch(error => {
        console.error("Error fetching farm details: ", error);
      });
    }
  }
}
</script><template>
  <div class="farmContainer">
    <div class="farmCard">
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
<style>

.cardD{
  position: relative;
  display: flex;
  justify-content: center;
}

.cardD-title {
  position: absolute;
  margin-top: 145px;
  margin-left: 360px;
  font-size: 25px;
}

.mt-1{
  margin-top: 180px;
  width: 470px;
  height: 395px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-left: 400px;
}

ul {
  margin-top: -15px;
  margin-left: -25px;
}

li {
  margin-bottom: 22px;
}

</style>