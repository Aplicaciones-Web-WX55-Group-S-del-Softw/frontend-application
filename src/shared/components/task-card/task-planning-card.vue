<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import SuccessModal from './success-modal.vue';
import db from '../../../../server/db.json'; // Importa db.json

const router = useRouter();
const selectedEmployee = ref('');
const employees = ref([...new Set(db.tasks.map(task => task.employee))]); // Carga los empleados desde db.json
const selectedDate = ref('');
const taskTime = ref('');
const taskDescription = ref('');
const showModal = ref(false);

const saveTask = () => {
  showModal.value = true;
  setTimeout(() => {
    router.push('/tasks');
  }, 1500);
};

const closeModal = () => {
  showModal.value = false;
};
</script>
<template>
  <div class="container">
    <h1>Task</h1>

    <div class="label1">Employee:</div>
    <div class="label2">Fecha:</div>
    <div class="label3">Tiempo en realizar:</div>
    <div class="label4">Descripción:</div>

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

    <div class="input-container task-time-container">
      <select v-model="taskTime">
        <option v-for="hour in 24" :key="hour" :value="hour">
          {{ hour }}
        </option>
      </select>
    </div>

    <div class="input-container">
      <textarea v-model="taskDescription" placeholder="Descripción de la tarea"></textarea>
    </div>


    <div class="input-container">
      <button @click="saveTask" class="button-link save-button">Guardar</button>
      <router-link to="/" class="button-link cancel-button">Cancelar</router-link>
    </div>

    <SuccessModal :show="showModal" @close="closeModal" />
  </div>
</template>

<style scoped>

h1{
  font-size: 70px;
  position: relative;
  text-align: center;
  top: -30px;
  margin:0;
  color:darkgreen;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
}

.row {
  display: flex;
  justify-content: space-between;
  width: 30%;
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

.save-button, .cancel-button{

  background-color: #E9F3AE;
  color: black;
  border: none ;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 16px;
  margin-top: 130px;
  transition: background-color 0.3s ease;
  position: absolute;
}
.save-button{
  padding: 0.35% 15px;
}
.cancel-button{
  font-size: 13px;
  padding: 6px 15px;
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
  margin-left: 110px;
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