<script>

import {DashboardApi} from "../../../shared/service/dashboardapi.js";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

export default {
  components: {FooterComponent, ToolbarComponent},
  data() {
    return {
      tasks: [],
      taskApi: new DashboardApi()
    };
  },
  created() {
    this.taskApi.getTasks().then(response => {
      this.tasks = response.data;
      console.log(this.tasks)
    }).catch(error => {
      console.error(error);
    });
  },
  cancel() {
    this.$router.go(-1);
  }
};
</script>


<template>
  <toolbar-component></toolbar-component>

  <router-link to="/home" class="back-button">BACK</router-link>

  <div class="container">
    <h1>Task</h1>
    <div class="table-container">
      <h2><router-link to="/tasks/new">Add new task</router-link></h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Employee</th>
          <th>Time to do</th>
          <th>Date</th>
          <th>Finished</th>
        </tr>
        <tr v-for="task in tasks" :key="task.id">
          <td><router-link :to="`/tasks/${task.id.substring(1)}/details`">{{ task.id }}</router-link></td>
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









