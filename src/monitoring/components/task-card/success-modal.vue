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
      <p><span class="checkmark">✔️</span>The task has been saved successfully.</p>
    </div>
  </div>
</template>

<style scoped>
.back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: darkgreen;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: darkgreen;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 950px;
  top: 300px;
  width: 40%;
  height: 30%;
  overflow:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #90ee90;
  border: 2px solid #006400;
  border-radius: 10px;
  margin: 15% auto;
  padding: 10px;
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