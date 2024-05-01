import StatisticsCard from "../monitoring/components/statistics-card/statistics-card.vue";
import MonitoringCard from "../monitoring/components/monitoring-card/monitoring-card.vue";
import TaskPlanningCard from "../monitoring/components/task-card/task-planning-card.vue";
import TaskTableCard from "../monitoring/components/task-card/task-table-card.vue";
import FinancialCard from "../monitoring/components/statistics-card/financial-card.vue";
import TaskDetailsCard from "../monitoring/components/task-card/task-details-card.vue";
import FinishedTaskCard from "../monitoring/components/statistics-card/finished-task-card.vue";
import {createRouter, createWebHistory} from "vue-router";
import detailedMonitoringComponent from "../public/pages/detailed-monitoring.component.vue";
import registerDetailsComponent from "../public/pages/register-details.component.vue";
import climateComponent from "../public/pages/climate.component.vue";
import addanimalsComponent from "../public/pages/addanimals.component.vue";
import registercrops from "../public/pages/registercrops.vue";
import ListshedComponent from "../public/pages/listshed.component.vue";
import listcropsComponent from "../public/pages/listcrops.component.vue";
import RegisterAliments from "../public/pages/register-feeds.vue";
import ListanimalsComponent from "../public/pages/listanimals.component.vue";
import registerExpensesComponent from "../public/pages/register-expenses.component.vue";



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/detailed-monitoring'},
        {path:'/detailed-monitoring', component:detailedMonitoringComponent, meta: {title: 'DetailedMonitoring'}},
        {path:'/register-details', component:registerDetailsComponent, meta: {title: 'RegisterDetails'}},
        {path:'/climate', component:climateComponent, meta: {title: 'Climate'}},
        {path:'/addshed', component:registerDetailsComponent, meta: {title: 'Agregar Galpón'}},
        {path:'/addanimal', component:addanimalsComponent, meta: {title: 'Agregar Animal'}},
        {path:'/registercrops', component:registercrops, meta: {title: 'RegisterCrops'}},
        {path:'/listshed', component:ListshedComponent, meta: {title: 'List Shed'}},
        {path:'/listcrops', component:listcropsComponent, meta: {title: 'List Crops'}},
        {path:'/registerfeeds', component:RegisterAliments, meta: {title: 'Register Aliments'}},
        {path:'/listanimals', component:ListanimalsComponent, meta: {title: 'List Animals'}},
        {path:'/registerexpenses', component:registerExpensesComponent, meta: {title: 'Register Expenses'}},
        { path: '/statistics', component: StatisticsCard, meta: { title: 'Statistics'}},
        { path: '/', component: MonitoringCard, meta: { title: 'Monitoring'}},
        { path: '/tasks/new', component: TaskPlanningCard, meta: { title: 'Task Planning'}},
        { path: '/tasks', component: TaskTableCard, meta: { title: 'Tasks'}},
        { path: '/tasks/:id/details', component: TaskDetailsCard, meta: { title: 'Task Details' }},
        { path: '/financial/statistics', component: FinancialCard, meta: { title: 'Financial Statistics' }},
        { path: '/finished/tasks', component: FinishedTaskCard, meta: { title: 'Finished Tasks' }},
    ]
    });

export default router;