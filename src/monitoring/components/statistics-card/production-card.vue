<script>
export default {
  name: "statistics"
}
</script>

<template>
  <router-link to="/" class="back-button">Back</router-link>

  <h1 class="text-center">Statistics</h1>

  <div class="cards">
    <pv-card class="mt-1">

      <template #content>
        <router-link to="/production/statistics" style="text-decoration: none;">
          <h1 class="title-card">Production</h1>
          <img src="../../../assets/production.png" alt="Production">
        </router-link>
      </template>
    </pv-card>

    <pv-card class="mt-2">
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
    <pv-card class="mt-3">
      <template #content>
        <router-link to="/financial/statistics" style="text-decoration: none;">
          <h1 class="title-card">Financial Statistics</h1>
          <img src="../../../assets/income.png" alt="Income">
        </router-link>

      </template>
    </pv-card>
  </div>

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
    "mt-1 mt-2"
    "mt-3 mt-3";
  gap: 40px;
  justify-content: center;
  margin-left: 100px;
}

.mt-1 {
  grid-area: mt-1;
  margin-top: 50px;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: -100px;
}

.mt-2 {
  grid-area: mt-2;
  margin-top: 50px;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
}

.mt-3 {
  grid-area: mt-3;
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
.mt-1 img {
  width: 280px;
  height: 200px;
}

.mt-3 img {
  width: 280px;
  height: 220px;
}

.mt-2 p {
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