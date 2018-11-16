import Vue from 'vue';
import VueRouter from 'vue-router';

import leo from './views/leo.vue';
import young from './views/young.vue';
// import home from './componnets/home.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/leo',
        name: 'leo',
        component: leo
    },
    {
        path: '/young',
        name: 'young',
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

router.beforeEach((to, from, next) => {
    if(to.name === 'young') {
        alert("hello");
    }
    next(); 
})
export default router;