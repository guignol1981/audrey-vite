import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Portfolio from '../views/Portfolio.vue';
import AdminPhoto from '../views/AdminPhoto.vue';
import AdminTag from '../views/AdminTag.vue';

export const RoutesNames = {
    Portfolio: 'portfolio',
    Boutique: 'boutique',
    Services: 'services',
    Admin: 'admin',
    AdminPhotos: 'admin-photos',
    AdminTags: 'admin-tags',
    AdminMedias: 'admin-medias',
};

const routes: RouteRecordRaw[] = [
    {
        path: '/portfolio',
        name: RoutesNames.Portfolio,
        component: Portfolio,
    },
    {
        path: '/boutique',
        name: RoutesNames.Boutique,
        component: () => import('../views/Boutique.vue'),
    },
    {
        path: '/services',
        name: RoutesNames.Services,
        component: () => import('../views/Services.vue'),
    },
    {
        path: '/admin',
        name: RoutesNames.Admin,
        component: () => import('../views/Admin.vue'),
        children: [
            {
                path: '/photos',
                name: RoutesNames.AdminPhotos,
                component: AdminPhoto,
            },
            {
                path: '/tags',
                name: RoutesNames.AdminTags,
                component: AdminTag,
            },
            {
                path: '/:pathMatch(.*)*',
                redirect: '/photos',
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
