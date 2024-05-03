<script>
import { ProductionApi } from "../../services/production-api/production-api.js";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";
export default {
  components: {FooterComponent, ToolbarComponent},
  data() {
    return {
      productions: [],
      productionApi: new ProductionApi(),

    };
  },
  created() {
    this.productionApi.getProductions().then(response => {
      this.productions = response.data;
    }).catch(error => {
      console.error(error);
    });
  }

};
</script>

<template>
  <toolbar-component></toolbar-component>
  <div>
    <router-link to="/" class="back-button">Back</router-link>
    <h1>SALES</h1>
    <div class="card">
      <img src="../../../assets/production-statistics.png" alt="Production">
    </div>
  </div>
  <h2>Sales Details</h2>
  <div class="dropdown-container">
    <div class="dropdown-item">
      <h4>Product</h4>
      <select v-model="selectedProduct">
        <option value="milk">Milk</option>
        <option value="meat">Meat</option>
        <option value="butter">Butter</option>

      </select>
    </div>

    <div class="dropdown-item">
      <h4>Species</h4>
      <select v-model="selectedSpecies">
        <option value="chicken">Chicken</option>
        <option value="cow">Cow</option>
        <option value="sheep">Sheep</option>
        <option value="pig">Pig</option>
      </select>
    </div>

    <div class="dropdown-item">
      <h4>Shed</h4>
      <select v-model="selectedShed">
        <option v-for="shed in 5" :key="shed" :value="shed">
          {{ shed }}
        </option>
      </select>
    </div>

    <div class="dropdown-item">
      <h4>Date</h4>
      <input type="date" v-model="selectedDate">
    </div>
  </div>
  <table>
    <tr>
      <th>ID</th>
      <th>Shed</th>
      <th>Species</th>
      <th>Date</th>
      <th>Percentage</th>
      <th>Amount</th>
    </tr>
    <tr v-for="production in productions" :key="production.id">
      <td>{{ production.id }}</td>
      <td>Shed {{ production.shed }}</td>
      <td>{{ production.species }}</td>
      <td>{{ production.date }}</td>
      <td>{{ production.percentage }}</td>
      <td>{{ production.amount}}</td>
    </tr>
    <tr class="empty-row">

      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
  <td></td>
  <footer-component></footer-component>
</template>

<style scoped>
.card {
  border-radius: 10px;
  border: 2px solid gray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 160px;
  margin-top:50px;
}
h1{
  font-size: 70px;
  position: relative;
  text-align: center;
  top: 10px;
  margin:0;
  color:darkgreen;
}
h2{
  font-size: 40px;
  position: relative;
  text-align: left;
  top: 100px;
  margin-left:160px;
  color:darkgreen;
}
.card img {
  width: 80%;
  height: auto;
  margin-left:150px;
}
.dropdown-container {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 180px;
  margin-left: 160px;
  background-color: #e5e5e5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border: 2px solid black;
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
table {
  width: 80%;
  border-collapse: collapse;
  border: 2px solid black;
  margin-top: 100px;
  margin-left:160px;
}

th {
  border: 2px solid black;
  padding: 8px;
  text-align: center;
}

td {
  border-left: 2px solid black;
  border-right: 2px solid black;
  padding-bottom: 20px;
  text-align: center;
  height: 10px;
}
.empty-row {
  height: 100px;
}
.empty-row td {
  border-bottom: 1px solid #000;
  height: 20px;
}
footer-component{
  margin-top:300px;
}
</style>