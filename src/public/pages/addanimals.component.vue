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
      <div class="inputs-add">
      <div style="text-align: center;">
        <div style="display: inline-block; text-align: left; width: 300px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
          <label for="age" style="display: block; margin-bottom: 5px;">Age:</label>
          <input type="number" id="age" name="age" style="width: 100%; margin-bottom: 10px;"><br>

          <label for="location" style="display: block; margin-bottom: 5px;">Location:</label>
          <input type="text" id="location" name="location" style="width: 100%; margin-bottom: 10px;"><br>

          <label for="health-status" style="display: block; margin-bottom: 5px;">Health Status:</label>
          <select id="health-status" name="health-status" style="width: 100%; margin-bottom: 10px;">
            <option value="Excellent">Recovering</option>
            <option value="Good">Healthy</option>
            <option value="Fair">Sick</option>
          </select><br>
        </div>
      </div>
      </div>
      <router-link to = "/home">
        <SaveButton/>
      </router-link>
    </div>

  </div>
  <footer-component></footer-component>

</template>

<style scoped>
.inputs-add{
margin-top:20%;
}
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
  transform: translate(90px, 50px);
  width: 700px;
  height: 470px;

}

.title-color {
  color:darkgreen !important;
  margin-left:35%;
  margin-bottom:-100px;
}
</style>