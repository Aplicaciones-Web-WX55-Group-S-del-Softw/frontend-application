<script>
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "register-crops",
  components: {SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent}
}
</script>

<template>
  <div class="flex-container">
    <DetailIdebar>
      <template v-slot:title>
        <h1>Registro de cultivos</h1>
      </template>
    </DetailIdebar>
    <div class="background-color">
    </div>

    <SearchBar smallText="Galpón" :options="['Galpón 1', 'Galpón 2', 'Galpón 3']" searchBarTop="300px" searchBarRight="450px"></SearchBar>
    <SearchBarNOOPTIONSComponent smallText="Tipo de Cultivo" searchBarTop="500px" searchBarRight="600px"></SearchBarNOOPTIONSComponent>
    <SearchBarNOOPTIONSComponent smallText="Fecha de siembra" searchBarTop="500px" searchBarRight="300px"></SearchBarNOOPTIONSComponent>

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
  height: 700px;
  width: 700px;
  box-sizing: border-box;
  margin: -340px;
  transform: translate(90px, 105px);
}
</style>