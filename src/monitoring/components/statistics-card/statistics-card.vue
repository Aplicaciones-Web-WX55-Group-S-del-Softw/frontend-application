<template>
  <router-link to="/" class="back-button">go out</router-link>

  <h1 class="text-center">Statistics</h1>

  <div class="cards">
    <pv-card class="mt-1">
      <template #content>
        <h1 class="title-card">Production</h1>
        <img src="../../../assets/production.png" alt="Producción">
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
          <img src="../../../assets/income.png" alt="Ingresos">
        </router-link>
      </template>
    </pv-card>
  </div>

</template>

<style>
/* Estilos previos */

.cards {
  display: grid;
  grid-template-areas:
    "mt-1 mt-2"
    "mt-3 mt-3";
  gap: 40px;
  justify-content: center;
}

.mt-1 {
  grid-area: mt-1;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mt-2 {
  grid-area: mt-2;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mt-3 {
  grid-area: mt-3;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
