<script>
import { ref } from 'vue';
import {DashboardApi} from "../../services/dashboard-analytics-api/dashboard-api.js";
import {EmergencyApi} from "./emergency-api.js";
import SuccessModal from "../task-card/success-modal.vue";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

export default {
  name: "emergency",
  components: {FooterComponent, ToolbarComponent, SuccessModal},

  data() {
    return {
      emergencys: [],
      emergencyApi: new EmergencyApi(),
      employees:[],
      employeesApi: new DashboardApi(),
    };
  },
  created() {
    this.emergencyApi.getData().then(response => {
      this.emergencys = response.data;
      console.log(this.emergencys)
    }).catch(error => {
      console.error(error);
    });

    this.employeesApi.getTasks().then(response => {
      this.employees = [...new Set(response.data.map(task => task.employee))];
    }).catch(error => {
      console.error(error);
    });
  }
}
</script>

<template>

  <toolbar-component></toolbar-component>
  <router-link to="/home" class="back-button">BACK</router-link>

  <div class="container">

    <h1>Emergency</h1>
    <h2>History</h2>

    <div class="label1x">Choose the recipient:</div>
    <div class="label2x">Date:</div>
    <div class="label4"></div>

    <div class="row">
      <div class="input-container">
        <select v-model="selectedEmployee">
          <option v-for="employee in employees" :key="employee" :value="employee">
            {{ employee }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <input type="date" v-model="selectedDate">
      </div>
    </div>

    <div class="label-description">Description:</div>

    <div class="input-container">
      <textarea v-model="taskDescription" placeholder="Emergency description"></textarea>
    </div>

    <div class="button-container">
      <button to="/home" class="button-link save-button">Save</button>
      <router-link to="/home" class="button-link cancel-button">Cancel</router-link>
    </div>

    <SuccessModal :show="showModal" @close="closeModal" />

    <table class="history-table">
      <thead>
      <tr>
        <th>Recipient</th>
        <th>Date</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="emergency in emergencys" :key="emergency.id">
        <td>{{ emergency.recipient }}</td>
        <td>{{ emergency.date }}</td>
        <td>{{ emergency.description }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <footer-component></footer-component>
</template>

<style scoped>

h1{
  font-size: 40px;
  position: relative;
  text-align: center;
  top: -10px;
  margin:0;
  color:darkgreen;
}

h2 {
  font-size: 35px;
  position: relative;
  text-align: center;
  top: 580px;
  color:darkgreen;
  margin: 0 0 0 -450px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
  margin-bottom: 60%;

}


.row {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: -15px;
}

.input-container {
  width: 100%;
  max-width: 200px;
  height: 50px;
  font-size: 16px;
  margin: 20px 0;
  display: flex;
}

select{
  border: 2px solid #000;
  border-radius: 5px;
}

input[type="date"], input[type="time"], select {
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  border-radius: 5px;
}

textarea {
  min-width: 550px;
  max-width: 100%;
  height: 300px;
  resize: none;
  margin-left: -178px;
  margin-top: -30px;
  border: 2px solid #000;
  border-radius: 5px;
}


.save-button, .cancel-button{

  background-color: #E9F3AE;
  color: black;
  border: none ;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 16px;
  margin-top: 130px;
  margin-left: -87px;
  transition: background-color 0.3s ease;
  position: absolute;
}

.save-button, .cancel-button {
  margin-top: 210px;
}

.save-button{
  padding: 0.35% 15px;
}
.cancel-button{
  font-size: 13px;
  padding: 0.35%  15px;
}
.save-button:hover {
  background-color: darkgreen;
  color: white;
}

.cancel-button:hover {
  background-color: #FF0000;
  color: white;
}

.save-button {
  left: 570px;
}

.cancel-button {
  left: 670px;
}

input, select, textarea, input[type="date"] {
  border: 1px solid #000000;
}

input[type="date"] {
  margin-left: 40px;
}

.label1x, .label2x, .label4 {
  position:absolute;
  font-size: 15px;
  color: black;
  margin-top: 90px;

  font-weight: bold;
}

.label1x{
  margin-left: -315px;
  margin-top: 90px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.label2x{
  margin-left: 155px;
  margin-top: 90px;
  font-weight: bold;
  transition: color 0.3s ease;
}


.input-container select, .input-container input[type="date"] {
  border: none;
  outline: none;
  background-color: #f3f3f3;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease;
}

.input-container select:focus, .input-container input[type="date"]:focus {
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.label-description {
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: -460px;
}

.label4{
  margin-top: 250px;
  margin-left: -360px;
}


.history-table {
  position: relative;
  margin-left: -10px;
  top: 385px;
  width: 550px;
  overflow-y: auto;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0,0,0,0.15);
}

.history-table thead tr {
  background-color: darkgreen;
  color: #ffffff;
  text-align: left;
}

.history-table th,
.history-table td {
  padding: 12px 15px;
}

.history-table tbody tr {
  transition: background-color 0.5s ease;
}

.history-table tbody tr:hover {
  background-color: #f0f0f0;
}

.history-table tbody tr:last-of-type {
  border-bottom: 2px solid #278f4a;
}


</style>