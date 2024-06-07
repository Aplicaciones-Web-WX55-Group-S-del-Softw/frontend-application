<script>
import PaymentCardComponent from "../../components/payment/payment-card.component.vue";
import SubscriptionsCard from "../../components/subscription/subscriptions-card.component.vue";
export default {
  name: "payment-subscription",
  components: {SubscriptionsCard, PaymentCardComponent},
  data() {
    return {
      showCard250x: false, // Inicialmente mostramos la tarjeta de S/250
      showCard130y: false  // Inicialmente mostramos la tarjeta de S/130
    };
  }, methods: {
    handlePayment(navigate) {
      alert('Successful payment');
      navigate();
    }
  }
}


</script>


<template>
  <div class="container-general">
    <h1 class="title-card"  >Manage and highlight your farm</h1>
  </div>
  <payment-card-component/>

  <router-link  v-slot="{navigate, href}" :to="'/home'" custom>

    <button class="choose-plan-btn " @click="handlePayment(navigate)">Paid</button>

  </router-link>
</template>

<style scoped>




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

 .choose-plan-btn:hover {
  transform: scale(1.05);
}
.container-general h1{
  font-weight: bold; /* Ajusta el peso de la fuente a negrita */
  font-size: 70px; /* Ajusta el tamaño del texto */
  margin-top: 15px;

}

</style>