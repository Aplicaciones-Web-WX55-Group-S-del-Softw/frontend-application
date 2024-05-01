import {createRouter, createWebHistory} from "vue-router";
import detailedMonitoringComponent from "../public/pages/detailed-monitoring.component.vue";
import registerDetailsComponent from "../public/pages/register-details.component.vue";
import climateComponent from "../public/pages/climate.component.vue";
import addanimalsComponent from "../public/pages/addanimals.component.vue";
import registercrops from "../public/pages/registercrops.vue";
import ListshedComponent from "../public/pages/listshed.component.vue";
import listcropsComponent from "../public/pages/listcrops.component.vue";
import RegisterAliments from "../public/pages/register-aliments.vue";
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


    ]

    });

export default router;