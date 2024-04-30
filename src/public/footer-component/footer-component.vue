<script setup>
export default {
  name: 'footer'
}
</script>

<template>
  <footer class="footer">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <div class="text">
      <p>Síguenos en nuestras redes sociales:</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
      <br/>
      <p>&copy; 2024 FarmLogiTech. Todos los derechos reservados.</p>
    </div>

  </footer>
</template>

<style scoped>
.footer {
  background-color: #276749;
  padding-top: 10px;
  padding-bottom: 2rem;
  text-align: center;
  width: 100%;

}

.text {
  color: white;
  font-size: 22px;
  gap: 8px;
}

.icon-instagram{
  background-color: white;
}

.social-icons a {
  margin-right: 1rem;
  color: white;
  width: 200px;
}
</style>