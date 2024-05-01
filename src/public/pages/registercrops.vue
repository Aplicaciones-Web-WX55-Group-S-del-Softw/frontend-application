<script>
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "add-animals",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent}
}
</script>

<template>
  <div class="flex-container">
    <DetailIdebar>
      <template v-slot:title>
        <h1 class="title-color">Registro de cultivos</h1>
      </template>
    </DetailIdebar>
    <div class="background-color">
      <SearchBar smallText="Galpón" :options="['Galpón 1', 'Galpón 2', 'Galpón 3']" searchBarTop="140px" searchBarRight="250px"></SearchBar>
      <SearchBarNOOPTIONSComponent smallText="Tipo de Cultivo" searchBarTop="270px" searchBarRight="350px"></SearchBarNOOPTIONSComponent>
      <SearchBarNOOPTIONSComponent smallText="Fecha de siembra" searchBarTop="270px" searchBarRight="100px"></SearchBarNOOPTIONSComponent>
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
</style>