<script>
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "add-animals",
  components: {FooterComponent, ToolbarComponent, SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent}
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <router-link to="/home" class="back-button">BACK</router-link>



  <div class="flex-container">
    <DetailIdebar>
      <template v-slot:title>
      </template>
    </DetailIdebar>

    <div class="background-color">
      <h1 class="title-color">ADD ANIMAL</h1>

      <SearchBar smallText="Shed" :options="['Shed 1', 'Shed 2', 'Shed 3']" searchBarTop="150px" searchBarRight="250px" class="highlight-border"></SearchBar>
      <SearchBar smallText="Health Status" :options="['Healthy', 'Sick', 'Recovering']" searchBarTop="200px" searchBarRight="250px" class="highlight-border"></SearchBar>
      <SearchBarNOOPTIONSComponent smallText="Location" searchBarTop="250px" searchBarRight="400px" class="highlight-border"></SearchBarNOOPTIONSComponent>
      <SearchBarNOOPTIONSComponent smallText="Age" searchBarTop="250px" searchBarRight="100px" class="highlight-border"></SearchBarNOOPTIONSComponent>
      <router-link to = "/home">
        <SaveButton/>
      </router-link>
    </div>

  </div>
  <footer-component></footer-component>

</template>

<style scoped>

.highlight-border input {
  border: 2px solid #44604D;
  border-radius: 5px;
  padding: 5px;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:15%
}

.background-color {
  background-color: #F2F0F0;
  padding: 20px;
  margin: -340px;
  transform: translate(90px, 60px);
  width: 700px;
  height: 470px;

}

.title-color {
  color: #44604D;
  margin-left:35%;
  margin-bottom:-100px;
}
</style>