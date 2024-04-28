<script>
export default {
  name: "monitoring-card"
}
</script>

<template>
<div class ="container">
<div class="center-container">
  <div class="monitoring-cards-container">


    <div class="monitoring-card">
      <div class = "task-container">
        <router-link to="/task-planning">
          <img class="task-img" src="../../../assets/task.png" alt="Tareas">
        </router-link>
      <h2>Tareas</h2>
      </div>
    </div>

    <div class="monitoring-card">
      <div class="statistics-container">
        <router-link to="/statistics">
          <img class="statistics-img" src="../../../assets/statistics.png" alt="Estadísticas">
        </router-link>
        <h2>Estadísticas</h2>
      </div>
    </div>

      <div class="monitoring-card">
        <div class="emergency-container">
          <img class="emergency-img" src="../../../assets/emergency.png" alt="Emergencia">
          <h2>Emergencia</h2>
        </div>
      </div>


      <div class="monitoring-card">
      <div class="inventory-container">
        <img class="inventory-img" src="../../../assets/inventory.png" alt="Inventario">
        <h2>Inventario</h2>
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

.monitoring-card .inventory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring-card .statistics-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring-card .task-container {
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

.monitoring-card .statistics-img{
  width: 145px;
  height: 100px;
  max-height: none;
  margin-top: 25px;
  align-items: center;
}

.monitoring-card .inventory-img {
  width: 100px;
  height: 90px;
  max-height: none;
  margin-top: 0;
}

.monitoring-card .task-img {
  width: 135px;
  height: 125px;
  max-height: none;
  margin-top: 0;
  margin-left: 20px;
}


.statistics-container h2 {
  text-align: center;
  margin-top: -5px;

}

.emergency-container h2 {
  margin-top: -20px;
}

.inventory-container h2 {
  margin-top: 20px;
}

.task-container h2 {
  margin-top: -1px;
}



</style>