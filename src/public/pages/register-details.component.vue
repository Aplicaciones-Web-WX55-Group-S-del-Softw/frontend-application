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
          <h1 class="title-color">ADD SHED</h1>
          <div class="inputs-container">

            <label for="type">Shed Type:</label>
            <select id="type" name="type">
              <option value="Animals">Animals</option>
              <option value="Crops">Crops</option>
            </select><br>

            <label for="specie">Specie:</label>
            <input type="text" id="specie" name="specie"><br>

            <router-link to="/home" class="save-button-link">
              <button class="button">Save</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class ="space">
      <footer-component></footer-component>

    </div>
  </div>
</template>

<style scoped>
  .space{
    margin-top: 20%;
  }
.main-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap; /* No permite que los elementos se envuelvan */
  margin-top:10%;


}

.sidebar {
  flex: 0 0 200px;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}

.header-style {
  color: darkgreen;
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

.button {
  background-color: darkgreen;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.background-color {
  background-color: #FFFFFF;
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

.inputs-container input,
.inputs-container select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.title-color {
  color: darkgreen;
  text-align: center;
  margin-bottom: 20px;
}

.back-button {
  display: block;
  margin: 20px auto;
  text-align: center;
}

.save-button-link {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .main-container {
    flex-direction: row;
    flex-wrap: nowrap; /* Mantener disposición en fila sin envolver */

  }

  .sidebar {
    flex: 0 0 150px; /* Reducir tamaño de la barra lateral en pantallas más pequeñas */
    margin-bottom: 0;
  }

  .form-container {
    flex: 1;
    max-width: 600px; /* Ajustar tamaño del formulario en pantallas más pequeñas */
  }
}

@media screen and (max-width: 768px) {
  .main-container {
    flex-direction: row;
    flex-wrap: nowrap; /* Mantener disposición en fila sin envolver */
    padding:10px;
    margin-top:20%;

  }
  .space{
    margin-top: 50%;
  }

  .sidebar {
    flex: 0 0 120px; /* Reducir tamaño de la barra lateral en pantallas más pequeñas */
    margin-bottom: 0;
  }

  .form-container {
    flex: 1;
    max-width: 500px; /* Ajustar tamaño del formulario en pantallas más pequeñas */
  }
}
</style>
