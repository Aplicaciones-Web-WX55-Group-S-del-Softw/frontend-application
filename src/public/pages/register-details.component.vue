<script>
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "register-details",
  components: {FooterComponent, ToolbarComponent, SaveButton, DetailIdebar, SearchBar}
}
</script>

<template>
  <toolbar-component/>
  <router-link to="/home" class="back-button">BACK</router-link>

  <div class="flex-container">
    <DetailIdebar>
    </DetailIdebar>

    <div class="background-color">

      <h1 class="small-title">Create Shed</h1>
      <router-link to = "/home">
        <SaveButton/>
      </router-link>

    </div>
    <div class="inputs-create">
      <SearchBar smallText="Shed Type" :options="['Animals', 'Crops']" searchBarTop="450px" searchBarRight="300px"></SearchBar>
      <SearchBar smallText="Type" :options="['Chicken', 'Pig', 'Cow']" searchBarTop="450px" searchBarRight="500px"></SearchBar>
    </div>

  </div>

  <router-link to = "/detailed-monitoring">
  </router-link>
  <footer-component></footer-component>

</template>

<style scoped>
h1{
  color: #44604D;
  text-align: center;
}
.inputs-create{
  margin-right:-450px;

}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:-150px;


}

.background-color {
  background-color: #F2F0F0;
  height: 460px;
  width: 700px;
  margin: -340px;
  transform: translate(90px, 60px);
}


.small-title {
  color: #44604D;
  margin-left:-50px;
  font-size: 1.6em;
  margin-top: 30px;
}
</style>