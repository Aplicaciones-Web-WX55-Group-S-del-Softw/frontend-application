<script>
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "monitoring-card",
  components: {FooterComponent, ToolbarComponent}
}
</script>
<template>
  <toolbar-component></toolbar-component>

  <router-link to="/home" class="back-button">BACK</router-link>

  <div class ="container">
    <div class="center-container">
      <div class="monitoring-cards-container">
        <div class="monitoring-card">
          <div class = "task-container">
            <router-link to="/tasks">
              <img class="task-img" src="../../assets/task.png" alt="Tareas">
            </router-link>
            <h2>Tasks</h2>
          </div>
        </div>

        <div class="monitoring-card">
          <div class = "weather-container">
            <router-link to="/weather">
              <img class="weather-img" src="../../assets/weather.jpeg" alt="Clima">
            </router-link>
            <h2>Weather</h2>
          </div>
        </div>
      </div>

      <div class="emergency-cards-container">
        <div class="emergency-card">
          <div class="emergency-container">
            <router-link to="/emergency/new">

            <img class="emergency-img" src="../../assets/emergency.png" alt="Emergencia">
            </router-link>

            <h2>Emergency</h2>
          </div>
        </div>

        <div class="emergency-card">
          <div class="inventory-container">
            <router-link to="/shed/new">
              <img class="inventory-img" src="../../assets/inventory.png" alt="Inventario">
            </router-link>
            <h2>Inventory</h2>
          </div>
        </div>
      </div>
    </div>

  </div>

  <footer-component></footer-component>
</template>


<style >
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 60px;
  margin-left:-50px;

}

.monitoring-cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;

}
.emergency-cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;
  margin-top: 100px;

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

.emergency-card {
  height: 100px;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.emergency-card router-link {
  text-decoration: none;
}

.emergency-card img:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.emergency-card .emergency-container  {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 470px;
}

.emergency-card .inventory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -440px;
}

.monitoring-card .weather-container {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -460px;
  margin-top: 10px;
}

.monitoring-card .task-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left:170px;

}



.emergency-card .emergency-img {
  width: 165px;
  height: 170px;
  max-height: none;
  margin-top: -40px;

}



.emergency-card .inventory-img {
  width: 100px;
  height: 90px;
  max-height: none;
  margin-top: 0;

}

.monitoring-card .task-img {
  width: 135px;
  height: 125px;
  max-height: none;
  margin-top: -10px;
  margin-left: 310px;
}

.monitoring-card .weather-img {
  width: 135px;
  height: 110px;
  max-height: none;
  margin-top: -10px;
  margin-left: 20px;
}





.emergency-container h2 {
  margin-top: -20px;
}

.inventory-container h2 {
  margin-top: 20px;
}

.task-container h2 {
  margin-top: -1px;
  margin-left:290px;
}

.weather-container h2{
  margin-top: 5px;
  margin-left: 20px;
}



</style>