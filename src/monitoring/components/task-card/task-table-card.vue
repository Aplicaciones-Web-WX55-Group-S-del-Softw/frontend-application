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
    <h2 class="addnew"><router-link to="/tasks/new">ADD NEW TASK</router-link></h2>
    <div class="table-container">

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
  position: relative;
  text-align: center;
  top: 130px;
  margin:0;
  color:darkgreen;
}
h2 {
  font-size: 20px;
  text-decoration: underline;
  position: relative;
  right: 380px;
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

@media (max-width: 320px) {

  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 70px;
    left: 130px;
    top: 150px;
    text-align: center;
    margin:0;
    color:darkgreen;
  }

  h2 {
    left: 240px;
    top: 225px;
  }

  .table-container {
    width: 100%;
    margin: 130px 0 0 25px;
  }

  table {
    width: 100%;
  }
}


@media (min-width: 321px) and (max-width: 500px) {

  .container {
    flex-direction: column;
    align-items: flex-start;

  }

  h1 {
    font-size: 70px;
    left: 200px;
    top: 190px;
    text-align: center;
    margin:0;
    color:darkgreen;
  }

  h2 {
    left: 300px;
    top: 275px;
  }

  .table-container {
    width: 30%;
    height:10%;
    margin-left:100px;
  }


}

@media (min-width: 501px) and (max-width: 767px) {

  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 70px;
    left: 260px;
    top: 70px;
    text-align: center;
    margin:0;
    color:darkgreen;
  }

  h2 {
    left: 345px;
    top: 225px;
  }

  .table-container {
    width: 60%;
    margin: 130px 0 0 150px;
  }

  table {
    width: 100%;
  }
}
@media (min-width: 768px) and (max-width: 819px) {

  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 130px;
    left: 280px;
    top: 70px;
    text-align: center;
    margin:0;
    color:darkgreen;
  }

  h2 {
    left: 630px;
    top: 225px;
  }

  .table-container {
    width: 100%;
    margin: 130px 0 0 25px;
  }

  table {
    width: 100%;
  }
}

@media (min-width: 820px) and (max-width: 900px) {

  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 130px;
    left: 300px;
    top: 30px;
    text-align: center;
    margin:0;
    color:darkgreen;
  }

  h2 {
    left: 665px;
    top: 225px;
  }

  .table-container {
    width: 100%;
    margin: 130px 0 0 25px;
  }

  table {
    width: 100%;
  }
}
@media (min-width: 901px) and (max-width: 1000px) {

  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 130px;
    left: 490px;
    top: 70px;
    text-align: center;
    margin:0;
    color:darkgreen;
  }

  h2 {
    left: 730px;
    top: 225px;
  }

  .table-container {
    width: 100%;
    margin: 130px 0 0 25px;
  }

  table {
    width: 70%;
    margin-left:240px;
  }
}
@media  (min-width: 1001px) {

  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 130px;
    left: 690px;
    top: 70px;
    text-align: center;
    margin:0;
    color:darkgreen;
  }

  h2 {
    left: 1130px;
    top: 225px;
  }

  .table-container {
    width: 100%;
    margin: 130px 0 0 25px;
  }

  table {
    width: 70%;
    margin-left:240px;
  }
}
</style>









