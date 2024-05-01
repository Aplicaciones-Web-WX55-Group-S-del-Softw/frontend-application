<!--<script setup>
import SubscriptionsCard from "./shared/components/subscriptions-card/subscriptions-card.component.vue";
import ImageCard from "./shared/components/image-card/image-card.component.vue";
import PaymentSubscription from "./shared/pages/payment-subscription.component.vue";
</script>

<template>
  <subscriptions-card/>
  <payment-subscription/>
 </template>-->

<script>
export default {
  name:'app',
  title:'FarmLogicTech'
}
</script>

<template>
<header>
  <pv-toolbar class="bg-primary">
  <template #start>
  </template>
  </pv-toolbar>
</header>

<router-view></router-view>
</template>