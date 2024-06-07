<script>
import {ref, computed, onMounted} from 'vue';
import tasksService from "../../services/tasks/tasks.js";
import profileService from "../../../register/services/profile/profile.js";
import ToolbarComponent  from "../../../public/toolbar-component/toolbar-component.vue";
export default {
  name: 'TasksTable',
  components: { ToolbarComponent },
  setup() {
    const tasks = ref(tasksService.getTasks());
    const currentProfile = ref({});
    const expandedRow = ref(null);
    const employeeName = ref('');
    const taskState = ref('');
    const employeeFilter = ref('');
    const sortOrder = ref(null); // 'asc', 'desc', or null

    onMounted(async () => {
      const profiles =  profileService.getProfiles();
      currentProfile.value = profiles[profiles.length - 1];
    });

    const uniqueEmployees = computed(() => {
      return [...new Set(tasks.value.map(task => task.employee))];
    });

    const filteredTasks = computed(() => {
      let result = tasks.value.filter(task => {
        return (!employeeName.value || task.employee.includes(employeeName.value)) &&
            (!taskState.value || task.state === taskState.value) &&
            (!employeeFilter.value || task.employee === employeeFilter.value);
      });

      if (sortOrder.value) {
        const direction = sortOrder.value === 'asc' ? 1 : -1;
        result.sort((a, b) => direction * (new Date(a.date) - new Date(b.date)));
      }
      return result;
    });

    const finishTask = (taskId) => {
      const task = tasks.value.find(task => task.id === taskId);
      if (task) {
        task.state = 'finished';
        expandedRow.value = null;
      }
    };
    const sortTasksByDate = (order) => {
      sortOrder.value = order;
    };
    const toggleRow = (index) => {
      if (expandedRow.value === index) {
        expandedRow.value = null;
      } else {
        expandedRow.value = index;
      }
    };


    return {
      currentProfile,
      tasks,
      employeeName,
      taskState,
      employeeFilter,
      uniqueEmployees,
      filteredTasks,
      finishTask,
      expandedRow,
      toggleRow,
      sortTasksByDate
    };
  },
};
</script>

<template>
  <toolbar-component/>
  <div v-if="currentProfile && currentProfile.role==='Farmer'">
  <div class="task-create">
    <h1>TASK</h1>
    <div class="button-container">
      <button @click="$router.push('/tasks/new')">Create Task</button>
    </div>
    <div class="filter-container">
      <div class="filter-item">
        <i class="fas fa-filter"></i>
        <select v-model="employeeFilter">
          <option value="">All</option>
          <option v-for="employee in uniqueEmployees" :key="employee">{{ employee }}</option>
        </select>
      </div>
      <div class="filter-item">
        <i class="fas fa-filter"></i>
        <select v-model="taskState" class="select">
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="finished">Finished</option>
        </select>
      </div>
    </div>


    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>Employee</th>
          <th>Time to perform</th>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="task in filteredTasks" :key="task.id">
          <td>{{ task.employee }}</td>
          <td>{{ task.time }}</td>
          <td>{{ task.date }}</td>
          <td>{{ task.description }}</td>
          <td :class="{ 'task-pending': task.state === 'pending', 'task-finished': task.state === 'finished' }">{{ task.state }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="space">
    </div>
    </div>
  </div>

  <div v-if="currentProfile && currentProfile.role==='Farm Worker'">
  <div class="table-container-worker">
    <h1>TASK</h1>
    <div class="filter-container">
      <div class="filter-item">
        <i class="fas fa-filter"></i>
        <select v-model="taskState" class="select">
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="finished">Finished</option>
        </select>
      </div>
      <div class="filter-item">
        <i class="fas fa-filter"></i>
        <select @change="sortTasksByDate($event.target.value)">
          <option value="">Sort Tasks By Date</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
    <table>
      <thead>
      <tr>
        <th>Employee</th>
        <th>Time to perform</th>
        <th>Date</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(task, index) in filteredTasks" :key="task.id">
        <tr>
          <td @click="toggleRow(index)">{{ task.employee }}</td>
          <td @click="toggleRow(index)">{{ task.time }}</td>
          <td @click="toggleRow(index)">{{ task.date }}</td>
          <td @click="toggleRow(index)">{{ task.description }}</td>
          <td :class="{ 'task-pending': task.state === 'pending', 'task-finished': task.state === 'finished' }" @click="toggleRow(index)">
            {{ task.state }}
            <i class="material-icons" v-if="expandedRow === index">arrow_drop_up</i>
            <i class="material-icons" v-else>arrow_drop_down</i>
          </td>
        </tr>
        <transition name="expand">
          <tr v-if="expandedRow === index">
            <td colspan="5"><p class="task-question">Do you want to finish the task?</p>
              <button class="finish-task-button" @click="finishTask(task.id)">Finish task</button>
            </td>
          </tr>
        </transition>
      </template>
      </tbody>
    </table>
    <div class="space">
    </div>
  </div>
  </div>


</template>



<style scoped>
.table-container table{
  width: 60%;
  translate: 35% 5%;

  overflow-x: auto;
  border-bottom: 2px solid #818080;
  border-left:  2px solid #818080;
}

.table-container table th
{
  text-align: center;
  border-right: 2px solid #818080;
  border-bottom: 1px solid #818080;
  padding: 15px 0;
  border-top: 2px solid #818080;
}

.table-container table td {
  text-align: center;
  border-right: 2px solid #818080;
  border-bottom: 1px solid #d5d5d5;
  padding: 20px 0;
}

.table-container-worker table{
  width: 50%;
  translate: 50% 5%;

  overflow-x: auto;
  border-bottom: 2px solid #818080;
  border-left:  2px solid #818080;
}

.table-container-worker table th
{
  text-align: center;
  border-right: 2px solid #818080;
  border-bottom: 1px solid #818080;
  padding: 15px 0;
  border-top: 2px solid #818080;
}

.table-container-worker table td {
  text-align: center;
  border-right: 2px solid #818080;
  border-bottom: 1px solid #d5d5d5;
  padding: 20px 0;
}

h1{
  color: darkgreen;
  font-size: 7em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 100px;
  margin-right:20px;
}

th{
  font-weight: bold;
  font-size: 18px;
}
tr {
  font-weight: bold;
  font-size: 18px;

}

tr:hover {
  background-color: #D3D3D3;
}

.button-container{
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

}

.button-container button {
  background-color: #085621;
  font-weight:bold;
  color: white;
  padding: 28px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.button-container button:hover {
  background-color: #1f753f;
  color: white;
  transform: scale(1.1);
}
.space{
  padding: 10%;
}

.filter-container {
  display: flex;
  justify-content: center  ;
  gap: 150px;
  padding: 15px 0;
}

.filter-container option {
 font-size:17px;
  font-weight: bold;
}
.filter-item {
  display: flex;
  align-items: center;
  border: 1px solid #003f17;
  border-radius: 4px;

}

.filter-item i {
  padding: 0 10px;
}

.filter-item select {
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight:bold;
}
.filter-item select:focus {
  outline: none;
}

.filter-container button:hover {
  background-color: #25c556;
}
.task-pending {
  color: red;
}

.task-finished {
  color: green;
}



.expand-enter-active, .expand-leave-active {
  transition: all .5s ease;
}
.expand-enter, .expand-leave-to {
  height: 0;
  opacity: 0;
}
.expand-enter-to {
  transform: scaleY(1);
}

.finish-task-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.finish-task-button:hover {
  background-color: #45a049;
}

.task-pending {
  color: red;
}

.task-finished {
  color: green;
}
.material-icons{
  font-size: 1.5em;
  color: #333;
  position: relative;
  top: 7px; /* Ajusta este valor según cuánto quieras mover los íconos hacia abajo */
}
.space {
  height: 20px;
}
.task-question {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
}







@media screen and (max-width:768px){
  .button-container {
    flex-direction: column;
    width: 30%;
    margin: auto;
    gap: 30px;
  }
  .filter-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    margin: auto;
  }
  .task-create{
    width: 98%;
    translate: 1% 5%;
    margin:10px;
  }
  .table-container {
    overflow-x: auto;
    margin-top: 70px;
  }
  .description-info mat-panel-description {
    word-spacing:50px;
    margin:10px;
  }
}


@media screen and (max-width:1200px){
  .button-container {
    flex-direction: column;
    width: 30%;
    margin: auto;
    gap: 30px;
  }
  .filter-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    margin: auto;
  }
  .task-create{
    width: 98%;
    translate: 1% 5%;
    margin:10px;
  }
  .table-container {
    overflow-x: auto;
  }
  .description-info mat-panel-description {
    word-spacing:50px;
    margin:10px;
  }
}

</style>