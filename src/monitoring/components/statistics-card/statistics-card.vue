<script>
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/footer-component/footer-component.vue";

export default {
  name: "statistics",
  components: {FooterComponent, ToolbarComponent}
}
</script>

<template>
  <toolbar-component></toolbar-component>

  <router-link to="/home" class="back-button">BACK</router-link>
  <div class="statistics-title">
    <h1 class="text-center">Statistics</h1>
  </div>
  <div class="cards">
    <pv-card class="card">
      <template #content>
        <router-link to="/finished/tasks" style="text-decoration: none;">
          <h1 class="title-card">Task completed in record time</h1>
          <p class="tasks">44 TASKS </p>
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress" style="width: 60%;"></div>
              <p class="sub-header">Pending tasks: 20</p>
            </div>
          </div>
        </router-link>
      </template>
    </pv-card>
    <pv-card class="card">
      <template #content>
        <router-link to="/financial/statistics" style="text-decoration: none;">
          <h1 class="title-card">Financial Statistics</h1>
          <img src="../../../assets/income.png" alt="Ingresos">
        </router-link>
      </template>
    </pv-card>
  </div>

    <footer-component></footer-component>


</template>

<style scoped>
.back-button {
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

.back-button:hover {
  background-color: darkgreen;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  max-width: 1200px; /* Ajustar el ancho máximo del contenedor de las tarjetas */
  margin-left: auto;
  margin-right: auto;
}

.card {
  flex: 1 1 calc(50% - 40px); /* Hacer que las tarjetas ocupen aproximadamente el 50% del ancho del contenedor, menos el espacio del gap */
  max-width: 500px; /* Ancho máximo para las tarjetas */
  height: 350px; /* Aumentar la altura de las tarjetas */
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card img {
  width: 320px; /* Aumentar el ancho de la imagen */
  height: 240px; /* Aumentar la altura de la imagen */
}

.card p {
  text-align: center;
  margin-top: 10px;
}

.text-center {
  color: darkgreen;
  font-size: 80px;
  margin-top: 100px; /* Incrementado para más espacio superior */
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px; /* Incrementado para más espacio inferior */
}

.title-card {
  color: darkgreen;
  margin-top: -11px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
}

.sub-header {
  color: gray;
  font-size: 20px;
  margin-top: -10px;
}

.tasks {
  color: black;
  font-size: 35px;
  font-weight: bold;
  margin-top: 50px;
}

.progress-bar {
  width: 80%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  border: 2px solid #4CAF50;
}

.progress {
  height: 100%;
  background-color: #4CAF50;
  border-radius: 10px;
  border: 2px solid #4CAF50;
}

.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .text-center {
    font-size: 30px;
    margin-top: 20px;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin-top: 20px;
    max-width: 90%; /* Ajuste el ancho máximo para pantallas pequeñas */
    flex: 1 1 auto;
  }

  .card img {
    width: 100%; /* Ajuste el ancho de la imagen para pantallas pequeñas */
    height: auto; /* Ajuste la altura de la imagen para pantallas pequeñas */
  }
}
</style>
