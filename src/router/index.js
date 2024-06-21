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
import taskDetailsCard from "../monitoring/components/task-card/task-details-card.vue";
import weatherCard from "../weather/components/weather-card.vue";
import listshedComponent from "../public/pages/listshed.component.vue";
import emergencyComponent from "../monitoring/components/emergency-card/emergency.component.vue";
import ProductionCard from "../monitoring/components/statistics-card/production-card.vue";
import RegisterFeeds from "../public/pages/register-feeds.vue";
import ListEmployee from "../monitoring/components/employee/list-employee.vue";
import AddEmployee from "../monitoring/components/add-employee/add-employee.vue";
import editemployee from "../public/pages/editemployee.component.vue";
import SubscriptionsCardComponent from "../register/components/subscription/subscriptions-card.component.vue";
import LoginCard from "../register/components/login-card/login-card.vue";
import PaymentSubscription from "../register/pages/payment-subscription/payment-subscription.vue";
import CreateProfile from "../register/components/create-profile/create-profile.component.vue";
import RoleProfileComponent from "../register/components/role-profile/role-profile.component.vue";
import profileFarm from "../profile-farm/components/profile-farm/profile-farm.vue";
import FarmDescription from "../profile-farm/components/farm-description/farm-description.vue";
import EditFarm from "../profile-farm/components/edit-farm/edit-farm.vue";
import SignInComponent from "../register/pages/sign-in.component.vue";
import SignUpComponent from "../register/pages/sign-up.component.vue";
import {authenticationGuard} from "../register/services/authentication.guard.js";


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect: '/home'},
        {path:'/home', name:'home', component:HomeComponent},
        {path:'/sign-in', name:'sign-in', component: SignInComponent, meta: {title: 'Sign In'}},
        {path:'/sign-up', name:'sign-up', component: SignUpComponent, meta: {title: 'Sign Up'}},
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
        {path:'/list/sheds',component:listshedComponent},
        {path:'/emergency/new',component:emergencyComponent},
        {path:'/employees',component:ListEmployee},
        {path:'/register/feeds',component:RegisterFeeds},
        {path: '/production/statistics', component: ProductionCard, meta: { title: 'Production Statistics' }},
        {path:'/add/employees',component:AddEmployee},
        {path:'/edit/employee/:id', component: editemployee},

        {path:'/subscriptions',component:SubscriptionsCardComponent},
        {path:'/login',component:LoginCard},
        {path:'/payment/subscription',component:PaymentSubscription},
        {path:'/create/profile',component:CreateProfile},
        {path:'/role/profile',component:RoleProfileComponent},
        {path:'/profile/farm',component:profileFarm},
        {path:'/farm/description/:id',component:FarmDescription},
        {path:'/edit/farm/:id',component:EditFarm}

    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Farm Management System';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;