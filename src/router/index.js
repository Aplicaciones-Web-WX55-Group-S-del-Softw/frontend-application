import {createRouter, createWebHistory} from "vue-router";
import detailedMonitoringComponent from "../public/pages/detailed-monitoring.component.vue";
import emergencyComponent from "../public/pages/emergency.component..vue";
import registerDetailsComponent from "../public/pages/register-details.component.vue";
import climateComponent from "../public/pages/climate.component.vue";



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/detailed-monitoring'},
        {path:'/detailed-monitoring', component:detailedMonitoringComponent, meta: {title: 'DetailedMonitoring'}},
        {path:'/emergency', component:emergencyComponent, meta: {title: 'Emergency'}},
        {path:'/register-details', component:registerDetailsComponent, meta: {title: 'RegisterDetails'}},
        {path:'/climate', component:climateComponent, meta: {title: 'Climate'}},
        {path:'/agregargalpón', component:registerDetailsComponent, meta: {title: 'Agregar Galpón'}},


    ]

    });

export default router;