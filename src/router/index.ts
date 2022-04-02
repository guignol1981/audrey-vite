import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Service from '../views/Services.vue';
import Portfolio from '../views/Portfolio.vue';
import Boutique from '../views/Boutique.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio,
    },
    {
        path: '/boutique',
        name: 'boutique',
        component: Boutique,
    },
    {
        path: '/services',
        name: 'services',
        component: Service,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
