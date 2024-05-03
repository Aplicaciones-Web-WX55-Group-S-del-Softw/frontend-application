<script>
export default { name: 'contact-card',
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
                <input type="text" id="name" name="name" v-model="form.name">
              </div>
              <div class="input-group">
                <label for="last name">Last name</label>
                <input type="text" id="lastname" name="lastname" v-model="form.lastname">
              </div>
            </div>
            <div class="input-group wide-input">
              <label for="mail">Mail</label>
              <input type="text" id="email" name="email" v-model="form.email">
            </div>
            <div class="input-group wide-input">
              <label for="telephone">Telephone</label>
              <input type="text" id="telephone" name="telephone" v-model="form.telephone">
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
  </div>

</template>
<style>
.div-contact{
  margin-bottom: 60%;
}
.rectangle {
  width: 360px;
  height: 620px;
  background-color: #EFEFEF;
  position: absolute;
  top: 220%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cardC-title {
  font-size: 1.6em;
  font-weight: bold;
  margin-top: 20px;
  text-align: center; /* Centra el texto horizontalmente */

}

.agricola {
  color: #278f4a;
}

.input-row {
  display: flex;
  justify-content: flex-start;
  width: 85%;
  margin-top: 15px; /* Ajusta este valor para mover la primera fila de entrada más abajo */
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; /* Ajusta este valor para cambiar el espacio entre los campos del formulario */
}

.input-group input {
  width: 100%; /* Ajusta este valor para cambiar el ancho de los campos de entrada */
}

.input-group label {
  font-size: 0.9em; /* Ajusta este valor para cambiar el tamaño de la letra de los campos de entrada */
}

.input-row .input-group input {
  width: 82%;
}

.input-row .input-group:first-child input {
  margin-right: 10px;
}

.input-row .input-group:last-child input {
  width: 90%; /* Ajusta este valor para cambiar el ancho del campo de entrada del apellido */
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: 50px;
}

.wide-input input {
  width: 165%;
}

.wide-input textarea {
  width:  243.5px;
  height: 100px; /* Ajusta este valor para cambiar la altura del campo de entrada "mensaje" */
}

.submit-button {
  border: none; /* Quita el borde */
  box-shadow: 0px 0px 2px 2px #35844E; /* Añade un borde del mismo color que el botón */
  border-radius: 10px; /* Ajusta este valor para cambiar el borde del botón "Enviar" */
  font-size: 1em;
  width: 90px; /* Ajusta este valor para cambiar el ancho del botón "Enviar" */
  height: 45px; /* Ajusta este valor para cambiar la altura del botón "Enviar" */
  color: #FFFFFF; /* Cambia el color de la letra a blanco */
  background-color: #35844E; /* Cambia el color de fondo del botón */
  font-weight: bold; /* Hace que el texto esté en negrita */
  margin-top: 10px; /* Ajusta este valor para mover el botón más arriba */
  margin-left: 85px; /* Ajusta este valor para mover el botón más a la izquierda */
  transition: all 0.3s ease; /* Añade una transición a todas las propiedades */
}

.submit-button:active {
  animation: bounce 0.3s; /* Aplica la animación de rebote cuando se presiona el botón */
}

@keyframes bounce {
  0%   { transform: scale(1); }
  50%  { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.whatsapp-image {
  height: 43px; /* Ajusta este valor para cambiar la altura de la imagen */
  margin-left: 30px; /* Ajusta este valor para mover la imagen más a la derecha */
  margin-top: 20px; /* Ajusta este valor para mover la imagen más abajo */
  border-radius: 5px; /* Establece el radio del borde para que sea redondeado */

}

.whatsapp-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left:40px;
}


.whatsapp-button:active {
  animation: shrink 0.2s; /* Aplica la animación */
}

.small-text {
  font-size: 0.8em; /* Ajusta este valor para cambiar el tamaño de la letra */
  margin-top: -45px; /* Ajusta este valor para mover el texto más arriba */
  margin-left: 90px; /* Ajusta este valor para mover el texto más a la derecha */
}

</style>