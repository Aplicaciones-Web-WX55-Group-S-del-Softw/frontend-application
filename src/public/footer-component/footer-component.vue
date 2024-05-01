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
        <br/>

        <p>&copy; 2024 FarmLogiTech. All rights reserved.</p>
      </div>
    </div>
</template>

<style scoped>

.footer {
  background-color: #276749;
  padding-top: 10px;
  padding-bottom: 2rem;
  text-align: center;
  width: 100%;
  margin-top: 60px;
}

.text {
  color: white;
  font-size: 15px;
  gap: 8px;
}

.social-icons a {
  margin-right: 1rem;
  color: white;
  width: 200px;
}
</style>