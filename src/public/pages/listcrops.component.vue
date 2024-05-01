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
          <h1 class="title-color">Inventario de cultivos</h1>
        </template>
      </DetailIdebar>


      <div class="background-color">
        <SearchBar smallText="Galpón" :options="['Galpón 1', 'Galpón 2', 'Galpón 3']" searchBarTop="50px" searchBarRight="275px"></SearchBar>
        <div class="table-wrapper">
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
      </div>

    </div>
    <router-link to = "/register-details">
      <SaveButton/>
    </router-link>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.background-color {
  background-color: #F2F0F0;
  padding: 20px;
  margin: -340px;
  transform: translate(90px, 520px);
  width: 700px;
  height: 700px;
}

.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 20px;
}

.table-wrapper {
  width: 340px; /* Establece el ancho de la tabla */
  height: 800px; /* Establece la altura de la tabla */
  overflow: auto; /* Agrega barras de desplazamiento si es necesario */
  transform: translate(160px, 120px);
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
  color: #44604D;
}
</style>