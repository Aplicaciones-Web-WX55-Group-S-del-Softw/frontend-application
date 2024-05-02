<script>
import { useRoute, useRouter } from 'vue-router';

import {DashboardApi} from "../../services/dashboard-analytics-api/dashboard-api.js";



export default {
  data() {
    return {
      tasks: null,
      taskApi: new DashboardApi(),
      showMessage: false,
    };
  },

  computed: {
    task() {
      const route = useRoute();
      const taskId = "#" + route.params.id;
      return this.tasks ? this.tasks.find(task => task.id === taskId) : null;
    }
  },
  created() {
    this.taskApi.getTasks().then(response => {
      this.tasks = response.data;
      console.log( this.tasks)
    }).catch(error => {
      console.error(error);
    });
  },
  methods: {
    finishTask() {
      if (this.task) {
        this.task.finished = "Finished";
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 2000);
      }
    },
    cancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<template>
  <router-link to="/home" class="back-button">BACK</router-link>

  <div class="container">
    <div v-if="tasks">
      <h1>Task {{task.id}}</h1>
      <div class="card">
        <p><span class="bold-text">Employee:</span> {{ task.employee }}</p>
        <p><span class="bold-text">Date:</span> {{ task.date }}</p>
        <p><span class="bold-text">Description:</span> {{ task.description }}</p>
        <p><span class="bold-text">Status:</span> {{ task.finished }}</p>

      </div>
      <div class="button">
        <button v-if="task.finished === 'Pendiente'" @click="finishTask" class="finish-button">Finish homework</button>
        <button @click.native="$router.go(-1)" class="cancel-button">Go back</button>
      </div>
    </div>
    <div v-else class="error-card">
      <p>⚠️ Task not found</p>
      <button @click="cancel" class="return-button">Go back</button>
    </div>
    <div v-if="showMessage" class="message">
      <p>The task has been marked as completed.</p>
    </div>
  </div>

</template>

<style scoped>

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  top: 300px;
}

h1{
  font-size: 70px;
  position: relative;
  text-align: center;
  top: -20px;
  left: 20px;
  margin:0;
  color:darkgreen;
}
.message {
  top: -50px;
  background-color: #9fd0a4;
  border: 2px solid #204f00;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.bold-text {
  font-weight: bold;
}

.card {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 20px;
  width: 120%;
  height: 230px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.finish-button {
  background-color: #0ee004;
  border: 2px solid #003f17;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 50px;
  margin-left: 90px;
}

.cancel-button {
  background-color: #ffaca9;
  border: 2px solid #ff0000;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 50px;
  margin-left: 180px;
}

.return-button {
  background-color: #ffaca9;
  border: 1px solid #ff0000;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 50px;

}
.return-button:hover {
  background-color: #f82b2b;
}

.error-card {
  background-color: #ffe6e6;
  border: 1px solid #ff0000;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.25);
  padding: 20px;
  width: 30%;
  height: 190px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2em;
}
</style>