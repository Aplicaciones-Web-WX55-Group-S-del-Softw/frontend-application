<script>
import db from '../../../../server/db.json';
export default {
  data() {
    return {
      data: db
    };
  },
};
</script>
<template>
  <div class="container">
    <h1>Task</h1>
    <div class="table-container">
    <h2><router-link to="/new-task">Agregar nueva task</router-link></h2>
    <table>
      <tr>
        <th>ID</th>
        <th>Employee</th>
        <th>Tiempo a realizar</th>
        <th>Fecha</th>
        <th>Finalizado</th>
      </tr>
      <tr v-for="item in data.tasks" :key="item.id">
        <td><router-link :to="`/tasks-details/${item.id.substring(1)}`">{{ item.id }}</router-link></td>
        <td>{{ item.employee }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.finished}}</td>
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
  font-size: 20px;
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
  width: 70%;
  border-collapse: collapse;
  border: 2px solid black;
  margin-top: 100px;

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
  height: 100px;
}
.empty-row td {
  border-bottom: 1px solid #000;
  height: 20px;
}
.table-container {
  width: 70%;
  height: 700px;
  margin: 200px 60px auto auto;
}
</style>