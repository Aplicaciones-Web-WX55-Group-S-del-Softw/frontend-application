import {createRouter, createWebHistory} from "vue-router";
import SubscriptionsCardComponent from "../shared/components/subscriptions-card/subscriptions-card.component.vue";
import paymentSubscriptionComponent from "../shared/pages/payment-subscription.component.vue";
import subscriptionsCardComponent from "../shared/components/subscriptions-card/subscriptions-card.component.vue";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/subscriptions",component:subscriptionsCardComponent, meta:{title:"SubscriptionsCardComponent"}},
        {path:"/payment-subscriptions",component:paymentSubscriptionComponent, meta:{title:"PaymentSubscriptionComponent"}},
    ]


})
export default router;