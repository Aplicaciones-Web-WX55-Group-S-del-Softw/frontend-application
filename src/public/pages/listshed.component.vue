<script>
import axios from 'axios';
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../footer-component/footer-component.vue";

export default {
  name: "list-shed",
  components: { FooterComponent, ToolbarComponent, SaveButton },
  data() {
    return {
      sheds: []
    };
  },
  created() {
    this.fetchSheds();
  },
  methods: {
    async fetchSheds() {
      try {
        const response = await axios.get('http://localhost:5077/api/v1/shed/all');
        console.log('Datos recibidos:', response.data); // Verificar datos recibidos
        this.sheds = response.data; // Asignar datos correctamente
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    }
  }
};
</script>


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
      <div class="table-container">
        <div class="background-color">
          <h1 class="title-color">SHED LIST</h1>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Types</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="shed in sheds" :key="shed.id">
              <td>{{ shed.id }}</td>
              <td>{{ shed.location }}</td>
              <td>{{ shed.type }}</td>
            </tr>
            </tbody>
          </table>

          <router-link to="/home" class="save-button-link">
            <button class="button">Save</button>
          </router-link>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<style scoped>
body{
  min-height:48.1vh;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  margin-top:150px;
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

.table-container {
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

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
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
  text-align: left;
  color: black;
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

  .table-container {
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

  .table-container {
    flex: 1;
    max-width: 500px;
  }
}
</style>