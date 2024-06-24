<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import axios from 'axios';
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/footer-component/footer-component.vue";

export default {
  name: "create-profile",
  components: { FooterComponent, ToolbarComponent },
  setup() {
    const router = useRouter();

    const profileData = ref({
      name: '',
      email: '',
      direction: '',
      documentType: '',
      documentNumber: ''
    });

    const errors = ref([]);

    const validateData = () => {
      errors.value = [];
      if (!profileData.value.name) errors.value.push('Name is required.');
      if (!profileData.value.email) errors.value.push('Email is required.');
      if (!profileData.value.direction) errors.value.push('Direction is required.');
      if (!profileData.value.documentType) errors.value.push('Document Type is required.');
      if (!profileData.value.documentNumber) errors.value.push('Document Number is required.');
      return errors.value.length === 0;
    };

    const saveprofile = async () => {
      if (validateData()) {
        try {
          await axios.post('http://localhost:5077/api/v1/profile', profileData.value);
          console.log('Profile added successfully.');
          router.push('/role/profile');
        } catch (error) {
          console.error('Error adding profile:', error);
          errors.value.push('Error adding profile: ' + error.message);
        }
      }
    };

    return {
      profileData,
      errors,
      saveprofile
    };
  }
};
</script>


<template>
  <toolbar-component></toolbar-component>

  <div class="container">
    <h1>Add profile</h1>

    <div class="form-container">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

      <div class="input-container">
        <label for="profileName">Name:</label>
        <input v-model="profileData.name" type="text" id="profileName" placeholder="Name">
      </div>

      <div class="input-container">
        <label for="profileEmail">Email:</label>
        <input v-model="profileData.email" type="email" id="profileEmail" placeholder="Email">
      </div>

      <div class="input-container">
        <label for="profileDirection">Direction:</label>
        <input v-model="profileData.direction" type="text" id="profileDirection" placeholder="Direction">
      </div>

      <div class="input-container">
        <label for="profileDocumentType">Document Type:</label>
        <input v-model="profileData.documentType" type="text" id="profileDocumentType" placeholder="Document Type">
      </div>

      <div class="input-container">
        <label for="profileDocumentNumber">Document Number:</label>
        <input v-model="profileData.documentNumber" type="text" id="profileDocumentNumber" placeholder="Document Number">
      </div>

      <div class="button-container">
        <button @click="saveprofile" class="save-button">Save</button>
        <router-link to="/role/profile" class="cancel-button">Cancel</router-link>
      </div>
    </div>
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

.input-container {
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

.input-container label {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.input-container input {
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-container input:focus {
  border-color: #2e7d32;
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
  .input-container {
    width: 100%;
  }
  .button-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
