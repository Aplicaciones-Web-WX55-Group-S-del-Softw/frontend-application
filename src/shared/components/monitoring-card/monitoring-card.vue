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
          <img src="../../../assets/task.png" alt="Tareas">
          <h2>Tareas</h2>

        </div>
        <div class="monitoring-card">
          <img src="../../../assets/statistics.png" alt="Estadísticas">
          <h2>Estadísticas</h2>
        </div>

        <div class="monitoring-card">
          <div class="emergency-container">
            <img class="emergency-img" src="../../../assets/emergency.png" alt="Emergencia">
            <h2>Emergencia</h2>
          </div>
        </div>

        <div class="monitoring-card">
          <img src="../../../assets/inventory.png" alt="Inventario">
          <h2>Inventario</h2>
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

.monitoring-card img {
  max-width: 100%;
  max-height: 100%;
}

.monitoring-card img:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.monitoring-card .emergency-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }

.monitoring-card .emergency-img {
  width: 160px;
  height: 170px;
  max-height: none;
  margin-top: -40px;
}

.emergency-container h2 {
  margin-top: -20px;
}


</style>