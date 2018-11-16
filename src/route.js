import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home'
    },
    {
        path: ''
    },
    {
        path: '*',
        redirect: '/home'
    }
];

var router = new VueRouter({
    routes: routes
});

export default router;