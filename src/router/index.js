import StatisticsCard from "../shared/components/statistics-card/statistics-card.vue";
import MonitoringCard from "../shared/components/monitoring-card/monitoring-card.vue";
import TaskPlanningCard from "../shared/components/task-card/task-planning-card.vue";
import TaskTableCard from "../shared/components/task-card/task-table-card.vue";
import FinancialCard from "../shared/components/statistics-card/financial-card.vue";
import TaskDetailsCard from "../shared/components/task-card/task-details-card.vue";
import FinishedTaskCard from "../shared/components/statistics-card/finished-task-card.vue";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/statistics', component: StatisticsCard, meta: { title: 'Statistics'}},
        { path: '/', component: MonitoringCard, meta: { title: 'Monitoring'}},
        { path: '/task-planning', component: TaskPlanningCard, meta: { title: 'Task Planning'}},
        { path: '/tasks', component: TaskTableCard, meta: { title: 'Tasks'}},
        { path: '/new-task', component: TaskPlanningCard, meta: { title: 'New Task' }},
        { path: '/tasks-details/:id', component: TaskDetailsCard, meta: { title: 'Task Details' }},
        { path: '/financial-statistics', component: FinancialCard, meta: { title: 'Financial Statistics' }},
        { path: '/finished-tasks', component: FinishedTaskCard, meta: { title: 'Finished Tasks' }},
    ]
});

export default router;