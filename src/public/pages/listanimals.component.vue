<script>
import axios from 'axios';
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "list-animal",
  components: {FooterComponent, ToolbarComponent, SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
  data() {
    return {
      animals: []
    }
  },
  created() {
    axios.get('../server/db.json')
        .then(response => {
          this.animals = response.data.animals;
          console.log(this.animals)
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <router-link to="/home" class="back-button">BACK</router-link>


  <div class="flex-container">

    <div class="table-container">
      <DetailIdebar>
        <template v-slot:title>
        </template>
      </DetailIdebar>

      <div class="background-color">
        <h1 class="title-color">ANIMAL INVENTORY</h1>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Age</th>
            <th>Location</th>
            <th>Health Status</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="animal in animals" :key="animal.id">
            <td>{{ animal.id }}</td>
            <td>{{ animal.age }}</td>
            <td>{{ animal.location }}</td>
            <td>{{ animal.health_state }}</td>
          </tr>
          </tbody>
        </table>


        <router-link to = "/home">
          <SaveButton/>
        </router-link>

      </div>


    </div>

  </div>



  <footer-component></footer-component>

</template>

<style scoped>

SearchBar{
  margin:50px;
}
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
  transform: translate(90px, 490px);
  width: 700px;
  height: 480px;
}

.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 20px;
  margin-left:20%;

}

.table-wrapper {
  width: 340px;
  overflow: auto;
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
  color:darkgreen !important;
  margin-left:28%;
  margin-bottom:10px;
}

.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.monitoring-cards-container, .emergency-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
  gap: 5vw;
  justify-items: center;
}

.monitoring-card, .emergency-card {
  height: 10vw;
  margin: 1vw;
  padding: 0.5vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


@media screen and (max-width: 768px) {
  .flex-container {
    flex-direction: row;
    margin-left: 0;
  }

  .background-color {
    margin: 0;
    transform: translate(0, 0);
    width: 100%;
    height: auto;
  }

  .title-color {
    margin-left: 0;
    text-align: center;
    display: inline-block;
  }

  .back-button {
    position: relative;
    z-index: 9999;
    left: 160px;
  }

  .table-container {
    margin-top: 10%;
  }
}




</style>