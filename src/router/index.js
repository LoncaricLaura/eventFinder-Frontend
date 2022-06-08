import { createRouter, createWebHistory } from 'vue-router'
import homeView from '/src/views/homeView.vue'
const routes = [
    {
        path: '/',
        name: 'homeView',
        component: homeView,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
