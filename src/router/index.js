import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Home,
        meta: {
            isLogin: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            isLogin: false
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
//# sourceMappingURL=index.js.map