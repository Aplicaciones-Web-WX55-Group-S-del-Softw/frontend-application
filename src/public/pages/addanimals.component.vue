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
  <toolbar-component class="toolbar"></toolbar-component>
  <router-link to="/home" class="back-button">BACK</router-link>

  <section class="flex-container">
    <div class="table-container">
      <DetailIdebar class="detail-idebar"></DetailIdebar>

      <article class="background-color">
        <h1 class="title-color">ADD ANIMAL</h1>
        <form class="inputs-add" style="text-align: center;">
          <fieldset style="display: inline-block; text-align: left; width: 300px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
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
          </fieldset>
        </form>
        <router-link to = "/home">
          <SaveButton/>
        </router-link>
      </article>
    </div>
  </section>
  <footer-component class="footer"></footer-component>
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
  margin-left:35%;
  font-size:2em;

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