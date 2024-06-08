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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
}

.choose-plan-btn {
  margin-top: 10px;
  background-color: #4CAF50;
  color: #ffffff;
  transition: transform 0.3s ease-in-out;
  width: 200px;
  height: 60px; /* Increase the height of the button */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #ffffff; /* Add a border to the button */
  border-radius: 5px; /* Add a slight roundness to the button's corners */
}

.choose-plan-btn:hover {
  transform: scale(1.05);
}

.container-general h1 {
  font-weight: bold;
  font-size: 70px;
  margin-top: 15px;
  text-align: center; /* Center the title text */
}

@media (max-width: 768px) {
  .choose-plan-btn {
    width: 30%;
    font-size: 16px;
  }

  .container-general h1 {
    font-size: 50px;
    margin-top: 120px;
  }
}
</style>