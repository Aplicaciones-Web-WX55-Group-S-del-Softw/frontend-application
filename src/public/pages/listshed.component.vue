<script>
import axios from 'axios';
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "list-shed",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
  data() {
    return {
      sheds: []
    }
  },
  created() {
    axios.get('server/db.json')
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
  <div class="flex-container">

    <div class="table-container">
      <DetailIdebar>
        <template v-slot:title>
          <h1>Lista de galpones</h1>
        </template>
      </DetailIdebar>

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