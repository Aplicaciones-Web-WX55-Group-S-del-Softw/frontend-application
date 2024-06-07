<script>
import { DashboardApi } from "../../services/dashboard-analytics-api/dashboard-api.js";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

export default {
  components: { FooterComponent, ToolbarComponent },
  data() {
    return {
      selectedDate: '',
      selectedEmployee: '',
      tasks: [],
      employees: [],
      dates: [],
      showMessage: false,
      taskApi: new DashboardApi()
    };
  },
  methods: {
    fetchTasks(status) {
      this.taskApi.getTasks().then(response => {
        this.tasks = response.data.filter(task =>
            task.date === this.selectedDate &&
            task.employee === this.selectedEmployee &&
            task.finished === status
        );

        if (this.tasks.length === 0) {
          this.showMessage = true;
          setTimeout(() => {
            this.showMessage = false;
          }, 1500);
        }
      }).catch(error => {
        console.error(error);
      });
    },
    closeModal() {
      this.showMessage = false;
    }
  },
  created() {
    this.taskApi.getTasks().then(response => {
      const tasks = response.data;
      this.employees = [...new Set(tasks.map(task => task.employee))];
      this.dates = [...new Set(tasks.map(task => task.date))];
    }).catch(error => {
      console.error(error);
    });
  }
};
</script>

<template>
  <div>
    <toolbar-component></toolbar-component>
    <div class="body-task">
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

      <div class="button-container">
        <button @click="fetchTasks('Pending')">Show Pending Tasks</button>
        <button @click="fetchTasks('Finished')">Show Completed Tasks</button>
      </div>

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
          <td>
            <router-link :to="`/tasks/${task.id.substring(1)}/details`">{{ task.id }}</router-link>
          </td>
          <td>{{ task.employee }}</td>
          <td>{{ task.time }}</td>
          <td>{{ task.date }}</td>
          <td>{{ task.finished }}</td>
        </tr>
        </tbody>
      </table>
    </div>
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
  background-color: #004d00;
}

h1 {
  font-size: 70px;
  text-align: center;
  margin-top: 40px;
  color: darkgreen;
}

.dropdown-container {
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 40px auto;
  background-color: #47ad6c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
}

.dropdown-item h4 {
  margin-bottom: 20px;
}

.dropdown-item select {
  border: 2px solid #000;
  border-radius: 5px;
  width: 200px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

button {
  background-color: #8ebd8c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
}

button:hover {
  background-color: #5d5d5d;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #ee9090;
  border: 2px solid #640000;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 400px;
  text-align: center;
}

.close-button {
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

table {
  width: 70%;
  border-collapse: collapse;
  border: 2px solid black;
  margin: 40px auto;
}

th, td {
  border: 2px solid black;
  padding: 8px;
  text-align: center;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.body-task {
  margin-top: 10%;
  margin-bottom: 3%;
}

@media (max-width: 900px) {
  h1 {
    font-size: 50px;
    margin-top: 20px;
  }

  .body-task {
    margin-top: 20%;
  }

  button {
    padding: 5px 10px;
    font-size: 14px;
  }

  .dropdown-container {
    flex-direction: column;
    width: 90%;
    padding: 20px;
  }

  .dropdown-item {
    margin: 10px 0;
  }

  .button-container {
    flex-direction: column;
  }

  table {
    width: 90%;
    margin: 20px auto;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  h1 {
    font-size: 60px;
    margin-top: 30px;
  }

  .dropdown-container {
    flex-direction: column;
    padding: 20px;
  }

  .dropdown-item {
    margin: 20px 0;
  }

  button {
    font-size: 14px;
    padding: 5px 10px;
  }

  .button-container {
    flex-direction: column;
  }

  table {
    width: 80%;
    margin: 20px auto;
  }
}
</style>
