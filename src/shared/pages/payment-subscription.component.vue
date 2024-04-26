<script>
import PaymentCard from "../components/payment-card/payment-card.component.vue";

export default {
  name: "payment-subscription",
  components: {PaymentCard}
}
</script>
<template>
  <div class="container-general">

  <h2>Duración</h2>
  <p>A más duración, más personas verán el anuncio</p>
  <pv-card class="pv-card">
<template #content>
  <p class="mat-card-title">3 meses</p>
  <p class="sub-header">con un solo pago de</p>
  <p class="price">S/130</p>
</template>

  </pv-card>

  </div>
<payment-card/>



</template>


<!--<div class="payment-container">
  <mat-card class="payment-card">
    <mat-card-content>
      <h2 class="title-details">Detalles de la Tarjeta</h2>
      <div class="input-group">
        <mat-form-field class="full-width">
          <input matInput placeholder="Número de Tarjeta" aria-label="Número de Tarjeta">
        </mat-form-field>
      </div>

      <div class="input-group">
        <mat-form-field class="half-width">
          <input matInput placeholder="MM/AA" aria-label="MM/AA">
        </mat-form-field>
        <mat-form-field class="half-width">
          <input matInput placeholder="CVV" aria-label="CVV">
        </mat-form-field>
      </div>

      <div class="input-group">
        <mat-form-field class="full-width">
          <input matInput placeholder="Correo Electrónico" aria-label="Correo Electrónico">
        </mat-form-field>
      </div>
    </mat-card-content>

  </mat-card>
  <div class="qr-code-container">
    <h2>PAGA MÁS RÁPIDO </h2>
    <h3 class="description-qr">Escanea este QR con la billetera electrónica de tu banco </h3>

    <img src="assets/qr-logo.png" alt="QR Code">
  </div>
</div>-->


<style scoped>

.pv-card {

  height:150px;
  width: 300px;
  border-radius: 10px;
  border: 5px solid #4CAF50;

}
 .mat-card-title{
  color: darkgreen !important;
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
  font-size: 20px; /* Ajusta el tamaño del texto */
   margin-top:-10px;
}

.container {
  display: flex;
  justify-content: flex-start; /* Alinea el contenido a la izquierda */
  align-items: center; /* Centra verticalmente el contenido */
  height: 100vh; /* Ocupa toda la altura de la pantalla */
}

/* Estilo para el cuadro que contiene el formulario */
.form-container {
  background-color: #f0f0f0; /* Color de fondo del cuadro */
  padding: 20px; /* Espaciado interno */
  border-radius: 10px; /* Borde redondeado */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Sombra */
  width: 300px; /* Ancho del cuadro */
}

/* Estilo para el título */
h2 {
  margin-top: 0; /* Elimina el margen superior por defecto */
}

/* Estilo para los botones */
.mat-raised-button {
  margin-top: 20px; /* Espaciado superior */
  width: 100%; /* Ancho completo */
}

/* Estilo para los campos de entrada */
.mat-form-field {
  width: 100%; /* Ancho completo */
}
/* Estilo para el contenedor del formulario de facturación */
.billing-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Divide en 4 columnas */
  grid-template-rows: repeat(4, auto); /* Divide en 2 filas */
  gap: 10px; /* Espacio entre los elementos */
  width: 30%;
}

/* Estilo para los campos de entrada */
.mat-form-field {
  width: 100%; /* Ancho completo */
  grid-column: span 2; /* Ocupa el ancho de 2 columnas */
}
/* Estilo para el contenedor general */
.container-general {
  display: flex;
  justify-content: center; /* Centra horizontalmente el contenido */
  align-items: center; /* Centra verticalmente el contenido */
  flex-direction: column; /* Alinea los elementos en columna */
  margin-top: 40px;
}

.choose-plan-btn {
  margin-top: 10px;
  background-color: #4CAF50 !important;
  color: #ffffff !important;
  transition: transform 0.3s ease-in-out;
  width: 200px; /* Establece el ancho del botón */
  display: block; /* Convertir el botón en un bloque para aplicar margen automático */
  margin-left: auto; /* Centrar horizontalmente */
  margin-right: auto; /* Centrar horizontalmente */
}

.duration-btn{
  margin-top: 5px;
  background-color: #4CAF50 !important;
  transition: transform 0.3s ease-in-out;
  width: 200px; /* Establece el ancho del botón */
  margin-left: 20px; /* Agrega margen inferior al contenedor de botones */
  margin-bottom: 20px; /* Agrega margen inferior al contenedor de botones */
}


.price {
  color: black !important; /* Cambia el color del texto a negro */
  color: black !important; /* Cambia el color del texto a negro */
  font-size: 35px; /* Ajusta el tamaño del texto */
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
}
.sub-header{
  margin-left: 1px;
  color: gray !important;
  font-size: 20px; /* Ajusta el tamaño del texto */
}

h2{
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
  font-size: 50px; /* Ajusta el tamaño del texto */

}
</style>