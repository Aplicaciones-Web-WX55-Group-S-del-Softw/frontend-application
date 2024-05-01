import {createRouter, createWebHistory} from "vue-router";
import detailedMonitoringComponent from "../public/pages/detailed-monitoring.component.vue";
import emergencyComponent from "../public/pages/emergency.component..vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/detailed-monitoring'},
        {path:'/detailed-monitoring', component:detailedMonitoringComponent, meta: {title: 'DetailedMonitoring'}},
        {path:'/emergency', component:emergencyComponent, meta: {title: 'Emergency'}},
    ]

});

export default router;