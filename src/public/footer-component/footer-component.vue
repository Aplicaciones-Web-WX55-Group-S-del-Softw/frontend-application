<script setup>
import { defineComponent } from 'vue'

const Component = defineComponent({
  name: 'footer-component',
})
</script>

<template>
<body>
    <footer class="footer">
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
    </footer>
</body>
</template>

<style scoped>
body{
 position:relative;
  min-height:90vh;
  padding-bottom:200px;
}
.footer {
  position:absolute;
  bottom:0;
  height:200px;
  width: 100%;
  background-color: #276749;
  display:flex;
  justify-content: center;
  align-items: center;
}

.text {
  color: white;
  font-size: 15px;
  gap: 8px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 10px;
}
p{
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
}
.social-icons a {
  color: white;
  font-size: 1.8em;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ccc;
}
</style>