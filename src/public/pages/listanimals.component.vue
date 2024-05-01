<script>
import axios from 'axios';
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "list-animal",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
  data() {
    return {
      animals: []
    }
  },
  created() {
    axios.get('server/db.json')
        .then(response => {
          this.animals = response.data.animals;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>

<template>
  <div class="flex-container">

    <div class="table-container">
      <DetailIdebar>
        <template v-slot:title>
          <h1>Inventario de Animales</h1>
        </template>
      </DetailIdebar>

      <SearchBar smallText="Galpón" :options="['Galpón 1', 'Galpón 2', 'Galpón 3']" searchBarTop="250px" searchBarRight="550px"></SearchBar>

      <table>

        <thead>
        <tr>
          <th>ID</th>
          <th>Edad</th>
          <th>Locacion</th>
          <th>Estado de Salud</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="animal in animals" :key="animal.id">
          <td>{{ animal.id }}</td>
          <td>{{ animal.age }}</td>
          <td>{{ animal.location }}</td>
          <td>{{ animal.health_state }}</td>

        </tr>

        </tbody>

      </table>

    </div>
    <router-link to = "/register-details">
      <SaveButton/>
    </router-link>
  </div>

</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

table {
  margin-top: 350px;
  margin-right:-268px;
  border-collapse: collapse;
  width: 20%;
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
.background-color {
  background-color: #F2F0F0;
  height: 700px;
  width: 700px;
  box-sizing: border-box;
  margin: -340px;
  transform: translate(90px, 105px);
}
</style>