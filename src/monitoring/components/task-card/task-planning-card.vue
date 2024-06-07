<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {DashboardApi} from "../../services/dashboard-analytics-api/dashboard-api.js";
import SuccessModal from "./success-modal.vue";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

const router = useRouter();
const selectedEmployee = ref('');
const taskApi = new DashboardApi();
let tasks = [];
const employees = ref([]);
taskApi.getTasks().then(response => {
  console.log(response);
  tasks = response.data;
  employees.value = [...new Set(tasks.map(task => task.employee))];
}).catch(error => {
  console.error(error);
});
const selectedDate = ref('');
const taskTime = ref('');
const taskDescription = ref('');
const showModal = ref(false);

const saveTask = () => {
  const newTask = {
    employee: selectedEmployee.value,
    date: selectedDate.value,
    time: taskTime.value,
    description: taskDescription.value,
    finished: 'Pending'
  };

  taskApi.createTask(newTask)
      .then(() => {
        showModal.value = true;
        setTimeout(() => {
          router.push('/tasks');
        }, 1500);
      })
      .catch(error => {
        console.error(error);
      });
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <toolbar-component></toolbar-component>
  <router-link to="/home" class="back-button">BACK</router-link>
  <div class="container">
    <h1>Task</h1>

    <div class="label1">Employee:</div>
    <div class="label2">Date:</div>
    <div class="label3">Time to complete:</div>
    <div class="label4">Description:</div>
    <div class="row">
      <div class="input-container" style="margin-left: -10px;">
        <select v-model="selectedEmployee" class="input-employee">
          <option v-for="employee in employees" :key="employee" :value="employee">
            {{ employee }}
          </option>
        </select>

      </div>

      <div class="input-container ">
        <input type="date" v-model="selectedDate">
      </div>
    </div>
    <div class="input-container task-time-container">
      <select v-model="taskTime">
        <option v-for="hour in 24" :key="hour" :value="hour">
          {{ hour }}
        </option>
      </select>
    </div>
<br>

    <div class="input-container description-container">
      <textarea v-model="taskDescription" placeholder="Task description"></textarea>


    </div>

    <div class="container-button">
      <button @click="saveTask" class="button-link save-button">Save</button>
      <router-link to="/tasks" class="button-link cancel-button">Cancel</router-link>
    </div>
    <SuccessModal :show="showModal" @close="closeModal" />

  </div>
<footer-component></footer-component>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 80px;
}

h1 {
  font-size: 70px;
  position: relative;
  top: -30px;
  left: -50px;
  margin: 0;
  color: darkgreen;
}

.row {
  display: flex;
  margin-left: -80px;
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

.input-container select, .input-container input[type="date"] {
  width: 145px;
  border: 2px solid #000;
  border-radius: 5px;
}

.input-container textarea {
  min-width: 345px;
  max-width: 100%;
  height: 210px;
  resize: none;
  margin-left: -137px;
  margin-top: -15px;
  border: 2px solid #000;
  border-radius: 5px;
}

.input-employee {
  position: relative;
  left: -40px; /* Ajusta este valor según tus necesidades */
}

.task-time-container {
  margin-left: -280px;
}

.container-button {
  margin-top: 160px;
}

.save-button, .cancel-button {
  background-color: #E9F3AE;
  color: black;
  border: none;
  text-decoration: none;
  font-size: 13px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  position: relative;
}

.save-button {
  padding: 4px 15px;
  left: -165px;
}

.cancel-button {
  padding: 4px 15px;
  left: -150px;
}
.save-button:hover {
  background-color: #006400;
  color: white;
}

.cancel-button:hover {
  background-color: #FF0000;
  color: white;
}

.label1, .label2, .label3, .label4 {
  position: absolute;
  font-size: 15px;
  color: black;
}

.label1 {
  margin-top: 90px;
  margin-left: -400px;
}

.label2 {
  margin-top: 90px;
  margin-left: -43px;
}

.label3 {
  margin-top: 170px;
  margin-left: -350px;
}

.label4 {
  margin-top: 250px;
  margin-left: -382px;
}

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
</style>