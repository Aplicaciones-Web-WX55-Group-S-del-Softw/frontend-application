<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import taskService from "../../services/tasks/tasks.js";

export default {
  setup() {
    const router = useRouter();
    const task = ref({
      employee: '',
      date: '',
      time: '',
      description: '',
      state: 'pending'
    });

    const onSubmit = () => {
      taskService.addTask(task.value);
      router.push('/tasks');
    };

    const cancel = () => {
      router.push('/tasks');
    };

    return {task, onSubmit, cancel};
  }
};
</script>

<template>

  <div class="form-container">
    <h1>CREATE TASK</h1>

    <div class="login-box">
      <form @submit.prevent="onSubmit">
        <label>Employee:</label>
        <div class="user-box">
          <select v-model="task.employee" required>
            <option value="Mathias Aguilar">Mathias Aguilar</option>
            <option value="Rodrigo Kunimoto">Rodrigo Kunimoto</option>
          </select>
        </div>
        <label>Date:</label>
        <div class="user-box">
          <input type="date" v-model="task.date" required>
        </div>
        <label>Time to perform:</label>
        <div class="user-box">
          <select v-model="task.time" required>
            <option v-for="n in 24" :key="n" :value="n">{{n}}</option>
          </select>
        </div>
        <label>Description:</label>
        <div class="user-box">
          <input type="text" v-model="task.description" required>
        </div>
        <button type="submit" class="button-save">Save</button>
        <button type="button" @click="cancel" class="button-save">Cancel</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
.form-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.form-container h1 {
  display: block;
  font-size: 7em;
  color: darkgreen;
  margin-top: 20px;
}



.login-box {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  width: 500px;
  max-width: 100%;
  margin: 3% auto;
}


.user-box {
  position: relative;
  margin-bottom: 30px;
  width: 100%;
}

.user-box input,
.user-box select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #333;
  border: none;
  border-bottom: 1px solid #53a190;
  outline: none;
  background: transparent;
}

.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #333;
  pointer-events: none;
  transition: 0.5s;
}

.button-save {
  background: linear-gradient(90deg, #278f4a, #278f4a);
  border: none;
  padding: 10px 20px;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.5s, transform 0.3s;
  width: 40%;
  margin: 20px 15px;
}

.button-save:hover {
  transform: scale(1.1);
}



</style>