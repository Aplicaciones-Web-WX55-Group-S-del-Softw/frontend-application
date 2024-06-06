<script setup>
import { ref, computed } from 'vue';
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/components/footer-component.vue";

const selectedType = ref('Income');
const selectedCategory = ref('');
const description = ref('');
const amount = ref('');
const date = ref('');
const period = ref('');
const transactions = ref([]);

const addTransaction = () => {
  transactions.value.unshift({
    id: transactions.value.length + 1,
    type: selectedType.value,
    category: selectedCategory.value,
    description: description.value,
    amount: amount.value,
    date: date.value,
    period: period.value
  });

  selectedType.value = 'Income';
  selectedCategory.value = '';
  description.value = '';
  amount.value = '';
  date.value = '';
  period.value = '';
};

const categories = computed(() => {
  return selectedType.value === 'Income' ? ['Sales', 'Subsidies', 'Other Income'] : ['Supplies', 'Labor', 'Maintenance', 'Services', 'Other Expenses'];
});

const filterType = ref('All');
const filterCategory = ref('');
const filterDate = ref('');

const filterCategories = computed(() => {
  return filterType.value === 'Income' ? ['Sales', 'Subsidies', 'Other Income'] : filterType.value === 'Expense' ? ['Supplies', 'Labor', 'Maintenance', 'Services', 'Other Expenses'] : [];
});

const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    return (filterType.value === 'All' || transaction.type === filterType.value) &&
        (!filterCategory.value || transaction.category === filterCategory.value) &&
        (!filterDate.value || transaction.date === filterDate.value);
  });
});
</script>

<template>
  <toolbar-component></toolbar-component>
  <div class="container">
    <div class="form-container">
      <h1>ADD INCOME OR EXPENSE</h1>
      <div class="form-item">
        <label for="type">Type</label>
        <select v-model="selectedType">
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <div class="form-item">
        <label for="category">Category</label>
        <select v-model="selectedCategory">
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="form-item">
        <label for="description">Description</label>
        <input type="text" v-model="description" />
      </div>
      <div class="form-item">
        <label for="amount">Amount</label>
        <input type="number" v-model="amount" />
      </div>
      <div class="form-item">
        <label for="date">Date</label>
        <input type="date" v-model="date" />
      </div>
      <div class="form-item">
        <label for="period">Period</label>
        <input type="text" v-model="period" />
      </div>
      <button @click="addTransaction">Add</button>
    </div>

    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>Type</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Period</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="transaction in transactions.slice(0, 13)" :key="transaction.id">
          <td>{{ transaction.type }}</td>
          <td>{{ transaction.category }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.date }}</td>
          <td>{{ transaction.period }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <h1>FILTER</h1>

  <div class="filter-container">
    <div class="filter-item">
      <label for="type">Type</label>
      <select v-model="filterType">
        <option value="All">All</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
    <div class="filter-item" v-if="filterType !== 'All'">
      <label for="category">Category</label>
      <select v-model="filterCategory">
        <option value="">All</option>
        <option v-for="category in filterCategories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>
    <div class="filter-item">
      <label for="date">Date</label>
      <input type="date" v-model="filterDate" />
    </div>
    <button @click="resetFilters">Search</button>
  </div>

  <div class="table-containerx">
    <div class="table-wrapper">
      <table>
        <thead>
        <tr>
          <th>Type</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Period</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="transaction in filteredTransactions" :key="transaction.id">
          <td>{{ transaction.type }}</td>
          <td>{{ transaction.category }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.date }}</td>
          <td>{{ transaction.period }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="space">
     <footer-component></footer-component>
  </div>
</template>

<style scoped>
.space{
  margin-top: 20%;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 10%;
}

.filter-container {
  width: 45%;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto; /* Centra el contenedor en la página */
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px; /* Ajusta este valor para cambiar el espacio entre los elementos */
}



.table-wrapper {
  width: 100%;
  max-height: 300px; /* Ajusta este valor según sea necesario */
  overflow-y: auto; /* Asegura que aparezca la barra de desplazamiento vertical */
}

.table-containerx {
  margin-buttom:50%;
  width: 45%;
  margin: auto; /* Centra el contenedor en la página */
}

/* Media query para pantallas más pequeñas */
@media (max-width: 768px) {
  .table-containerx {
    width: 90%; /* Ajusta el ancho para pantallas más pequeñas */
    margin: auto; /* Asegura que permanezca centrado */
  }
}

.form-container, .table-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.form-container {
  width: 45%;
}

.table-container {
  width: 50%;
}

h1 {
  color: darkgreen;
  text-align: center;
  margin-bottom: 20px;
}

.form-item, .filter-item {
  margin-bottom: 15px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen;
}

.table-container {
  height: auto;
  overflow-x: auto; /* Asegura que aparezca la barra de desplazamiento horizontal */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

/* Responsive Styles */
@media (max-width: 767px) {
  .form-container, .table-container, .filter-container {
    width: 100%;
  }
}
</style>
