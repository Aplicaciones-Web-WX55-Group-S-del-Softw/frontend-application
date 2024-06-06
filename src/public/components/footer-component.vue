<script setup>
import { defineComponent } from 'vue'

const Component = defineComponent({
  name: 'footer-component',
})
</script>

<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <div class="footer">
    <div class="text">
      <p>Follow us on our social networks:</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
      <p>&copy; 2024 FarmLogiTech. All rights reserved.</p>
      <p>{{ $t('authoring-phrase.author') }}</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #276749;
  padding: 10px 10px;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

.text {
  color: white;
  font-size: 15px;
  gap: 8px;
}

.social-icons {
  display: flex;
  justify-content: center; /* Centra los iconos horizontalmente */
  gap: 1rem; /* Espacio entre los iconos */
  margin-bottom: 10px; /* Añadir margen inferior */
}

.social-icons a {
  color: white;
  font-size: 1.5em; /* Ajusta el tamaño de los iconos */
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ccc; /* Cambia el color al pasar el ratón */
}
</style>
