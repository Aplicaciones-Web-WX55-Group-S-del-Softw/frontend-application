<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      tasks: [
        { id: "#1", employee: 'Rogrigo Kunimoto', time: '3 horas', date: '29/03/2024', finished: "Pendiente", description: "Dar de comer a todos los pollos del granero 10" },
        { id: "#2", employee: 'Franco Barrionuevo', time: '2 horas', date: '30/03/2024', finished: "Finalizado", description: "Dar de comer a todos los pollos del granero 8" },
        { id: "#3", employee: 'Fernando Salgado', time: '4 horas', date: '31/03/2024', finished: "Pendiente", description: "Dar de comer a todos los pollos del granero 3" },
      ],
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
      <div  class="card">
      <p><span class="bold-text">Empleado:</span> {{ task.employee }}</p>
      <p><span class="bold-text">Fecha:</span> {{ task.date }}</p>
      <p><span class="bold-text">Descripción:</span> {{ task.description }}</p>
    </div>
    </div>
    <div v-else>
      <p>No se encontró la tarea</p>
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
</style>