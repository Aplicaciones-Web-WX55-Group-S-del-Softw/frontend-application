<script>
export default { name: 'contact-card',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      },
      fields: ['firstName', 'lastName', 'email', 'phone', 'message']
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
  <div class="cardC rectangle">
    <div class="cardC">
      <div class="cardC-header">
        <div class="cardC-title">Contact us today and together let's grow your <span class="agricultural">agricultural</span> project!</div>
        <button class="whatsapp-button">
          <a href="https://wa.me/+51914823480?text=Hello,%20I%20would%20like%20to%20make%20an%20inquiry." target="_blank">
            <img class="whatsapp-image" src="../../../assets/whatsapp.png" alt="WhatsApp" />
          </a>
        </button>
      </div>
      <div class="cardC-content">
        <form @submit.prevent="onSubmit" class="form-container">
          <p class="small-text">or send a message</p>
          <div class="input-row">
            <div class="input-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" v-model="form.firstName">
            </div>
            <div class="input-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" v-model="form.lastName">
            </div>
          </div>
          <div class="input-group wide-input">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" v-model="form.email">
          </div>
          <div class="input-group wide-input">
            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone" v-model="form.phone">
          </div>
          <div class="input-group wide-input">
            <label for="message">Message</label>
            <textarea id="message" name="message" v-model="form.message"></textarea>
          </div>
          <button type="submit" class="submit-button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>

.rectangle {
  width: 360px;
  height: 620px;
  background-color: #EFEFEF;
}

.cardC-title {
  font-size: 1.6em;
  font-weight: bold;
  margin-left: 45px;
  margin-top: 20px;
}

.agricultural {
  color: #44604D;
}

.input-row {
  display: flex;
  justify-content: flex-start;
  width: 85%;
  margin-top: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.input-group input {
  width: 100%;
}

.input-group label {
  font-size: 0.9em;
}

.input-row .input-group input {
  width: 82%;
}

.input-row .input-group:first-child input {
  margin-right: 10px;
}

.input-row .input-group:last-child input {
  width: 90%;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  margin-top: 50px;
}

.wide-input input {
  width: 243.5px;
}

.wide-input textarea {
  width:  243.5px;
  height: 100px;
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
  margin-left: 85px;
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
  height: 50px;
  width: 240px;
  margin-left: 60px;
  margin-top: 17px;
}

.whatsapp-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

@keyframes shrink {
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.whatsapp-button:active {
  animation: shrink 0.2s;
}

.small-text {
  font-size: 0.8em;
  margin-top: -45px;
  margin-left: 69px;
}

</style>