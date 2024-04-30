import FarmCard from "../search/components/farm-cards/farm-card.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
  routes: [
    { path: "/farm-card", component: FarmCard, meta: { title: "Farm Card" } }
  ]
})
export default router;