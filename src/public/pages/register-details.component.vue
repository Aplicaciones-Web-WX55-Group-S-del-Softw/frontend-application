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
    </DetailIdebar>

    <div class="background-color">

      <h1 class="small-title">Create Shed</h1>
      <SaveButton/>

    </div>
    <div class="inputs-create">
      <SearchBar smallText="Shed Type" :options="['Animals', 'Crops']" searchBarTop="350px" searchBarRight="550px"></SearchBar>
      <SearchBar smallText="Type" :options="['Chicken', 'Pig', 'Cow']" searchBarTop="350px" searchBarRight="350px"></SearchBar>
    </div>

  </div>

  <router-link to = "/detailed-monitoring">
  </router-link>
</template>

<style scoped>
h1{
  color: #44604D;
  text-align: center;
}
.inputs-create{
  margin-right:-200px;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-color {
  background-color: #F2F0F0;
  height: 460px;
  width: 700px;
  margin: -340px;
  transform: translate(90px, 60px);
}

.title-color {
  color: #44604D;

}

.small-title {
  color: #44604D;
  font-size: 1.6em;
  margin-top: 50px;
}
</style>