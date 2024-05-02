<script>
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

export default {
  name: "statistics",
  components: {FooterComponent, ToolbarComponent}
}
</script>

<template>
  <toolbar-component></toolbar-component>

  <router-link to="/home" class="back-button">BACK</router-link>
  <h1 class="text-center">Statistics</h1>

  <div class="cards">
    <pv-card class="mt-1x">

      <template #content>
        <router-link to="/production/statistics" style="text-decoration: none;">
          <h1 class="title-card">Production</h1>
          <img src="../../../assets/production.png" alt="Producción">
        </router-link>
      </template>
    </pv-card>
    <pv-card class="mt-2x">
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
    <pv-card class="mt-3x">
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

<style>
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
  display: grid;
  grid-template-areas:
    "mt-1x mt-2x"
    "mt-3x mt-3x";
  gap: 40px;
  justify-content: center;
  margin-left: 100px;
}

.mt-1x
{
  grid-area: mt-1x;
  margin-top: 50px;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: -100px;
}

.mt-2x {
  grid-area: mt-2x;
  margin-top: 50px;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
}

.mt-3x {
  grid-area: mt-3x;
  margin-top: 50px;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 90px;
  margin-right: 100px;
  position: relative;
}
.mt-1x img {
  width: 280px;
  height: 200px;
}

.mt-3x img {
  width: 280px;
  height: 220px;
}

.mt-2x p {
  text-align:center;
  margin-top: 10px;
}

.text-center {
  color: darkgreen !important;
  font-size: 50px;
  margin-top: 180px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
}


.title-card {
  color: darkgreen !important;
  margin-top: -11px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;

}

.sub-header {
  color: gray !important;
  font-size: 20px;
  margin-top: -10px;


}

.tasks {
  color: black !important;
  font-size: 35px;
  font-weight: bold;
  margin-top: 50px !important;
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
  justify-content: center;
  align-items: center;
}

</style>


