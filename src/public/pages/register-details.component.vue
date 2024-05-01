<script>
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
  name: "register-details",
  components: {SaveButton, DetailIdebar, SearchBar}
}
</script>

<template>
  <div class="flex-container">
    <DetailIdebar>
      <template v-slot:title>
        <h1 class="title-color">Agregar Galpón</h1>
      </template>
    </DetailIdebar>
    <div class="background-color">
      <h1 class="small-title">Crear Galpón</h1>
    </div>
    <SearchBar smallText="Tipo de galpon" :options="['Animales', 'Cultivos']" searchBarTop="350px" searchBarRight="550px"></SearchBar>
    <SearchBar smallText="Tipo" :options="['Pollo', 'Cerdo', 'Vaca']" searchBarTop="350px" searchBarRight="350px"></SearchBar>
  </div>
  <router-link to = "/detailed-monitoring">
    <SaveButton/>
  </router-link>
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

.title-color {
  color: #44604D;
}

.small-title {
  color: #44604D;
  font-size: 1.6em;
  margin-top: 50px;
  margin-left: 250px;
}
</style>