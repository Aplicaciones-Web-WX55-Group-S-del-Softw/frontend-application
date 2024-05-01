<script>
export default {
  props: ['show'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>


<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <p><span class="checkmark">✔️</span> La tarea ha sido guardada exitosamente.</p>
    </div>
  </div>
</template>


<style scoped>
.modal {
  position: relative;
  z-index:1;
  left: 480px;
  top: -100px;
  width: 40%;
  height: 100%;
  overflow: auto;
}

.modal-content {
  background-color: #90ee90;
  border: 2px solid #006400;
  border-radius: 10px;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
}

.close-button {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,  .close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.checkmark {
  color: #006400;
  font-size: 24px;
  margin-right: 10px;
}
</style>