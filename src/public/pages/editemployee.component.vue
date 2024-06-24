<template>
  <toolbar-component></toolbar-component>

  <div class="container">
    <h1>Edit Employee</h1>

    <div class="form-container">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

      <div class="row">
        <div class="input-container">
          <label for="employeeName">Name:</label>
          <input v-model="employeeData.name" type="text" id="employeeName" placeholder="Name" readonly class="readonly-input">
        </div>

        <div class="input-container">
          <label for="phone">phone:</label>
          <input v-model="employeeData.phone"  type="text" id="phone" placeholder="phone" readonly class="readonly-input">
        </div>
      </div>

        <div class="input-container">
          <label for="farmId">farmId:</label>
          <input v-model="employeeData.farmId" type="text" id="farmId" placeholder="farmId" readonly class="readonly-input">
        </div>
      </div>


      <div class="row">
        <div class="input-container">
          <label for="username">Username:</label>
          <input v-model="employeeData.username" type="text" id="username" placeholder="username">
        </div>

        <div class="input-container">
          <label for="password">password:</label>
          <input v-model="employeeData.password" type="password" id="password" placeholder="Password">
        </div>
      </div>

      <div class="input-container labor-container">
        <label for="position">Labor:</label>
        <textarea v-model="employeeData.position" id="position" placeholder="position"></textarea>
      </div>

      <div class="button-container">
        <button @click="saveEmployee" class="save-button">Save</button>
        <router-link to="/list/employee" class="cancel-button">Cancel</router-link>
      </div>
    </div>
  <footer-component></footer-component>
</template>



<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ToolbarComponent from '../toolbar-component/toolbar-component.vue';
import FooterComponent from '../footer-component/footer-component.vue';
import axios from 'axios';

export default {
  name: "edit-employee",
  components: { FooterComponent, ToolbarComponent },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const employeeId = ref(route.params.id);

    const employeeData = ref({
      name: '',
      phone: '',
      farmId: '',
      username: '',
      password: '',
      position: ''
    });

    const errors = ref([]);

    const loadEmployeeData = async () => {
      try {
        const response = await axios.get(`http://localhost:5077/api/v1/employee/${employeeId.value}`);
        employeeData.value = response.data;
      } catch (error) {
        console.error('Error loading employee data:', error);
      }
    };

    const validateData = () => {
      errors.value = [];
      if (!employeeData.value.name) errors.value.push('Name is required.');
      if (!employeeData.value.phone) errors.value.push('phone is required.');
      if (!employeeData.value.farmId) errors.value.push('farmId is required.');
      if (!employeeData.value.username) errors.value.push('Username is required.');
      if (!employeeData.value.password) errors.value.push('Password is required.');
      if (!employeeData.value.position) errors.value.push('Labor is required.');
      return errors.value.length === 0;
    };

    const saveEmployee = async () => {
      if (validateData()) {
        try {
          await axios.put(`http://localhost:5077/api/v1/employee/${employeeId.value}`, employeeData.value);
          console.log('Employee updated successfully.');
          router.push('/list/employee');
        } catch (error) {
          console.error('Error updating employee:', error);
          errors.value.push('Error updating employee: ' + error.message);
        }
      }
    };

    onMounted(loadEmployeeData);

    return {
      employeeData,
      errors,
      saveEmployee
    };
  }
};
</script>




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
  background-color: #006400;
}

.container {
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 40px;
  color: darkgreen;
  margin-bottom: 20px;
}

.form-container {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.input-container {
  width: 48%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

.input-container label {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.input-container input, .input-container textarea {
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-container input:focus, .input-container textarea:focus {
  border-color: #2e7d32;
}

.readonly-input {
  background-color: #d3d3d3;
}
.labor-container {
  width: 100%;
}

.labor-container textarea {
  width: 100%;
  height: 150px;
  resize: none;
}

.button-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.save-button, .cancel-button {
  padding: 10px 20px;
  background-color: #E9F3AE;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #006400;
  color: white;
}

.cancel-button:hover {
  background-color: #FF0000;
  color: white;
}

.error-message {
  color: red;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .form-container {
    width: 90%;
  }
  .row {
    flex-direction: column;
  }
  .input-container {
    width: 100%;
  }
  .button-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
<script setup lang="ts">
</script>