<script>
import DetailIdebar from "../components/detail-idebar.vue";
import axios from 'axios';
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "add-animals",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
  data() {
    return {
      aliments: []
    }
  },
  created() {
    axios.get('server/db.json')
        .then(response => {
          this.aliments = response.data.aliments;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>

<template>

  <div class="flex-container">

    <DetailIdebar>
      <template v-slot:title>
        <h1>Registro de Alimentación</h1>

      </template>
    </DetailIdebar>
    <div class="background-color">
    </div>
    <SearchBar smallText="Galpón" :options="['Galpón 1', 'Galpón 2', 'Galpón 3']" searchBarTop="100px" searchBarRight="550px"></SearchBar>
    <SearchBarNOOPTIONSComponent smallText="Cantidad de Alimento" searchBarTop="400px" searchBarRight="550px"></SearchBarNOOPTIONSComponent>

    <SearchBarNOOPTIONSComponent smallText="Fecha" searchBarTop="250px" searchBarRight="700px"></SearchBarNOOPTIONSComponent>
    <SearchBarNOOPTIONSComponent smallText="Tipo de Alimento" searchBarTop="250px" searchBarRight="400px"></SearchBarNOOPTIONSComponent>

  </div>
  <router-link to = "/register-details">
    <SaveButton/>
  </router-link>
  <table>
    <thead>
    <tr>
      <th>id</th>
      <th>id_shed</th>
      <th>date</th>
      <th>type</th>
      <th>quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="aliment in aliments" :key="aliment.id">
      <td>{{ aliment.id }}</td>
      <td>{{ aliment.id_shed }}</td>
      <td>{{ aliment.date }}</td>
      <td>{{ aliment.type }}</td>
      <td>{{ aliment.quantity }}</td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>
table {
  margin-top: 10px;
  margin-left: 50%; /* Ajusta este valor según tus necesidades */
  border-collapse: collapse;
  width: 20%;
}
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