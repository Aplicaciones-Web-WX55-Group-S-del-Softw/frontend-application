<script>
export default {
  data() {
    return {
      searchTerm: '',
      options: ['Opción 1', 'Opción 2', 'Opción 3'], // Ejemplo de opciones
      showOptions: false
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option => option.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
  methods: {
    filterOptions() {
      this.showOptions = true;
    },
    closeOptions() {
      // Retrasar el cierre de opciones para permitir hacer clic en las opciones
      setTimeout(() => {
        this.showOptions = false;
      }, 200);
    },
    selectOption(option) {
      this.searchTerm = option;
      this.showOptions = false;
      // Aquí puedes emitir un evento o realizar cualquier acción con la opción seleccionada
      console.log('Opción seleccionada:', option);
    }
  }
};
</script>

<template>
  <div class="search-bar">
    <input type="text" v-model="searchTerm" @input="filterOptions" @blur="closeOptions">
    <ul v-show="showOptions">
      <li v-for="option in filteredOptions" :key="option" @click="selectOption(option)">{{ option }}</li>
    </ul>
  </div>
  <div class="wrapper">
    <h1>Agregar Galpón</h1>
  </div>
  <div class ="container">
    <div class="center-container">
      <div class="monitoring-cards-container">

        <div class="description">
          <div class="acciones-container">
              <h3>Galpón</h3>
            <router-link to="/agregargalpón">
              <h4>Agregar Galpón</h4>
            </router-link>
            <router-link to="/listargalpon">
              <h4>Listar Galpones</h4>
            </router-link>
              <h3>Animales</h3>
            <router-link to="/agregaranimal">
              <h4>Agregar Animales</h4>
            </router-link>
            <router-link to="/inventarioanimal">
              <h4>Inventario de Animales</h4>
            </router-link>
            <router-link to="/registroalimentacion">
              <h4>Registro de Alimentación</h4>
            </router-link>
            <h3>Cultivos</h3>
            <router-link to="/registrocultivos">
              <h4>Registro de Cultivos</h4>
            </router-link>
            <router-link to="/inventariocultivos">
              <h4>Inventario de Cultivos</h4>
            </router-link>
            <h3>Finanzas</h3>
            <router-link to="/registroegresos">
              <h4>Registro de Egresos</h4>
            </router-link>

          </div>
        </div>
      </div>
    </div>
    </div>

</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 60px;
  margin-left: -700px
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  color: black;
}

h2 {
  font-weight: bold;
  font-size: 50px;
  position: fixed; /* Fija el elemento */
  top: 0; /* Lo coloca en la parte superior */
  width: 100%; /* Para que ocupe toda la anchura */
  text-align: center; /* Alinea el texto al centro */
  padding: 10px 0; /* Espaciado vertical y horizontal */
  margin: 0; /* Elimina el margen */
  color: black; /* Color del texto */
}

.monitoring-cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;
}

.monitoring-card {
  height: 100px;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.monitoring-card router-link {
  text-decoration: none;
}

.monitoring-card.acciones-container{
  margin-right:-1000px;
}
.search-bar {
  position: relative;
  margin-right: 60px; /* Ajusta este valor según tus necesidades */
  margin-top: 20px; /* Ajusta este valor según tus necesidades */
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 1;
}
li {
  padding: 5px;
  cursor: pointer;
}
li:hover {
  background-color: #f0f0f0;
}
</style>