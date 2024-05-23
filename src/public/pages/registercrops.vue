<script>
import axios from 'axios';
import DetailIdebar from "../components/detail-idebar.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchBarNOOPTIONSComponent from "../components/SearchBar-NOOPTIONS.component.vue";
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "register-crops",
  components: {FooterComponent, ToolbarComponent, SaveButton, DetailIdebar, SearchBar, SearchBarNOOPTIONSComponent},
  data() {
    return {
      crops: []
    }
  },
  created() {
    axios.get('../server/db.json')
        .then(response => {
          this.crops = response.data.crops;
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


        <h1 class="title-color">CROP REGISTRATION</h1>
        <!-- Inputs -->
        <div style="text-align: center;">
          <div style="display: inline-block; text-align: left; width: 300px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
            <label for="shed" style="display: block; margin-bottom: 5px;">Shed:</label>
            <input type="text" id="shed" name="shed" style="width: 100%; margin-bottom: 10px;"><br>

            <label for="type" style="display: block; margin-bottom: 5px;">Type:</label>
            <input type="text" id="type" name="type" style="width: 100%; margin-bottom: 10px;"><br>

            <label for="planting-date" style="display: block; margin-bottom: 5px;">Planting Date:</label>
            <input type="date" id="planting-date" name="planting-date" style="width: 100%; margin-bottom: 10px;"><br>

            <label for="quantity" style="display: block; margin-bottom: 5px;">Quantity:</label>
            <input type="number" id="quantity" name="quantity" style="width: 100%; margin-bottom: 10px;"><br>
          </div>

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
}



.background-color {
  background-color: #F2F0F0;
  padding: 20px;
  margin: -340px;
  transform: translate(90px, 490px);
  width: 700px;
  height: 475px;


}

.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 20px;
}

.table-wrapper {
  width: 600px;
  height: 800px;
  margin-left:-130px;
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
  color:darkgreen !important;
  margin-left:25%;

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