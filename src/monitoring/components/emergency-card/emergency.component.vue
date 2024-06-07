<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios  from 'axios';
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import { EmergencyApi } from './emergency-api.js';

export default {
  name: "emergency",
  components: {ToolbarComponent},

  setup() {
    const router = useRouter();
    const selectedEmployee = ref('');
    const selectedDate = ref('');
    const taskDescription = ref('');
    const showModal = ref(false);
    const employees = ref([]);
    const EmergencyData = ref([]);

    const saveTask = () => {
      showModal.value = true;


      // Add a new emergency object to EmergencyData
      EmergencyData.value.push({
        id: Date.now(), // Use the current timestamp as a unique id
        recipient: selectedEmployee.value,
        date: selectedDate.value,
        description: taskDescription.value
      });

      // Clear the form
      selectedEmployee.value = '';
      selectedDate.value = '';
      taskDescription.value = '';
    };

    const closeModal = () => {
      showModal.value = false;
    };

    onMounted(async () => {
      const api = new EmergencyApi();
      const response = await api.getData();
      EmergencyData.value = response.data;

      const uniqueEmployees = new Set(EmergencyData.value.map(emergency => emergency.recipient));

      employees.value = Array.from(uniqueEmployees);
    });

    return {
      selectedEmployee,
      selectedDate,
      taskDescription,
      showModal,
      saveTask,
      closeModal,
      employees,
      EmergencyData
    }
  },
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <div class="container">
    <h1>Emergency</h1>
    <h2>History</h2>

    <div class="label1">Choose the recipient:</div>
    <div class="label2">Date:</div>
    <div class="label4"></div>

    <div class="row">
      <div class="input-container-employee">
        <select v-model="selectedEmployee">
          <option v-for="employee in employees" :key="employee" :value="employee">
            {{ employee }}
          </option>
        </select>
      </div>
      <div class="input-container-date">
        <input type="date" v-model="selectedDate">
      </div>
    </div>

    <div class="label-description">Description:</div>

    <div class="input-container-task-description">
      <textarea v-model="taskDescription" placeholder="Emergency description"></textarea>
    </div>

    <div class="input-container-save-emergency">
      <button @click="saveTask" class="button-link save-button">Save</button>
    </div>

    <div class="input-container-cancel-emergency">
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 155px;
}

h1, h2 {
  position: relative;
  text-align: center;
  color:#44604D;
  margin: 0;
}

h1 {
  font-size: 40px;
  top: -10px;
}

h2 {
  font-size: 35px;
  top: 522px;
  margin-left: -410px;
}

.row {
  display: flex;
  margin-top: -40px;
}

.input-container-employee, .input-container-date, .input-container-task-description {
  width: 100%;
  max-width: 200px;
  height: 40px;
  font-size: 16px;
  margin: 20px 0;
  padding: 5px;
  display: flex;
}

.input-container-employee select, .input-container-date input[type="date"] {
  border: 2px solid #000;
  border-radius: 5px;
  transform: translateY(20px);
}

.input-container-employee select{
  width: 145px;
  transform: translate(-60px, 20px);
}

.input-container-task-description textarea {
  min-width: 550px;
  max-width: 100%;
  height: 300px;
  resize: none;
  margin-left: -178px;
  margin-top: -30px;
  border: 2px solid #000;
  border-radius: 5px;
}

.save-button, .cancel-button {
  background-color: #E9F3AE;
  color: black;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  position: absolute;
  padding: 7px 15px;
  font-size: 13px;
}

.save-button {
  margin-top: 230px;
  margin-left: -270px;
}

.cancel-button {
  margin-top: 230px;
  margin-left: -197px;
}

.save-button:hover {
  background-color: #006400;
  color: white;
}

.cancel-button:hover {
  background-color: #FF0000;
  color: white;
}

.label1, .label2 {
  position:absolute;
  font-size: 15px;
  color: black;
  font-weight: bold;
  transition: color 0.3s ease;
}

.label1 {
  margin-left: -245px;
  margin-top: 70px;
}

.label2 {
  margin-left: 80px;
  margin-top: 70px;
}

.label1:hover, .label2:hover {
  color: #009879;
}

.label-description {
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: -460px;
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

.history-table th, .history-table td {
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