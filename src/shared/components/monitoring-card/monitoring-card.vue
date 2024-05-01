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
          <div class = "employee-container">
            <router-link to="/task-planning">
              <img class="employee-img" src="../../../assets/employee.png" alt="empleados">
            </router-link>
            <h2>Empleados</h2>
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
      </div>
      <div class="emergency-cards-container">
        <div class="emergency-card">
          <div class="emergency-container">
            <img class="emergency-img" src="../../../assets/emergency.png" alt="Emergencia">
            <h2>Emergencia</h2>
          </div>
        </div>


        <div class="emergency-card">
          <div class="inventory-container">
            <img class="inventory-img" src="../../../assets/inventory.png" alt="Inventario">
            <h2>Inventario</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style >
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 270px;
  margin-bottom: 60px;
}

.monitoring-cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

.monitoring-card .statistics-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -460px;
}

.monitoring-card .task-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left:80px;
}
.monitoring-card .employee-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -130px;
}


.emergency-card .emergency-img {
  width: 165px;
  height: 170px;
  max-height: none;
  margin-top: -40px;

}

.monitoring-card .statistics-img{
  width: 175px;
  height: 130px;
  max-height: none;
  margin-top: -1px;
  align-items: center;

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

.monitoring-card .employee-img {
  width: 100px;
  height: 100px;
  max-height: none;
  margin-top: 1px;
  margin-left: 10px;
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
  margin-left:290px;
}
.employee-container h2 {
  margin-left: 15px;
}



</style>