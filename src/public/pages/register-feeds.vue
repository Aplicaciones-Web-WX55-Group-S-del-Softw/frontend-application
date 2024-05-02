<!--
<script>
import DetailIdebar from "../components/detail-idebar.vue";
import axios from 'axios';
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "register-aliments",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
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
  <div class="flex-container">
    <DetailIdebar>
      <template v-slot:title>
        <h1 class="title-color" >Feeding Register</h1>
      </template>
    </DetailIdebar>
    <div class="background-color">
      <SearchBar smallText="Shed" :options="['Shed 1', 'Shed 2', 'Shed 3']" searchBarTop="100px" searchBarRight="250px"></SearchBar>
      <SearchBarNOOPTIONSComponent smallText="Amount of Feed" searchBarTop="400px" searchBarRight="250px"></SearchBarNOOPTIONSComponent>
      <SearchBarNOOPTIONSComponent smallText="Date" searchBarTop="250px" searchBarRight="400px"></SearchBarNOOPTIONSComponent>
      <SearchBarNOOPTIONSComponent smallText="Type of Feed" searchBarTop="250px" searchBarRight="100px"></SearchBarNOOPTIONSComponent>
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

.background-color {
  background-color: #F2F0F0;
  padding: 20px;
  margin: -340px;
  transform: translate(90px, 105px);
  width: 700px;
  height: 700px;
}
.title-color {
  color: #44604D;
}
</style>-->