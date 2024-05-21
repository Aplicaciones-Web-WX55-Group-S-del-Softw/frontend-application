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

      <h1 class="small-title">CREATE SHED</h1>
      <div style="text-align: center;">
        <div style="display: inline-block; text-align: left; width: 300px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
          <label for="shed-type" style="display: block; margin-bottom: 5px;">Shed Type:</label>
          <select id="shed-type" name="shed-type" style="width: 100%; margin-bottom: 10px;">
            <option value="Animals">Animals</option>
            <option value="Crops">Crops</option>
          </select><br>

          <label for="type" style="display: block; margin-bottom: 5px;">Type:</label>
          <select id="type" name="type" style="width: 100%; margin-bottom: 10px;">
            <option value="Chicken">Chicken</option>
            <option value="Pig">Pig</option>
            <option value="Cow">Cow</option>
          </select><br>
        </div>
      </div>

      <router-link to = "/home">
        <SaveButton/>
      </router-link>

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
  margin-left:250px;


}

.background-color {
  background-color: #F2F0F0;
  height: 460px;
  width: 700px;
  margin: -340px;
  transform: translate(90px, 40px);
}


.small-title {
  color:darkgreen !important;
  margin-left:-15px;
  margin-top: 30px;
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

  .inputs-add {
    margin-top: 10%;
  }
}
</style>