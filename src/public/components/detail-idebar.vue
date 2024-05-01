<script>

export default {

};
</script>

<template>
  <div class="wrapper">
    <slot name="title"></slot>
  </div>
  <div class ="container">
    <div class="center-container">
      <div class="monitoring-cards-container">

        <div class="description">
          <div class="actions-container rectangle-background">
            <h3 class="header-style">Galpón</h3>
            <router-link to="/addshed" class="link-style">
              <h4>Agregar Galpón</h4>
            </router-link>
            <router-link to="/listshed" class="link-style">
              <h4>Listar Galpones</h4>
            </router-link>
            <h3 class="header-style">Animales</h3>
            <router-link to="/addanimal" class="link-style">
              <h4>Agregar Animales</h4>
            </router-link>
            <router-link to="/listanimals" class="link-style">
              <h4>Inventario de Animales</h4>
            </router-link>
            <router-link to="/registerfeeds" class="link-style">
              <h4>Registro de Alimentación</h4>
            </router-link>
            <h3 class="header-style">Cultivos</h3>
            <router-link to="/registercrops" class="link-style">
              <h4>Registro de Cultivos</h4>
            </router-link>
            <router-link to="/listcrops" class="link-style">
              <h4>Inventario de Cultivos</h4>
            </router-link>
            <h3 class="header-style">Finanzas</h3>
            <router-link to="/register-expenses" class="link-style">
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
  margin-top: 260px;
  margin-bottom: 60px;
  margin-left: -700px
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -550px;
  margin-right:-200px;
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

.rectangle-background {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.header-style {
  color: #44604D;
  font-size: 1.5em;
}

.link-style {
  color: black;
  text-decoration: none;
}
</style>