<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios  from 'axios';

export default {
  name: "emergency",

  setup() {
    const router = useRouter();
    const selectedEmployee = ref('');
    const selectedDate = ref('');
    const taskDescription = ref('');
    const showModal = ref(false);
    const employees = ref([]);

    const saveTask = () => {
      showModal.value = true;
      setTimeout(() => {
        router.push('/detail-monitoring');
      }, 1500);
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      selectedEmployee,
      selectedDate,
      taskDescription,
      showModal,
      saveTask,
      closeModal,
      employees // Return employees so it can be accessed in the template
    }
  },

  data() {
    return {
      EmergencyData: []
    }
  },
  created() {
    axios.get('server/db.json')
        .then(response => {
          this.EmergencyData = response.data.emergencyData;
          this.employees = response.data.employees;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>

<template>
  <div class="container">
    <h1>Emergency</h1>
    <h2>History</h2>

    <div class="label1">Choose the recipient:</div>
    <div class="label2">Date:</div>
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

    <div class="input-container">
      <button @click="saveTask" class="button-link save-button">Save</button>
      <router-link to="/" class="button-link cancel-button">Cancel</router-link>
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
      <tr v-for="emergency in EmergencyData" :key="emergency.id">
        <td>{{ emergency.recipient }}</td>
        <td>{{ emergency.date }}</td>
        <td>{{ emergency.description }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>

h1{
  font-size: 40px;
  position: relative;
  text-align: center;
  top: -10px;
  margin:0;
  color:#44604D;
}

h2 {
  font-size: 35px;
  position: relative;
  text-align: center;
  top: 522px;
  color:#44604D;
  margin: 0 0 0 -410px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8.5%;
}


.row {
  display: flex;
  margin-top: -40px;
}

.input-container {
  width: 100%;
  max-width: 200px;
  height: 40px;
  font-size: 16px;
  margin: 20px 0;
  padding: 5px;
  display: flex;
}

select {
  border: 2px solid #000;
  border-radius: 5px;
  margin-right: 50px;
  width: 250px;
}

input[type="date"], input[type="time"] {
  border: 2px solid #000;
  border-radius: 5px;
  margin-left: 35px;
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
  transition: background-color 0.3s ease;
  position: absolute;
}

.save-button{
  margin-top: 210px;
  margin-left: -170px;
  padding: 0.35% 15px;
}

.cancel-button{
  margin-top: 210px;
  margin-left: -98px;
  font-size: 13px;
  padding: 0.35%  15px;
}
.save-button:hover {
  background-color: #006400;
  color: white;
}

.cancel-button:hover {
  background-color: #FF0000;
  color: white;
}

input, select, textarea, input[type="date"] {
  border: 1px solid #000000;
}

.label1, .label2, .label4 {
  position:absolute;
  font-size: 15px;
  color: black;
  font-weight: bold;
}

.label1{
  margin-left: -245px;
  margin-top: 70px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.label2{
  margin-left: 120px;
  margin-top: 70px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.label1:hover, .label2:hover {
  color: #009879;
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
  position: absolute;
  margin-left: 15px;
  transform:translateY(39.5em);
  width: 550px;
  overflow-y: auto;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0,0,0,0.15);
}

.history-table thead tr {
  background-color: #44604D;
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
  border-bottom: 2px solid #009879;
}
</style>