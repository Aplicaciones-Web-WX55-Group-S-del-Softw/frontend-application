import StatisticsCard from "../shared/components/statistics-card/statistics-card.vue";
import MonitoringCard from "../shared/components/monitoring-card/monitoring-card.vue";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [


        { path: '/statistics', component: StatisticsCard, meta: { title: 'Statistics'}},
        { path: '/', component: MonitoringCard, meta: { title: 'Monitoring'}},


    ]
});

export default router;