<script>
import axios from 'axios';
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "list-expense",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
  data() {
    return {
      expenses: []
    }
  },
  created() {
    axios.get('server/db.json')
        .then(response => {
          this.expenses = response.data.expenses;
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
          <h1 class="title-color">Registro de egresos</h1>
        </template>
      </DetailIdebar>
      <div class="background-color">
        <h1 class="table-title">Añadir Egresos</h1>
        <div class="table-wrapper">
      <table>

        <thead>
        <tr>
          <th>ID</th>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="expense in expenses" :key="expense.id">
          <td>{{ expense.id }}</td>
          <td>{{ expense.description }}</td>
          <td>{{ expense.numbers }}</td>
          <td>{{ expense.price }}</td>

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
  justify-content: center;
  align-items: center;
}
.table-wrapper {
  width: 340px; /* Establece el ancho de la tabla */
  height: 800px; /* Establece la altura de la tabla */
  overflow: auto; /* Agrega barras de desplazamiento si es necesario */
  transform: translate(160px, -200px);
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
}

table {
  margin-top: 250px;
  margin-right:-268px;
  border-collapse: collapse;
  width: 20%;
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

.table-title{
  color: #44604D;
  font-size: 1.6em;
}
</style>