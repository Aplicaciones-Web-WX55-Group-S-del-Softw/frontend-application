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
        <p class="price">$130<span class="mes">/month</span> </p>
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

<style scoped>
.cardsx{
  display: flex;
  justify-content: center;
  gap: 50px;
  line-height: 1.8;
}
.benefits{
  text-align: left;
  margin-left: 50px;
}
.choose-plan-btn{
  margin-top: -10px;
  margin-left:60px;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 7px 15px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 50%;

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
  max-width:200px;
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
  text-align: left;


}
.mt-2{
  line-height: 2.3;
  width: 320px;
  height: 380px;
  border-radius: 10px;
  border: 2px solid #4CAF50;
}
.mt-1{
  margin-top: 50px;
  width: 350px;
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



