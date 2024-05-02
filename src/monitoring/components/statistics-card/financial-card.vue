<script setup>
import { ref } from 'vue';
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

const selectedFinance = ref('');
const showTable = ref(false);

const toggleTable = () => {
  showTable.value = !showTable.value;
};
</script>
<template>
  <toolbar-component></toolbar-component>

  <div>
    <router-link to="/home" class="back-button">BACK</router-link>
    <h1>Financial Statistics</h1>
    <!--<h2 class="tittle-Summary">Summary</h2>-->
    <div class="boxes-container">
      <h3>Income</h3>
      <div class="box">
        <h2>S/XXX</h2>
      </div>
      <h3>Expenses</h3>
      <div class="box">
        <h2>S/XXX</h2>
      </div>
      <img src="../../../assets/financial-statistics.png" alt="Financial Statistics" class="financial-statistics-image">
    </div>

    <div class="dropdown-container">
      <div class="dropdown-item">
        <h4>Finance</h4>
        <select v-model="selectedFinance">
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </select>
      </div>

      <div class="dropdown-item">
        <h4>Category</h4>
        <select>
          <template v-if="selectedFinance === 'income'">
            <option value="sales">Sales</option>
            <option value="subsidies">Subsidies</option>
            <option value="others">Others</option>
          </template>

          <template v-else-if="selectedFinance === 'expenses'">
            <option value="supplies">Supplies</option>
            <option value="labor">Labor</option>
            <option value="maintenance">Maintenance</option>
            <option value="service">Service</option>
            <option value="others">Others</option>
          </template>
        </select>
      </div>

      <div class="dropdown-item">
        <h4>Amount</h4>
        <input type="text" class="monto-input" placeholder="Enter the amount">
      </div>

      <div class="dropdown-item">
        <h4>Period</h4>
        <select>
          <template v-if="selectedFinance === 'income' || selectedFinance === 'expenses'">
            <option value="month">Month</option>
            <option value="quarter">Quarter</option>
            <option value="year">Year</option>
          </template>
        </select>
      </div>
      <div class="dropdown-item">
        <h4>Date</h4>
        <input type="date">
      </div>
    </div>

    <div class="filter-table">
      <button @click="toggleTable">Filter</button>
      <h2 v-if="showTable && selectedFinance === 'income'" class="table-title">Income</h2>
      <h2 v-if="showTable && selectedFinance === 'expenses'" class="table-title">Expenses</h2>

    </div>

    <table v-show="showTable && (selectedFinance === 'income' || selectedFinance === 'expenses')" :class="{ 'hide': !showTable }" class="data-table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Period</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td>1</td>
        <td>Sales</td>
        <td>S/1000</td>
        <td>2023-01-01</td>
        <td>Month</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sales</td>
        <td>S/1000</td>
        <td>2023-01-01</td>
        <td>Month</td>
      </tr>
      </tbody>
    </table>
  </div>
  <footer-component></footer-component>

</template>


<style scoped>
.tittle-Summary{
  font-size: 70px;

}
.back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: darkgreen;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: darkgreen;
}

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
  margin-left: 10px;
  margin-bottom: -100px;
}
.boxes-container {
  margin-top: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.box{
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
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: -180px;
  margin-left: 150px;
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
  margin-left: 1000px;
}

button:hover {
  background-color: darkgreen;}
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

