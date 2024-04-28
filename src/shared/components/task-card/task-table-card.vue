<script>
export default {
  data() {
    return {
      tasks: [
        { id: "#1", employee: 'Rodrigo Kunimoto', time: '3 horas', date: '29/03/2024', finished: "Pendiente" },
        { id: "#2", employee: 'Franco Barrionuevo', time: '2 horas', date: '30/03/2024', finished: "Finalizado" },
        { id: "#3", employee: 'Fernando Salgado', time: '4 horas', date: '31/03/2024', finished: "Pendiente" },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <h1>Task</h1>
    <h2><router-link to="/new-task">Agregar nueva task</router-link></h2>
    <table>
      <tr>
        <th>ID</th>
        <th>Employee</th>
        <th>Tiempo a realizar</th>
        <th>Fecha</th>
        <th>Finalizado</th>

      </tr>
      <tr v-for="task in tasks" :key="task.id">

        <td><router-link :to="`/tasks-details/${task.id.substring(1)}`">{{ task.id }}</router-link></td>
        <td>{{ task.employee }}</td>
        <td>{{ task.time }}</td>
        <td>{{ task.date }}</td>
        <td>{{ task.finished}}</td>
      </tr>

      <tr class="empty-row">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

      </tr>
    </table>

  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150vh;
}
h1{
  font-size: 70px;
  position: absolute;
  text-align: center;
  top: 130px;
  margin:0;
  color:darkgreen;
}
h2 {
  font-size: 15px;
  text-decoration: underline;
  position: absolute;
  right: 377px;
  top: 260px;
  margin:0;
  color:darkgreen !important;
}
h2 > a {
  color: green !important;
}

h2 > a:hover {
  color: darkgreen !important;
}

table {
  width: 50%;
  border-collapse: collapse;
  border: 2px solid black;
}

th {
  border: 2px solid black;
  padding: 8px;
  text-align: center;
}

td {
  border-left: 2px solid black;
  border-right: 2px solid black;
  padding-bottom: 20px;
  text-align: center;
  height: 10px;

}
.empty-row {
  height: 380px;
}
.empty-row td {
  border-bottom: 1px solid #000;
  height: 20px;
}

</style>