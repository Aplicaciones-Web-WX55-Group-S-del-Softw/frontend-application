<script>
import PaymentCard from "../components/payment-card/payment-card.component.vue";

export default {
  name: "payment-subscription",
  components: { PaymentCard},

}

</script>
<template>
  <div class="container-general">

  <h2>Duración</h2>
  <p class="text-description">A más duración, más personas verán el anuncio</p>

    <pv-card  class="pv-card-2"  >
<template #content>
  <h1 class="title-card">Gestiona y destaca tu granja</h1>
  <p class="sub-header">con un solo pago de</p>
  <p class="price">S/250 <span class="mes">/mes</span></p>
</template>

  </pv-card>

    <pv-card class="pv-card-1">
      <template #content>
        <p class="mat-card-title">3 meses</p>
        <p class="sub-header">con un solo pago de</p>
        <p class="price">S/130</p>
      </template>

    </pv-card>
  </div>
<payment-card/>
  <router-link  v-slot="{navigate, href}" :to="'/subscriptions'" custom>

    <button class="choose-plan-btn " @click="navigate">Elegir Plan</button>

  </router-link>


</template>

<style scoped>

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

.pv-card-1 {

  height:200px;
  width: 300px;
  border-radius: 10px;
  border: 5px solid #4CAF50;


}
.pv-card-2 {

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
  margin-top: 15px;

}
.text-description{
  margin-top: -15px;
}
</style>