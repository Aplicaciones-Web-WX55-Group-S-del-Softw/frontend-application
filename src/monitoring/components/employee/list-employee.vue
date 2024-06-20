<script>
import { ref, onMounted } from 'vue';
import EmployeeService from "../../services/employee/employee.js";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/footer-component/footer-component.vue";

export default {
  components: {
    ToolbarComponent,
    FooterComponent
  },
  data() {
    return {
      employees: [
        { id: '1', name: 'John Doe', email: 'john.doe@example.com', password: 'Farm Manager', phone: '123-456-7890', position:  'Farm Manager'},
        { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', password: 'Animal Nutritionist', phone: '234-567-8901', position: 'Animal Nutritionist' },
        { id: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com', password: 'Veterinary Nurse', phone: '345-678-9012' ,position: 'Animal Nutritionist'},
        { id: '4', name: 'Alice Williams', email: 'alice.williams@example.com', password: 'Agricultural Engineer', phone: '456-789-0123',position: 'Animal Nutritionist' },
        { id: '5', name: 'Charlie Brown', email: 'charlie.brown@example.com', password: 'Field Worker', phone: '567-890-1234',position: 'Animal Nutritionist' },
        { id: '6', name: 'Emily Davis', email: 'emily.davis@example.com', password: 'Tractor Operator', phone: '678-901-2345',position: 'Animal Nutritionist' },
        { id: '7', name: 'Frank Miller', email: 'frank.miller@example.com', password: 'Harvest Supervisor', phone: '789-012-3456',position: 'Animal Nutritionist' },
        { id: '8', name: 'Grace Lee', email: 'grace.lee@example.com', password: 'Quality Assurance', phone: '890-123-4567',position: 'Animal Nutritionist' }
      ],
      filteredEmployees: [],
      searchTerm: '',
      isLoading: false,
      previousEmployees: [],
      searchPerformed: false
    };
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    getEmployees() {
      this.employees = [...this.employees, ...EmployeeService.getEmployees()];
      this.filteredEmployees = this.employees;
    },
    searchEmployee() {
      this.previousEmployees = [...this.filteredEmployees];
      this.isLoading = true;
      this.searchPerformed = true;
      setTimeout(() => {
        if (this.searchTerm) {
          this.filteredEmployees = this.employees.filter(employee =>
              employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        } else {
          this.filteredEmployees = this.employees;
        }
        this.isLoading = false;
      }, 3000);
    },
    clearSearch() {
      this.searchTerm = '';
      this.searchPerformed = false;
    },
    goBack() {
      this.filteredEmployees = this.previousEmployees;
      this.searchPerformed = false;
    }
  }
};
</script>
<template>
  <toolbar-component/>
  <div class="header">
    <h2 class="title-employees">Employees</h2>
    <div class="actions">
      <div class="search-field">
        <i class="material-icons">search</i>
        <input v-model="searchTerm" placeholder="Search Employees" @keyup.enter="searchEmployee">
        <button class="clear-button" @click="clearSearch">
          <i class="material-icons">close</i>
        </button>
      </div>
      <button class="addBtn" @click="$router.push('/add/employees')">
  <span class="IconContainer">
    <i class="material-icons">group</i>
  </span>
        <p class="text">Add Employee</p>
      </button>
      <p v-if="filteredEmployees.length > 0" class="employee-count">
        <i class="material-icons count-icon">group</i>
        Total Employees: {{filteredEmployees.length}}
      </p>
    </div>
  </div>
  <div v-if="isLoading" class="dot-wave">
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
  </div>
  <div v-if="!isLoading" class="employee-list">
    <div v-for="employee in filteredEmployees" :key="employee.id" class="employee-card">
      <div class="employee-card-header">
        <h3 class="employee-card-title">{{employee.name}}</h3>
        <p class="employee-card-subtitle">{{employee.position}}</p>
      </div>
      <div class="employee-card-content">
        <p>ID: {{employee.id}}</p>
        <p>Email: {{employee.email}}</p>
        <p>Password: {{employee.password}}</p>
      </div>
    </div>
    <button v-if="searchPerformed" class="back-button" @click="goBack">
      <i class="material-icons">arrow_back</i>
    </button>
    <p v-if="filteredEmployees.length === 0" class="no-employees-message">
      <i class="material-icons">error</i> No employees found
    </p>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.header h2{
  font-size: 4em;
  font-weight: 600;
}

.employee-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.employee-card {
  flex: 0 0 calc(25% - 40px);
  width: 400px;
  height: 200px;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 5px 3px 1px -2px rgba(206, 206, 206, 0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}

.no-employees-message {
  text-align: center;
  width: 100%;
}



.employee-card-header {
  margin-bottom: 1px;
}

.employee-card-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.employee-card-subtitle {
  font-size: 16px;
  color: gray;
  margin: 0;
}



/* Loader */
.dot-wave {
  --uib-size: 40px;
  --uib-speed: 0.6s;
  --uib-color: #0d0909;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: var(--uib-size);
  height: 15%;
  padding-top: calc(var(--uib-size) * 0.34);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
}

.dot-wave__dot {
  flex-shrink: 0;
  width: calc(var(--uib-size) * 0.17);
  height: calc(var(--uib-size) * 0.17);
  border-radius: 50%;
  background-color: var(--uib-color);
  will-change: transform;
}

.dot-wave__dot:nth-child(1) {
  animation: jump824 var(--uib-speed) ease-in-out
  calc(var(--uib-speed) * -0.45) infinite;
}

.dot-wave__dot:nth-child(2) {
  animation: jump824 var(--uib-speed) ease-in-out
  calc(var(--uib-speed) * -0.3) infinite;
}

.dot-wave__dot:nth-child(3) {
  animation: jump824 var(--uib-speed) ease-in-out
  calc(var(--uib-speed) * -0.15) infinite;
}

.dot-wave__dot:nth-child(4) {
  animation: jump824 var(--uib-speed) ease-in-out infinite;
}

@keyframes jump824 {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-200%);
  }
}
.footer-spacer {
  height: 64.4%;
}


.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Search button */
.search-field {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 5px;
  margin-right: 70px;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
}

.search-field:hover {
  background-color: #e0e0e0;
}

.search-field input {
  border: none;
  border-radius: 12px;
  flex-grow: 1;
  padding-right: 30px;
  padding-left: 10px;
  background-color: transparent;
}

.search-field input::placeholder {
  color: #888;
}

.search-field input:focus {
  outline: none;
}
.clear-button {
  position: absolute;
  right: 0;
  top: 2px;
  border: none;
  background: none;
  cursor: pointer;
}
.clear-button i {
  font-size: 22px;
}
.search-field button {
  background: none;
  border-radius: 12px;
  cursor: pointer;

}

.search-field button:hover {
  color: rgb(39, 143, 74);
}

.search-field mat-icon {
  color: rgba(14, 224, 4, 0.59);
}

.no-employees-message {
  font-size: 2em;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left:45%;
  margin-top: 8%;
}

.no-employees-message mat-icon {
  margin-right: 10px;
}

.back-button {
  border:none;
  background: none;
  position: absolute;
  left: 10px;
  top:250px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

}

.back-button:hover {
  transform: scale(1.2);
}

.title-employees{
  font-size: 2em;
  font-weight: bold;
  margin-left: 40px;
  margin-top: 10px;

}

.addBtn {
  width: 150px;
  height: 35px;
  bottom:1px;
  margin-right:50px;
  border-radius: 12px;
  border: none;
  background-color: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: .5s;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
}

.IconContainer {
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .5s;
}

.text {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  z-index: 1;
  transition-duration: .5s;
  font-size: 1.05em;
  margin-top:15px;
  font-weight: 600;
}

.addBtn:hover .IconContainer {
  transform: translateX(58px);
  border-radius: 40px;
  transition-duration: .5s;
}

.addBtn:hover .text {
  transform: translate(10px,0px);
  transition-duration: .5s;
}

.addBtn:active {
  transform: scale(0.95);
  transition-duration: .5s;
}


.employee-count {
  display: flex;
  align-items: center;
  font-size: 1.4em;
  color: #000000;
  margin-bottom: 20px;
  margin-right: 100px;
  font-weight: 500;
}

.count-icon {
  margin-right: 10px;
  color: #000000;
}
@media screen and (max-width: 1200px) {
  mat-card {
    flex: 0 0 calc(50% - 40px);
  }
  .employee-list {
    justify-content: center;
    grid-template-columns: 1fr;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .actions {
    flex-direction: column;
    align-items: center;
  }

  .actions > div {
    margin-bottom: 20px;
  }

  .addBtn {
    width: 50%;
    left:30px;
  }

  .search-field {
    margin-top:10%;
    width: 100%;
  }
  .employee-count {
    margin-top:10%;
    margin-left: 100px;
  }
  .footer-spacer {
    height: 37.3%;
  }
  .back-button {
    border:none;
    background: none;
    position: absolute;
    left: 10px;
    top:470px;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

  }

  .back-button:hover {
    transform: scale(1.2);
  }
  .no-employees-message {
    font-size: 2em;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left:35%;
    margin-top: 30%;
    height: 16.7vh;
  }

  .no-employees-message mat-icon {
    margin-right: 10px;
  }

}

@media screen and (max-width: 768px) {
  mat-card {
    width:10%;
  }
  .employee-list {
    grid-template-columns: 1fr;
  }


  .actions {
    flex-direction: column;
    align-items: center;
  }

  .actions > div {
    margin-bottom: 20px;
  }

  .addBtn {
    width: 50%;
    left:30px;
  }

  .search-field {
    margin-top:10%;
    width: 100%;
  }
  .employee-count {
    margin-top:10%;
    margin-left: 100px;
  }
  .footer-spacer {
    height: 60.3%;
  }

  .back-button {
    border:none;
    background: none;
    position: absolute;
    left: 10px;
    top:470px;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

  }

  .back-button:hover {
    transform: scale(1.2);
  }
  .no-employees-message {
    font-size: 2em;
    margin-left:30%;
    margin-top: 8%;

  }

  .no-employees-message mat-icon {
    margin-right: 10px;
  }
  .dot-wave {
    top: 30%;
    left: 50%;
  }
}

</style>