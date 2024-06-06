<script xmlns:text-align="http://www.w3.org/1999/XSL/Transform">
import ImageCard from "../image-card/image-card.vue";

export default {
  name: "subscriptions-card",
  components: { ImageCard },
  methods: {
    showCard250(navigate) {
      this.$emit('show-card', { btn: 1 }); // Emitir evento para mostrar la tarjeta de S/250
      navigate(); // Llamar a la función navigate
    },
    showCard130(navigate) {
      this.$emit('show-card', { btn: 2 }); // Emitir evento para mostrar la tarjeta de S/130
      navigate(); // Llamar a la función navigate
    },


  }
}
</script>
<template>
  <h1 class="text-center">Choose how long you want to advertise your farm</h1>
  <h2 class="sub-title">Choose a plan</h2>
  <div class="cardsx">
    <pv-card class="mt-1">
      <template #content>
        <h1 class="title-card">Manage and highlight your farm</h1>
        <p class="sub-header">with a single payment of</p>
        <p class="price">$250 <span class="mes">/month</span></p>
        <router-link v-slot="{ navigate, href }" :to="'/payment/subscription'" custom>
          <button class="choose-plan-btn" @click="showCard250(navigate)">Choose Plan</button>
        </router-link>
        <ul class="benefits">
          <li>Notifications and mobile access</li>
          <li>Highlighted notice</li>
          <li>Detailed farm information display</li>
          <li>Assignment of tasks to collaborators</li>
          <li>Many more features</li>
        </ul>
      </template>
    </pv-card>
    <pv-card class="mt-2">
      <template #content>
        <h1 class="title-card">3 months</h1>
        <p class="sub-header">with a single payment of</p>
        <p class="price">$130 </p>
        <router-link v-slot="{ navigate, href }" :to="'/payment/subscription'" custom>
          <button class="choose-plan-btn" @click="showCard130(navigate)">Choose Plan</button>
        </router-link>
        <ul class="benefits">
          <li>Up to 15 photos in High Quality</li>
          <li>Payment with Plin/Yape or Card</li>
          <li>YouTube Video</li>
          <li>Prospect sent by mail</li>
        </ul>
      </template>
    </pv-card>
  </div>
  <image-card/>
</template>

<style>
.cardsx{
  display: flex; /* Utiliza flexbox */
  justify-content: center; /* Centra horizontalmente el contenido */

}
.benefits{
  text-align: left;
  margin-left: -20px;
}
.choose-plan-btn{
  margin-top: -10px;
  background-color: #4CAF50; /* Color de fondo */
  border: none; /* Sin borde */
  color: white; /* Color del texto */
  padding: 10px 20px; /* Espacio alrededor del texto */
  text-align: center; /* Centrar texto horizontalmente */
  font-size: 16px; /* Tamaño de fuente */
  cursor: pointer; /* Cambiar cursor al pasar por encima */
  border-radius: 5px; /* Bordes redondeados */
  width: 80%;
}
.choose-plan-btn:hover {
  transform: scale(1.05);
}
.text-center {

  font-size: 50px; /* Ajusta el tamaño del texto */
  margin-top: 180px; /* Ajusta el margen superior para separar el título de las tarjetas */
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
  text-align: center; /* Centra el texto horizontalmente */
  margin-bottom:0px; /* Ajusta el margen inferior para separar el título del contenedor de tarjetas */
}
.sub-title{
  margin-top: 50px; /* Ajusta el margen inferior para separar el título del contenedor de tarjetas */
  text-align: center; /* Centra el texto horizontalmente */
}

.title-card{
  color: darkgreen !important;
  margin-top: -10px;
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
  text-align: left;


}
.mt-2{
  margin-top: 70px;
  width: 300px;
  height: 380px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  margin-left: 20px;

}
.mt-1{
  margin-top: 50px;
  width: 300px;
  height: 480px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
}
.sub-header{
  color: gray !important;
  font-size: 20px; /* Ajusta el tamaño del texto */
  margin-top: -10px;


}
.price {
  color: black !important; /* Cambia el color del texto a negro */
  font-size: 35px; /* Ajusta el tamaño del texto */
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
  margin-top: -10px;

}
.mes{
  color: gray ;
  font-size: 15px; /* Ajusta el tamaño del texto */
  font-weight: normal;
}
</style>



