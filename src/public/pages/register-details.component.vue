<script>
import SaveButton from "../components/SaveButton.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "register-details",
  components: {FooterComponent, ToolbarComponent, SaveButton}
}
</script>

<template>
  <div>
    <toolbar-component></toolbar-component>
    <router-link to="/home" class="back-button">BACK</router-link>

    <div class="main-container">
      <div class="sidebar">
        <h3 class="header-style">Shed</h3>
        <router-link to="/shed/new" class="link-style">
          <h4>Add Sheds</h4>
        </router-link>
        <router-link to="/list/sheds" class="link-style">
          <h4>List Sheds</h4>
        </router-link>
        <h3 class="header-style">Animals</h3>
        <router-link to="/animal/new" class="link-style">
          <h4>Add Animals</h4>
        </router-link>
        <router-link to="/list/animals" class="link-style">
          <h4>Animal Inventory</h4>
        </router-link>
        <router-link to="/registerfeeds" class="link-style">
          <h4>Feeding Registry</h4>
        </router-link>
        <h3 class="header-style">Crops</h3>
        <router-link to="/register/crops" class="link-style">
          <h4>Crop Registry</h4>
        </router-link>
        <router-link to="/list/crops" class="link-style">
          <h4>Crop Inventory</h4>
        </router-link>

      </div>
      <div class="form-container">
        <div class="background-color">
          <h1 class="title-color">CROP REGISTRATION</h1>
          <div class="inputs-container">
            <label for="shed">Shed:</label>
            <input type="text" id="shed" name="shed"><br>

            <label for="type">Type:</label>
            <input type="text" id="type" name="type"><br>

            <label for="planting-date">Planting Date:</label>
            <input type="date" id="planting-date" name="planting-date"><br>

            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity"><br>
          </div>
          <router-link to="/home">
            <SaveButton/>
          </router-link>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
}

.sidebar {
  flex: 0 0 200px;
  background-color: #FFFFFF; /* Cambiado a blanco */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-style {
  color: darkgreen !important;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.link-style {
  color: black;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
}

.form-container {
  flex: 1;
  max-width: 700px;
  display: flex;
  justify-content: center;
}

.background-color {
  background-color: #FFFFFF; /* Cambiado a blanco */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.inputs-container {
  text-align: left;
  margin: auto;
  width: 80%;
}

.inputs-container label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.inputs-container input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.title-color {
  color: darkgreen !important;
  text-align: center;
  margin-bottom: 20px;
}

.back-button {
  display: block;
  margin: 20px auto;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }

  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }

  .form-container {
    width: 100%;
  }

  .background-color {
    width: 100%;
  }

  .title-color {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
