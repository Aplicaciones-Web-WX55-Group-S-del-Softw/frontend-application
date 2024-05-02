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
      alert('Contacto enviado');
    }
  }
}
</script>

<template>
  <div class="div-contact">
    <div class="cardC rectangle">
      <div class="cardC">
        <div class="cardC-header">
          <div class="cardC-title">¡Contáctanos hoy mismo y juntos hagamos crecer tu proyecto <span class="agricola">agrícola</span>!</div>
          <button class="whatsapp-button">
            <a href="https://wa.me/+51914823480?text=Hola,%20me%20gustaría%20hacer%20una%20consulta." target="_blank">
              <img class="whatsapp-image" src="../../../assets/whatsapp.png" alt="WhatsApp" />
            </a>
          </button>
        </div>
        <div class="cardC-content">
          <form @submit.prevent="onSubmit" class="form-container">
            <p class="small-text">o enviar un mensaje</p>
            <div class="input-row">
              <div class="input-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" v-model="form.nombre">
              </div>
              <div class="input-group">
                <label for="apellido">Apellido</label>
                <input type="text" id="apellido" name="apellido" v-model="form.apellido">
              </div>
            </div>
            <div class="input-group wide-input">
              <label for="correo">Correo</label>
              <input type="text" id="correo" name="correo" v-model="form.correo">
            </div>
            <div class="input-group wide-input">
              <label for="telefono">Telefono</label>
              <input type="text" id="telefono" name="telefono" v-model="form.telefono">
            </div>
            <div class="input-group wide-input">
              <label for="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" v-model="form.mensaje"></textarea>
            </div>
            <button type="submit" class="submit-button">Enviar</button>
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
  top: 205%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cardC-title {
  font-size: 1.6em;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 20px;
}

.agricola {
  color: #44604D;
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
  animation: shrink 0.2s; /* Aplica la animación */
}

.small-text {
  font-size: 0.8em; /* Ajusta este valor para cambiar el tamaño de la letra */
  margin-top: -45px; /* Ajusta este valor para mover el texto más arriba */
  margin-left: 69px; /* Ajusta este valor para mover el texto más a la derecha */
}

</style>