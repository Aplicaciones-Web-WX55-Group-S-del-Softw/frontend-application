import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "../public/pages/home.component.vue";
import MonitoringCard from "../monitoring/components/monitoring-card/monitoring-card.vue";
import TaskTableCard from "../monitoring/components/task-card/task-table-card.vue";
import registerDetailsComponent from "../public/pages/register-details.component.vue";
import addanimalsComponent from "../public/pages/addanimals.component.vue";
import registercrops from "../public/pages/registercrops.vue";
import ListanimalsComponent from "../public/pages/listanimals.component.vue";
import listcropsComponent from "../public/pages/listcrops.component.vue";
import TaskPlanningCard from "../monitoring/components/task-card/task-planning-card.vue";
import statisticsCard from "../monitoring/components/statistics-card/statistics-card.vue";
import finishedTaskCard from "../monitoring/components/statistics-card/finished-task-card.vue";
import FinancialCard from "../monitoring/components/statistics-card/financial-card.vue";
import detailedMonitoringComponent from "../public/pages/detailed-monitoring.component.vue";
import taskTableCard from "../monitoring/components/task-card/task-table-card.vue";
import taskDetailsCard from "../monitoring/components/task-card/task-details-card.vue";
import weatherCard from "../weather/components/weather-card.vue";
import contactPage from "../social-interaction/pages/contact-page.vue";
import listshedComponent from "../public/pages/listshed.component.vue";
import emergencyComponent from "../monitoring/components/emergency-card/emergency.component.vue";
import ProductionCard from "../monitoring/components/statistics-card/production-card.vue";
import RegisterFeeds from "../public/pages/register-feeds.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',component:HomeComponent},
        {path:'/home',component:HomeComponent},
        {path:'/monitoring',component:MonitoringCard},
        {path:'/tasks',component:TaskTableCard},
        {path:'/statistics', component:statisticsCard},
        {path:'/shed/new', component:registerDetailsComponent, meta: {title: 'Add Shed'}},
        {path:'/animal/new', component:addanimalsComponent, meta: {title: 'Add Animal'}},
        {path:'/register/crops', component:registercrops, meta: {title: 'RegisterCrops'}},
        {path:'/list/animals', component:ListanimalsComponent, meta: {title: 'List Animals'}},
        {path:'/list/crops', component:listcropsComponent, meta: {title: 'List Crops'}},
        {path:'/tasks/new',component:TaskPlanningCard},
        {path:'/finished/tasks',component:finishedTaskCard},
        {path:'/financial/statistics',component:FinancialCard},
        {path:'/detail/monitoring',component:detailedMonitoringComponent},
        {path:'/tasks/:id/details',component:taskDetailsCard},
        {path:'/weather',component:weatherCard},
        {path:'/farm/description/:id',component:contactPage},
        {path:'/list/sheds',component:listshedComponent},
        {path:'/emergency/new',component:emergencyComponent},
        {path:'/registerfeeds',component:RegisterFeeds},
        { path: '/production/statistics', component: ProductionCard, meta: { title: 'Production Statistics' }},




    ]
});

export default router;