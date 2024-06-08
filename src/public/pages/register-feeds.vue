<script>
import axios from 'axios';
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../footer-component/footer-component.vue";

export default {
  name: "register-aliments",
  components: { FooterComponent, ToolbarComponent, SaveButton },
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
  <div>
    <toolbar-component></toolbar-component>

    <div class="main-container">
      <div class="sidebar">
        <h3 class="header-style">Shed</h3>
        <router-link to="/shed/new" class="link-style"><h4>Add Sheds</h4></router-link>
        <router-link to="/list/sheds" class="link-style"><h4>List Sheds</h4></router-link>

        <h3 class="header-style">Animals</h3>
        <router-link to="/animal/new" class="link-style"><h4>Add Animals</h4></router-link>
        <router-link to="/list/animals" class="link-style"><h4>Animal Inventory</h4></router-link>
        <router-link to="/register/feeds" class="link-style"><h4>Feeding Registry</h4></router-link>

        <h3 class="header-style">Crops</h3>
        <router-link to="/register/crops" class="link-style"><h4>Crop Registry</h4></router-link>
        <router-link to="/list/crops" class="link-style"><h4>Crop Inventory</h4></router-link>
      </div>
      <div class="form-container">
        <div class="background-color">
          <h1 class="title-color">Feeding Registry</h1>
          <div class="inputs-container">
            <label for="shed">Shed:</label>
            <input type="text" id="shed" name="shed"><br>

            <label for="date">Date:</label>
            <input type="date" id="date" name="date"><br>

            <label for="feed-type">Type of Feed:</label>
            <input type="text" id="feed-type" name="feed-type"><br>

            <label for="feed-amount">Amount of Feed:</label>
            <input type="number" id="feed-amount" name="feed-amount"><br>

          </div>
          <div class="table-container">
            <table>
              <thead>
              <tr>
                <th>ID</th>
                <th>Shed</th>
                <th>Date</th>
                <th>Type of Feed</th>
                <th>Amount of Feed</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="aliment in aliments" :key="aliment.id">
                <td>{{ aliment.id }}</td>
                <td>{{ aliment.shed }}</td>
                <td>{{ aliment.date }}</td>
                <td>{{ aliment.feed_type }}</td>
                <td>{{ aliment.feed_amount }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <router-link to="/home" class="save-button-link">
            <button class="button">Save</button>
          </router-link>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<style scoped>
body{
  min-height:48.1vh;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  margin-top:150px;
  flex-wrap: nowrap;
}

.sidebar {
  flex: 0 0 200px;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}

.header-style {
  color: darkgreen;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.link-style {
  color: black;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
}

.form-container {
  flex: 1;
  max-width: 700px;
  display: flex;
  justify-content: center;
}

.background-color {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.inputs-container {
  text-align: left;
  margin: auto;
  width: 80%;
}

.inputs-container label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.inputs-container input,
.inputs-container select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.title-color {
  color: darkgreen;
  text-align: center;
  margin-bottom: 20px;
}

.back-button {
  display: block;
  margin: 20px auto;
  text-align: center;
}

.table-container {
  flex: 1;
  max-width: 700px;
  display: flex;
  justify-content: center;
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

.button {
  background-color: darkgreen;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button-link {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .main-container {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .sidebar {
    flex: 0 0 150px;
    margin-bottom: 0;
  }

  .form-container,
  .table-container {
    flex: 1;
    max-width: 600px;
  }
}

@media screen and (max-width: 768px) {
  .main-container {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .sidebar {
    flex: 0 0 120px;
    margin-bottom: 0;
  }

  .form-container,
  .table-container {
    flex: 1;
    max-width: 500px;
  }
}
</style>