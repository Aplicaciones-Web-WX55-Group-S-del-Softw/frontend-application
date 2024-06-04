<script>
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "list-employee",
  components: { FooterComponent, ToolbarComponent, SaveButton }
}
</script>
<template>
  <div class="container">
    <toolbar-component></toolbar-component>
    <div class="searchSection">
      <label for="shed">Name:</label>
      <input type="text" placeholder="Name">
      <label for="shed">Lastname:</label>
      <input type="text" placeholder="Lastname">
      <label for="shed">DNI:</label>
      <input type="text" placeholder="DNI">
      <button class="searchButton">Search</button>
      <h2 class="addnew"><router-link to="/employee/new">ADD NEW EMPLOYEE</router-link></h2>
    </div>
  </div>


  <div class="table-container">
    <div class="background-color">

      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>DNI</th>
          <th>Labor</th>
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


</template>

<style scoped>
h2 {
  font-size: 17px;
  text-decoration: underline;
  position: absolute;
  right: 380px;
  top: 240px;

  margin:0;
  color:darkgreen !important;
}
.sidebar {
  flex: 0 0 200px;
  background-color: #FFFFFF; /* Cambiado a blanco */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top:10%;
}

.searchSection label{
  display: block;

}

.searchSection {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.searchSection input {
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.searchSection input:focus {
  border-color: #2e7d32;
}

.table-container {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.background-color {
  background-color: #FFFFFF; /* Cambiado a blanco */
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
  color: darkgreen !important;
  text-align: center;
  margin-bottom: 20px;
}
</style>