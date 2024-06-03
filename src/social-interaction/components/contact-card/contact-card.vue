<script>
export default {
  name: 'contact-card',
  data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: ''
      },
      fields: ['nombre', 'apellido', 'correo', 'telefono', 'mensaje']
    };
  },
  methods: {
    onSubmit() {
      alert('Contact sent');
    }
  }
}
</script>

<template>
  <div class="div-contact">
    <div class="cardC rectangle">
      <div class="cardC">
        <div class="cardC-header">
          <div class="cardC-title">Contact us today and together let's make your <span class="agricola">agricultural</span> project grow!</div>
          <button class="whatsapp-button">
            <a href="https://wa.me/+51914823480?text=Hello,%20me%20would like to%20make%20a%20consultation." target="_blank">
              <img class="whatsapp-image" src="../../../assets/whatsapp.png" alt="WhatsApp" />
            </a>
          </button>
        </div>
        <div class="cardC-content">
          <form @submit.prevent="onSubmit" class="form-container">
            <p class="small-text">or send a message</p>
            <div class="input-row">
              <div class="input-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" v-model="form.nombre">
              </div>
              <div class="input-group">
                <label for="lastname">Last name</label>
                <input type="text" id="lastname" name="lastname" v-model="form.apellido">
              </div>
            </div>
            <div class="input-group wide-input">
              <label for="email">Mail</label>
              <input type="text" id="email" name="email" v-model="form.correo">
            </div>
            <div class="input-group wide-input">
              <label for="telephone">Telephone</label>
              <input type="text" id="telephone" name="telephone" v-model="form.telefono">
            </div>
            <div class="input-group wide-input">
              <label for="message">Message</label>
              <textarea id="message" name="message" v-model="form.mensaje"></textarea>
            </div>
            <button type="submit" class="submit-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.div-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.rectangle {
  width: 360px;
  background-color: #EFEFEF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.cardC-title {
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
}

.agricola {
  color: #278f4a;
}

.input-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 48%;
}

.input-group input {
  width: 100%;
}

.input-group label {
  font-size: 0.9em;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.wide-input {
  width: 100%;
}

.wide-input input, .wide-input textarea {
  width: 100%;
}

.submit-button {
  border: none;
  box-shadow: 0px 0px 2px 2px #35844E;
  border-radius: 10px;
  font-size: 1em;
  width: 90px;
  height: 45px;
  color: #FFFFFF;
  background-color: #35844E;
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.submit-button:active {
  animation: bounce 0.3s;
}

@keyframes bounce {
  0%   { transform: scale(1); }
  50%  { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.whatsapp-image {
  height: 43px;
  border-radius: 5px;
}

.whatsapp-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.whatsapp-button a {
  display: flex;
  justify-content: center;
}

.whatsapp-button:active {
  animation: shrink 0.2s;
}

.small-text {
  font-size: 0.8em;
  margin-bottom: 10px;
}
</style>
