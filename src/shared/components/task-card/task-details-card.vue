<script>
import { useRoute } from 'vue-router';
import db from '../../../../server/db.json';

export default {
  data() {
    return {
      tasks: db.tasks,
    };
  },

  computed: {
    task() {
      const route = useRoute();
      const taskId = "#" + route.params.id;
      return this.tasks.find(task => task.id === taskId);
    }
  }
};
</script>
<template>
  <div class="container">
    <div v-if="task">
      <h1>Task {{task.id}}</h1>
      <div class="card">
        <p><span class="bold-text">Empleado:</span> {{ task.employee }}</p>
        <p><span class="bold-text">Fecha:</span> {{ task.date }}</p>
        <p><span class="bold-text">Descripción:</span> {{ task.description }}</p>
      </div>
    </div>
    <div v-else class="error-card">
      <p>⚠️ No se encontró la tarea</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  top: 300px;
}

h1{
  font-size: 70px;
  position: relative;
  text-align: center;
  top: -10px;
  margin:0;
  color:darkgreen;
}

.bold-text {
  font-weight: bold;
}

.card {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 20px;
  width: 120%;
  height: 190px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.error-card {
  background-color: #ffe6e6;
  border: 1px solid #ff0000;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.25);
  padding: 20px;
  width: 30%;
  height: 190px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2em;
}
</style>