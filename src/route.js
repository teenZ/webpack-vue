import Vue from 'vue';
import VueRouter from 'vue-router';

import leo from './views/leo.vue';
import young from './views/young.vue';
// import home from './componnets/home.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/leo',
        component: leo
    },
    {
        path: '/young',
        component: young
    },
    {
        path: '*',
        redirect: '/leo'
    }
];

var router = new VueRouter({
    // base: 'app.vue',
    routes: routes
});

export default router;