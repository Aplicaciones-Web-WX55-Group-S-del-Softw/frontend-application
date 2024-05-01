<script>
import axios from 'axios';
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "list-crop",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
  data() {
    return {
      crops: []
    }
  },
  created() {
    axios.get('server/db.json')
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
  <div class="flex-container">

    <div class="table-container">
      <DetailIdebar>
        <template v-slot:title>
          <h1>Inventario de cultivos</h1>
        </template>
      </DetailIdebar>
      <SearchBar smallText="Galpón" :options="['Galpón 1', 'Galpón 2', 'Galpón 3']" searchBarTop="100px" searchBarRight="550px"></SearchBar>

      <table>

        <thead>
        <tr>
          <th>ID</th>
          <th>Galpón</th>
          <th>Tipo</th>
          <th>Fecha de sembria</th>
          <th>Cantidad</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="crop in crops" :key="crop.id">
          <td>{{ crop.id }}</td>
          <td>{{ crop.id_shed }}</td>
          <td>{{ crop.type }}</td>
          <td>{{ crop.addition_date }}</td>
          <td>{{ crop.numbers }}</td>

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
  margin-top: 200px;
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