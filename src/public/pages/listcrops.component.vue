<script>
import axios from 'axios';
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "list-crop",
  components: { ToolbarComponent, FooterComponent, SaveButton },
  data() {
    return {
      crops: []
    }
  },
  created() {
    axios.get('../server/db.json')
        .then(response => {
          this.crops = response.data.crops;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>

<template>
  <div>
    <toolbar-component></toolbar-component>
    <router-link to="/home" class="back-button">BACK</router-link>

    <div class="main-container">
      <div class="sidebar">
        <h3 class="header-style">Shed</h3>
        <router-link to="/shed/new" class="link-style">
          <h4>Add Sheds</h4>
        </router-link>
        <router-link to="/list/sheds" class="link-style">
          <h4>List Sheds</h4>
        </router-link>
        <h3 class="header-style">Animals</h3>
        <router-link to="/animal/new" class="link-style">
          <h4>Add Animals</h4>
        </router-link>
        <router-link to="/list/animals" class="link-style">
          <h4>Animal Inventory</h4>
        </router-link>
        <router-link to="/registerfeeds" class="link-style">
          <h4>Feeding Registry</h4>
        </router-link>
        <h3 class="header-style">Crops</h3>
        <router-link to="/register/crops" class="link-style">
          <h4>Crop Registry</h4>
        </router-link>
        <router-link to="/list/crops" class="link-style">
          <h4>Crop Inventory</h4>
        </router-link>
      </div>
      <div class="content-container">
        <div class="background-color">
          <h1 class="title-color">Lista de cultivos</h1>
          <div class="inputs-container">
            <label for="shed">Galpón:</label>
            <input type="text" id="shed" name="shed"><br>
          </div>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Fecha de siembra</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="crop in crops" :key="crop.id">
              <td>{{ crop.id }}</td>
              <td>{{ crop.type }}</td>
              <td>{{ crop.planting_date }}</td>
            </tr>
            </tbody>
          </table>
          <router-link to="/home">
            <SaveButton/>
          </router-link>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
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
  color: darkgreen !important;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.link-style {
  color: black;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
}

.content-container {
  flex: 1;
  max-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.background-color {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
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

.inputs-container input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
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
  color: darkgreen !important;
  text-align: center;
  margin-bottom: 20px;
}

.back-button {
  display: block;
  margin: 20px auto;
  text-align: center;
}



@media screen and (max-width: 768px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }

  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }

  .content-container {
    width: 100%;
  }

  .background-color {
    width: 100%;
  }

  .title-color {
    text-align: center;
    margin-bottom: 10px;
  }

  table {
    width: 100%;
  }
}
</style>
