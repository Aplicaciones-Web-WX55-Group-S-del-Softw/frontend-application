<template>
  <button class="save-button">Save</button>
</template>

<script>
export default {
  name: "SaveButton"
}
</script>

<style scoped>
.save-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4CAF50; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  padding: 10px 20px; /* Espaciado interno */
  font-size: 16px; /* Tamaño de fuente */
  cursor: pointer; /* Cursor al pasar el ratón */
  transition: background-color 0.3s ease; /* Transición suave */
}

.save-button:hover {
  background-color: #45a049; /* Cambio de color al pasar el ratón */
}
</style>
