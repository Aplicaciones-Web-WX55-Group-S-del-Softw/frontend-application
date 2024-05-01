<script>
export default {
  name: "detailed-monitoring"
}
</script>

<template>
  <div class="wrapper">
    <h2>Detailed Monitoring</h2>
  </div>
  <div class ="container">
    <div class="center-container">
      <div class="monitoring-cards-container">

        <div class="monitoring-card">
          <div class="emergency-container">
            <router-link to="/emergency">
              <img class="emergency-img" src="../assets/emergency.png" alt="Emergency">
            </router-link>
            <h3>Emergency</h3>
          </div>
        </div>

        <div class="monitoring-card">
          <div class="details-container">
            <router-link to="/register-details">
              <img class="farm" src="../assets/farm.png" alt="farm">
            </router-link>
            <h3> Register Details</h3>
          </div>
        </div>


        <div class="monitoring-card">
          <div class="climate-container">
            <router-link to="/climate">
              <img class="cloud-img" src="../assets/cloud.png" alt="cloud">
            </router-link>
            <h3>Climate</h3>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<style >.center-container {
  display: flex;
  justify-content: center;
  margin-top: 270px;
  margin-bottom: 60px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  color: black;
}

h2 {
  font-weight: bold;
  font-size: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  margin: 0;
  color: black;
}

.monitoring-cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;
}

.monitoring-card {
  height: 100px;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.monitoring-card router-link {
  text-decoration: none;
}



.monitoring-card img:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}


.monitoring-card .emergency-container  {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring-card .climate-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring-card .details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.monitoring-card .emergency-img {
  width: 165px;
  height: 170px;
  max-height: none;
  margin-top: -40px;
}

.monitoring-card .climate-container{
  width: 100px;
  height: 100px;
  max-height: none;
  margin-top: 200px;
  align-items: center;
  margin-right: -230px;
}

.monitoring-card .details-container {
  width: 100px;
  height: 90px;
  max-height: none;
  margin-top: -70px;
}



.emergency-container h2 {
  text-align: center;
  margin-top: -5px;

}

.climate-container h2 {
  margin-top: -20px;
}

.details-container h2 {
  margin-top: 12px;
}

.title-color {
  color: #44604D;
}

</style>