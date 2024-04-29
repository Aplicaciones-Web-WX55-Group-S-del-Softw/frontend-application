<script setup>
import { ref } from 'vue';

const selectedFinance = ref('');
const showTable = ref(false);

const toggleTable = () => {
  showTable.value = !showTable.value;
};
</script>
<template>
  <div>
    <h1>Estadísticas Financieras</h1>
    <h2>Resumen</h2>
    <div class="boxes-container">
      <h3>Ingresos</h3>
      <div class="box">
        <h2>S/XXX</h2>
      </div>
      <h3>Gastos</h3>
      <div class="box">
        <h2>S/XXX</h2>
      </div>
      <img src="../../../assets/financial-statistics.png" alt="Estadísticas Financieras" class="financial-statistics-image">
    </div>

    <div class="dropdown-container">
      <div class="dropdown-item">
        <h4>Finanza</h4>
        <select v-model="selectedFinance">
          <option value="income">Ingresos</option>
          <option value="expenses">Gastos</option>
        </select>
      </div>

      <div class="dropdown-item">
        <h4>Categoria</h4>
        <select>
          <template v-if="selectedFinance === 'income'">
            <option value="sales">Ventas</option>
            <option value="subsidies">Subsidios</option>
            <option value="others">Otros</option>
          </template>

          <template v-else-if="selectedFinance === 'expenses'">
            <option value="supplies">Suministros</option>
            <option value="labor">Mano de obra</option>
            <option value="maintenance">Mantenimiento</option>
            <option value="service">Servicio</option>
            <option value="others">Otros</option>
          </template>
        </select>
      </div>

      <div class="dropdown-item">
        <h4>Monto</h4>
        <input type="text" class="monto-input" placeholder="Ingrese el monto">
      </div>

      <div class="dropdown-item">
        <h4>Periodo</h4>
        <select>
          <template v-if="selectedFinance === 'income' || selectedFinance === 'expenses'">
            <option value="month">Mes</option>
            <option value="quarter">Trimestre</option>
            <option value="year">Año</option>
          </template>
        </select>
      </div>
      <div class="dropdown-item">
        <h4>Fecha</h4>
        <input type="date">
      </div>
    </div>

    <div class="filter-table">
      <button @click="toggleTable">Filtrar</button>
      <h2 v-if="showTable && selectedFinance === 'income'" class="table-title">Ingresos</h2>
      <h2 v-if="showTable && selectedFinance === 'expenses'" class="table-title">Gastos</h2>

    </div>

    <table v-show="showTable && (selectedFinance === 'income' || selectedFinance === 'expenses')" :class="{ 'hide': !showTable }" class="data-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Categoria</th>
        <th>Monto</th>
        <th>Fecha</th>
        <th>Periodo</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td>1</td>
        <td>Ventas</td>
        <td>S/1000</td>
        <td>2023-01-01</td>
        <td>Mes</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Ventas</td>
        <td>S/1000</td>
        <td>2023-01-01</td>
        <td>Mes</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>

h1{
  font-size: 70px;
  position: relative;
  text-align: center;
  top: 200px;
  margin:0;
  color:darkgreen;
}

h2{
  position: relative;
  top: 250px;
  margin:0;
  font-size: 50px;
  text-align: left;
  color:darkgreen;
  right: -40px;
}
.box h2 {
  font-size: 20px;
  text-align: left;
  color: darkgreen;
  margin-left: 130px;
  margin-bottom: -100px;
}
.boxes-container {
  margin-top: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.box{
  border-radius: 10px;
  border: 2px solid darkgreen;
  padding: 50px;
  margin: 70px 10px 300px -50px;
  width: 20%;
  height: 350px;
}

h3{
  font-size: 25px;
  text-align: left;
  color:darkgreen;
  position: relative;
  right: -45px;
}

img {
  width: 60%;
  height: 450px;
  margin-left: -10px;
}

.dropdown-container {
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: -150px;
  margin-left: 100px;
  background-color: #e5e5e5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dropdown-item h4 {
  margin-bottom: 20px;
}

.dropdown-item select {
  border: 2px solid #000;
  border-radius: 5px;
  width: 150px;
}
.dropdown-item input[type="date"] {
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
}
.dropdown-item .monto-input {
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
}
div {
  margin-bottom: 10vh;
}




table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 200px;
}

table th, table td {
  border: 1px solid #000;
  padding: 10px;
  text-align: left;
}
.table-title{
  margin-top: -230px;
  text-align: center;
  color: darkgreen;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}
button {
  background-color: #9d9d9d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 1315px;
}

button:hover {
  background-color: #5d5d5d;}
@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.data-table {
  animation: scaleIn 1s forwards;
  margin-top: 200px;
}

</style>
