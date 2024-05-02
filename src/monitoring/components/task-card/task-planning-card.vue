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
    finished: 'Pendiente'
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

      <div class="input-container">
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

    <div class="input-container">
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
.container-button{
  margin-top: 160px;
}

.save-button, .cancel-button{

  background-color: #E9F3AE;
  color: black;
  border: none ;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 16px;
  transition: background-color 0.3s ease;
  position: absolute;

}
.save-button{
  padding: 0.35% 15px;
}
.cancel-button{
  font-size: 13px;
  padding: 4px 15px;
}




h1{
  font-size: 70px;
  position: relative;
  top: -30px;
  left:-50px;
  margin:0;
  color:darkgreen;
}

.container {
  margin-top:100px;
  margin-bottom: 50px; /* Agregar espacio en la parte inferior */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px; /* Ajuste del margen izquierdo */

}
.row {
  display: flex;
  width: 30%;
  margin-left:-80px
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
select{
  border: 2px solid #000;
  border-radius: 5px;
}
.task-time-container {
  margin-right: 257px;
}

input[type="date"], input[type="time"], select {
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  border-radius: 5px;
}

textarea {
  width: 400px;
  height: 200px;
  resize: none;
  margin-left: -127px;
  border: 2px solid #000;
  border-radius: 5px;
}



.save-button:hover {
  background-color: #006400;
  color: white;
}

.cancel-button:hover {
  background-color: #FF0000;
  color: white;
}

.save-button {
  left: 547px;
}

.cancel-button {
  left: 630px;


}



.label1{
  position:absolute;
  font-size: 15px;
  color: black;
  margin-top: 90px;
  margin-left: -370px;
}

.label2{
  position:absolute;
  font-size: 15px;
  color: black;
  margin-top: 90px;
  margin-left: -9px;
}

.label3{
  position:absolute;
  font-size: 15px;
  color: black;
  margin-top: 170px;
  margin-left: -320px;
}

.label4{
  position:absolute;
  font-size: 15px;
  margin-top: 250px;
  margin-left: -360px;
  color: black;
}
</style>