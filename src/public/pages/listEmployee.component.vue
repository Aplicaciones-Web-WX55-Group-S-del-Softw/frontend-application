<template>
  <toolbar-component></toolbar-component>
  <div class="container">
    <h1 class="title">Employee</h1>


    <div class="search-container">
      <div class="searchSection">
        <label for="employeeName">Name:</label>
        <input v-model="searchTerm.name" type="text" id="employeeName" placeholder="Name">
        <label for="employeeLastname">Lastname:</label>
        <input v-model="searchTerm.lastname" type="text" id="employeeLastname" placeholder="Lastname">
        <label for="employeeDNI">DNI:</label>
        <input v-model="searchTerm.dni" type="text" id="employeeDNI" placeholder="DNI">
        <button class="searchButton" @click="searchEmployee">Search</button>
      </div>
    </div>
    <h2 class="addnew"><router-link to="/employee/new" class="addnew-link">ADD NEW EMPLOYEE</router-link></h2>
  </div>

  <div class="table-container">
    <div class="background-color">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>DNI</th>
          <th>Labor</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="employee in filteredEmployees" :key="employee.id">
          <td>
            <router-link :to="`/editemployee/${employee.id}`">{{ employee.id }}</router-link>
          </td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.lastname }}</td>
          <td>{{ employee.dni }}</td>
          <td>{{ employee.labor }}</td>
        </tr>
        </tbody>
      </table>
      <button v-if="searchPerformed" class="back-button" @click="goBack">
        <span class="arrow-icon">&larr;</span>
      </button>
      <p v-if="filteredEmployees.length === 0" class="no-employees-message">
        <span class="material-icons">error</span> No employees found
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";
import axios from "axios";

export default {
  name: 'EmployeeComponent',
  components: { SaveButton, ToolbarComponent, FooterComponent },
  data() {
    return {
      employees: [],
      filteredEmployees: [],
      searchTerm: {
        name: '',
        lastname: '',
        dni: ''
      },
      isLoading: false,
      previousEmployees: [],
      searchPerformed: false
    };
  },
  created() {
    axios.get('../server/db.json')
        .then(response => {
          this.employees = response.data.employees;
          this.filteredEmployees = this.employees; // Añade esta línea
        })
        .catch(error => {
          console.log(error);
        });
  },
  methods: {
    async getEmployees() {
      try {
        const response = await fetch('db.json');
        const data = await response.json();
        this.employees = data.employees;
        this.filteredEmployees = this.employees;
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },
    searchEmployee() {
      this.previousEmployees = [...this.filteredEmployees];
      this.isLoading = true;
      this.searchPerformed = true;
      if (this.searchTerm.name || this.searchTerm.lastname || this.searchTerm.dni) {
        this.filteredEmployees = this.employees.filter(employee =>
            (this.searchTerm.name === '' || employee.name.toLowerCase().includes(this.searchTerm.name.toLowerCase())) &&
            (this.searchTerm.lastname === '' || employee.lastname.toLowerCase().includes(this.searchTerm.lastname.toLowerCase())) &&
            (this.searchTerm.dni === '' || employee.dni.includes(this.searchTerm.dni))
        );
      } else {
        this.filteredEmployees = this.employees;
      }
      this.isLoading = false;
    },
    clearSearch() {
      this.searchTerm = {
        name: '',
        lastname: '',
        dni: ''
      };
      this.searchPerformed = false;
    },
    goBack() {
      this.filteredEmployees = this.previousEmployees;
      this.searchPerformed = false;
    }
  }
};
</script>

<style scoped>
.title {
  color: green;
  font-size: 50px;
  text-align: center;
  margin-bottom: 1%;
  margin-top: 1%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 70px;

}

.search-container {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin-bottom: 50px;
}

.searchSection {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.searchSection label {
  display: block;
}

.searchSection input {
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.searchSection input:focus {
  border-color: #2e7d32;
}

.table-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.background-color {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  text-align: center;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  color: black;
}

.no-employees-message {
  color: red;
  margin-top: 20px;
  text-align: center;
}

.back-button {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #145214;
}

.arrow-icon {
  font-size: 20px;
}

h2.addnew {
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.addnew-link {
  color: darkgreen;
  text-decoration: none;
}

.addnew-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .container {
    margin-top: 20%;
  }

  .search-container, .table-container {
    width: 100%;
  }

  .searchSection {
    flex-direction: column;
    align-items: stretch;
  }

  .addnew {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 40px;
  }
}
</style>
