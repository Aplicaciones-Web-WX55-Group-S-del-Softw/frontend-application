<script>
import axios from 'axios';
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "list-shed",
  components: {FooterComponent, ToolbarComponent, SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
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
  <toolbar-component></toolbar-component>
  <router-link to="/home" class="back-button">BACK</router-link>

  <div class="flex-container">

    <div class="table-container">
      <DetailIdebar>
        <template v-slot:title>
        </template>
      </DetailIdebar>

      <div class="background-color">
        <h1 class="title-color">SHED LIST</h1>

        <div class="table-wrapper">
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Species</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="shed in sheds">
              <td>{{ shed.id }}</td>
              <td>{{ shed.type }}</td>
              <td>{{ shed.species }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <router-link to = "/home">
          <SaveButton/>
        </router-link>
      </div>

    </div>

  </div>
  <footer-component></footer-component>

</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left:15%;
}

.background-color {
  background-color: #F2F0F0;
  padding: 20px;
  margin: -340px;
  transform: translate(90px, 520px);
  width: 700px;
  height: 460px;
}

.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 20px;
}

.table-wrapper {
  width: 340px;
  height: 800px;
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
  color: #44604D;
  margin-left:40%;
  margin-bottom:-100px;
}
</style>