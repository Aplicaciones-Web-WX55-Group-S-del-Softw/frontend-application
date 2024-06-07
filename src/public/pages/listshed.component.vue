<script>
import axios from 'axios';
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "list-shed",
  components: {FooterComponent, ToolbarComponent, SaveButton},
  data() {
    return {
      sheds: []
    }
  },
  created() {
    axios.get('../server/db.json')
        .then(response => {
          this.sheds = response.data.sheds;
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
      <div class="table-container">
        <div class="background-color">
          <h1 class="title-color">SHED LIST</h1>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Species</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="shed in sheds" :key="shed.id">
              <td>{{ shed.id }}</td>
              <td>{{ shed.type }}</td>
              <td>{{ shed.species }}</td>
            </tr>
            </tbody>
          </table>


        </div>
      </div>
    </div>
    <div class="space">
      <footer-component></footer-component>

    </div>
  </div>
</template>

<style scoped>

.space{
  margin-top: 20%;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  margin-top:5%;

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
  max-width: 740px;
  display: flex;
  justify-content: center;
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

@media screen and (max-width: 1024px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }

  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }

  .table-container {
    width: 100%;
  }

  .background-color {
    width: 100%;
  }
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

  .table-container {
    width: 100%;
  }

  .background-color {
    width: 100%;
  }

  table {
    width: 100%;
  }

  th, td {
    padding: 8px;
  }

  .title-color {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
