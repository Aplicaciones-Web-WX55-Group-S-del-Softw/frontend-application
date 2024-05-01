<script>
import db from '../../../../server/db.json';
export default {
  data() {
    return {
      selectedDate: '',
      selectedEmployee: '',
      tasks: [],
      employees: [...new Set(db.tasks.map(task => task.employee))],
      dates: [...new Set(db.tasks.map(task => task.date))],
      showMessage: false,
    };
  },
  methods: {
    fetchTasks() {
      this.tasks = db.tasks.filter(task =>
          task.date === this.selectedDate &&
          task.employee === this.selectedEmployee &&
          task.finished === "Pendiente"
      );

      if (this.tasks.length === 0) {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);
      }
    },
    fetchFinishedTasks() {
      this.tasks = db.tasks.filter(task =>
          task.date === this.selectedDate &&
          task.employee === this.selectedEmployee &&
          task.finished === "Finalizado"
      );

      if (this.tasks.length === 0) {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);
      }
    },
    closeModal() {
      this.showMessage = false;
    }
  }
};
</script>

<template>
  <div>
    <router-link to="/" class="back-button">go out</router-link>

    <h1>Tasks</h1>

    <div class="dropdown-container">
      <div class="dropdown-item">
        <h4>Employee:</h4>
        <select v-model="selectedEmployee">
          <option v-for="employee in employees" :key="employee">{{ employee }}</option>
        </select>
      </div>
      <div class="dropdown-item">
        <h4>From:</h4>
        <select v-model="selectedDate">
          <option v-for="date in dates" :key="date">{{ date }}</option>
        </select>
      </div>
    </div>

    <button @click="fetchTasks">Show Pending Tasks</button>
    <button @click="fetchFinishedTasks">Show Completed Tasks</button>

    <div v-if="showMessage" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <p><span class="warning">⚠️</span> Task not found</p>
      </div>
    </div>

    <table v-if="tasks.length > 0">
      <thead>
      <tr>
        <th>ID</th>
        <th>Employee</th>
        <th>Time</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td><router-link :to="`/tasks/${task.id.substring(1)}/details`">{{ task.id }}</router-link></td>
        <td>{{ task.employee }}</td>
        <td>{{ task.time }}</td>
        <td>{{ task.date }}</td>
        <td>{{ task.finished }}</td>
      </tr>
      </tbody>
    </table>
  </div>
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
h1{
  font-size: 70px;
  text-align: center;
  margin-top: 100px;
  color: darkgreen;
}
.dropdown-container {
  max-width: 1300px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px auto;
  background-color: #e5e5e5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 100px;
}

.dropdown-item h4 {
  margin-bottom: 20px;
  margin-right:140px;
}

.dropdown-item select {
  border: 2px solid #000;
  border-radius: 5px;
  width: 200px;
}

.dropdown-item input[type="text"] {
  width: 200px;
  border: 2px solid #000;
  border-radius: 5px;
}


button {
  background-color: #9d9d9d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 40px;
  margin-left: 300px;
}

button:hover {
  background-color: #5d5d5d;
}


.modal {
  position: absolute;
  z-index:1;
  left: 480px;
  top: 500px;
  width: 40%;
  height: 100%;
  overflow: auto;
}

.modal-content {
  background-color: #ee9090;
  border: 2px solid #640000;
  border-radius: 10px;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
}

.close-button {
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}





table {
  width: 70%;
  border-collapse: collapse;
  border: 2px solid black;
  margin-top: 100px;
  margin-left: 220px;
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


table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>