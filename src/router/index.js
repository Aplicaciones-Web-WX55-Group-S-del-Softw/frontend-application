import { createRouter, createWebHistory } from "vue-router";

/*
import registercrops from "../public/pages/registercrops.vue";
import ListshedComponent from "../public/pages/listshed.component.vue";
import listcropsComponent from "../public/pages/listcrops.component.vue";
import ListanimalsComponent from "../public/pages/listanimals.component.vue";
import StatisticsCard from "../monitoring/components/statistics-card/statistics-card.vue";
import MonitoringCard from "../monitoring/components/monitoring-card/monitoring-card.vue";
import TaskPlanningCard from "../monitoring/components/task-card/task-planning-card.vue";
import TaskTableCard from "../monitoring/components/task-card/task-table-card.vue";
import TaskDetailsCard from "../monitoring/components/task-card/task-details-card.vue";
import FinancialCard from "../monitoring/components/statistics-card/financial-card.vue";
import FinishedTaskCard from "../monitoring/components/statistics-card/finished-task-card.vue";

import MonitoringCard from "../monitoring/components/monitoring-card/monitoring-card.vue";
import TaskTableCard from "../monitoring/components/task-card/task-table-card.vue";

import FinishedTaskCard from "../monitoring/components/statistics-card/finished-task-card.vue";
import statisticsCard from "../monitoring/components/statistics-card/statistics-card.vue";
import listcropsComponent from "../public/pages/listcrops.component.vue";
import registerDetailsComponent from "../public/pages/register-details.component.vue";
import addanimalsComponent from "../public/pages/addanimals.component.vue";
import registercrops from "../public/pages/registercrops.vue";
import ListshedComponent from "../public/pages/listshed.component.vue";
import ListanimalsComponent from "../public/pages/listanimals.component.vue";
import detailedMonitoringComponent from "../public/pages/detailed-monitoring.component.vue";


 */
import HomeComponent from "../public/pages/home.component.vue";
import MonitoringCard from "../monitoring/components/monitoring-card/monitoring-card.vue";
import TaskTableCard from "../monitoring/components/task-card/task-table-card.vue";
import registerDetailsComponent from "../public/pages/register-details.component.vue";
import addanimalsComponent from "../public/pages/addanimals.component.vue";
import registercrops from "../public/pages/registercrops.vue";
import ListanimalsComponent from "../public/pages/listanimals.component.vue";
import listcropsComponent from "../public/pages/listcrops.component.vue";
import TaskPlanningCard from "../monitoring/components/task-card/task-planning-card.vue";

/*
import registerExpensesComponent from "../public/pages/register-expenses.component.vue";
import detailedMonitoringComponent from "../public/pages/detailed-monitoring.component.vue";

import addanimalsComponent from "../public/pages/addanimals.component.vue";
import registercrops from "../public/pages/registercrops.vue";
import ListshedComponent from "../public/pages/listshed.component.vue";
import listcropsComponent from "../public/pages/listcrops.component.vue";
import RegisterAliments from "../public/pages/register-feeds.vue";
import ListanimalsComponent from "../public/pages/listanimals.component.vue";
import registerExpensesComponent from "../public/pages/register-expenses.component.vue";

*/
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/home',component:HomeComponent},
        {path:'/monitoring',component:MonitoringCard},
        {path:'/tasks',component:TaskTableCard},
       // {path:'/statistics', component:statisticsCard},
        {path:'/shed/new', component:registerDetailsComponent, meta: {title: 'Agregar Galpón'}},
        {path:'/animal/new', component:addanimalsComponent, meta: {title: 'Agregar Animal'}},
        {path:'/register/crops', component:registercrops, meta: {title: 'RegisterCrops'}},
        {path:'/list/animals', component:ListanimalsComponent, meta: {title: 'List Animals'}},
        {path:'/list/crops', component:listcropsComponent, meta: {title: 'List Crops'}},
        {path:'/tasks/new',component:TaskPlanningCard},


        /*

                {path:'/register-details', component:registerDetailsComponent, meta: {title: 'RegisterDetails'}},
        {path:'/detailed-monitoring', component:detailedMonitoringComponent, meta: {title: 'DetailedMonitoring'}},

  routes: [
    { path: "/farm-card", component: FarmCard, meta: { title: "Farm Card" } }
  ]
        {path:'/climate', component:climateComponent, meta: {title: 'Climate'}},
  {path:'/registerexpenses', component:registerExpensesComponent, meta: {title: 'Register Expenses'}},
      {path:'/listcrops', component:listcropsComponent, meta: {title: 'List Crops'}},


         */

    //  {path:'/registerfeeds', component:RegisterAliments, meta: {title: 'Register Aliments'}},






    ]
    });

export default router;