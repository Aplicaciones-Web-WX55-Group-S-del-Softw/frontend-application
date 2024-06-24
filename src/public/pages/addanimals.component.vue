<template>
  <div>
    <toolbar-component></toolbar-component>
    <div class="main-container">
      <div class="sidebar">
        <h3 class="header-style">Shed</h3>
        <router-link to="/shed/new" class="link-style"><h4>Add Sheds</h4></router-link>
        <router-link to="/list/sheds" class="link-style"><h4>List Sheds</h4></router-link>
        <h3 class="header-style">Animals</h3>
        <router-link to="/animal/new" class="link-style"><h4>Add Animals</h4></router-link>
        <router-link to="/list/animals" class="link-style"><h4>Animal Inventory</h4></router-link>
        <router-link to="/register/feeds" class="link-style"><h4>Feeding Registry</h4></router-link>
        <h3 class="header-style">Crops</h3>
        <router-link to="/register/crops" class="link-style"><h4>Crop Registry</h4></router-link>
        <router-link to="/list/crops" class="link-style"><h4>Crop Inventory</h4></router-link>
      </div>
      <div class="form-container">
        <div class="background-color">
          <h1 class="title-color">Add Animals</h1>
          <div class="inputs-container">
            <label for="shed">Name:</label>
            <input type="text" id="name" name="name" v-model="animal.name"><br>
            <label for="shedId">Shed:</label>
            <input type="text" id="shedId" name="shedId" v-model="animal.shedId"><br>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" v-model="animal.age"><br>
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" v-model="animal.location"><br>
            <label for="healthState">Health Status:</label>
            <input id="healthState" name="healthState" v-model="animal.healthState">

            <button class="button" @click="saveAnimal">Save</button>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import axios from 'axios';
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../footer-component/footer-component.vue";

export default {
  name: "register-details",
  components: { FooterComponent, ToolbarComponent, SaveButton },
  data() {
    return {
      animal: {
        shed: '',
        age: null,
        location: '',
        healthStatus: 'saludable'
      }
    }
  },
  methods: {
    async saveAnimal() {
      try {
        const response = await axios.post('http://localhost:5077/api/v1/animal', this.animal);
        console.log(response.data);
        this.$router.push('/home');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
body {
  min-height: 48.1vh;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  margin-top: 150px;
  flex-wrap: nowrap;
}

.sidebar {
  flex: 0 0 200px;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}

.header-style {
  color: darkgreen;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.link-style {
  color: black;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
}

.form-container {
  flex: 1;
  max-width: 700px;
  display: flex;
  justify-content: center;
}

.background-color {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.inputs-container {
  text-align: left;
  margin: auto;
  width: 80%;
}

.inputs-container label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.inputs-container input,
.inputs-container select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.title-color {
  color: darkgreen;
  text-align: center;
  margin-bottom: 20px;
}

.back-button {
  display: block;
  margin: 20px auto;
  text-align: center;
}

.button {
  background-color: darkgreen;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button-link {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .main-container {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .sidebar {
    flex: 0 0 150px;
    margin-bottom: 0;
  }

  .form-container {
    flex: 1;
    max-width: 600px;
  }
}

@media screen and (max-width: 768px) {
  .main-container {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .sidebar {
    flex: 0 0 120px;
    margin-bottom: 0;
  }

  .form-container {
    flex: 1;
    max-width: 500px;
  }
}
</style>
