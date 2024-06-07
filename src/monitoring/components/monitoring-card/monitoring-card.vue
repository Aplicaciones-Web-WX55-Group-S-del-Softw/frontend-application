<script>
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

export default {
  name: "monitoring-card",
  components: {FooterComponent, ToolbarComponent}
}
</script>

<template>
  <toolbar-component></toolbar-component>

  <div class ="monitoring_containerX">
    <router-link to="/home" class="back-button">BACK</router-link>
    <div class="monitoring_center-container">

      <div class="monitoring_monitoring-cards-container">
        <div class="monitoring_monitoring-card">
          <div class = "monitoring_task-container">
            <router-link to="/tasks">
              <img class="monitoring_task-img" src="../../../assets/task.png" alt="Tareas">
            </router-link>
            <h2>Tasks</h2>
          </div>
        </div>
        <div class="monitoring_monitoring-card">
          <div class = "monitoring_employee-container">
            <router-link to="/tasks/new">
              <img class="monitoring_employee-img" src="../../../assets/employee.png" alt="empleados">
            </router-link>
            <h2>Employees</h2>
          </div>
        </div>

        <div class="monitoring_monitoring-card">
          <div class="monitoring_statistics-container">
            <router-link to="/statistics">
              <img class="monitoring_statistics-img" src="../../../assets/statistics.png" alt="Estadísticas">
            </router-link>
            <h2>Statistics</h2>
          </div>
        </div>
      </div>
      <div class="monitoring_emergency-cards-container">
        <div class="monitoring_emergency-card">
          <div class="monitoring_emergency-container">
            <router-link to="/emergency/new">

            <img class="monitoring_emergency-img" src="../../../assets/emergency.png" alt="Emergencia">
           </router-link>
            <h2>Emergency</h2>
          </div>
        </div>


        <div class="monitoring_emergency-card">
          <div class="monitoring_inventory-container">
            <router-link to="/shed/new">

            <img class="monitoring_inventory-img" src="../../../assets/inventory.png" alt="Inventario">
            </router-link>
            <h2>Inventory</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer-component></footer-component>
</template>


<style scoped>
.monitoring_back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: darkgreen;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.monitoring_back-button:hover {
  background-color: darkgreen;
}


.monitoring_center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 270px;
  margin-bottom: 60px;
}

.monitoring_monitoring-cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  justify-items: center;

}
.monitoring_emergency-cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;
  margin-top: 100px;

}
.monitoring_monitoring-card {
  height: 100px;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.monitoring_monitoring-card router-link {
  text-decoration: none;
}

.monitoring_monitoring-card img:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.monitoring_emergency-card {
  height: 100px;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.monitoring_emergency-card router-link {
  text-decoration: none;
}

.monitoring_emergency-card img:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.monitoring_emergency-card .monitoring_emergency-container  {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring_emergency-card .monitoring_inventory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring_monitoring-card .monitoring_statistics-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring_monitoring-card .monitoring_task-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.monitoring_emergency-card .monitoring_emergency-img {
  width: 165px;
  height: 170px;
  max-height: none;
  margin-top: -40px;

}

.monitoring_monitoring-card .monitoring_statistics-img{
  width: 175px;
  height: 130px;
  max-height: none;
  margin-top: -1px;
  align-items: center;
}

.monitoring_emergency-card .monitoring_inventory-img {
  width: 100px;
  height: 90px;
  max-height: none;
  margin-top: 0;
}

.monitoring_monitoring-card .monitoring_task-img {
  width: 135px;
  height: 125px;
  max-height: none;
  margin-top: -10px;
  margin-left: 20px;
}

.monitoring_monitoring-card .monitoring_employee-img {
  width: 100px;
  height: 100px;
  max-height: none;
  margin-top: 1px;
  margin-left: 10px;
}

.monitoring_statistics-container h2 {
  text-align: center;
  margin-top: -5px;

}

.monitoring_emergency-container h2 {
  margin-top: -20px;
}

.monitoring_inventory-container h2 {
  margin-top: 20px;
}

.monitoring_task-container h2 {
  margin-top: -1px;
}

</style>