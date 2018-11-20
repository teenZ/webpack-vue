import Vue from 'vue';
import VueRouter from 'vue-router';


// import home from './componnets/home.vue'
Vue.use(VueRouter);
const routes = [
    {
        path: '/home',
        name: 'home',
        components: {
            header: resolve => require(['@/views/common/header'], resolve),
            sidebar: resolve => require(['@/views/common/sidebar'], resolve),
            content: resolve => require(['@/views/common/content'], resolve)
        },
        children: [
            {
                path: 'leo',
                name: 'leo',
                component: resolve => require(['@/views/leo'], resolve)
            },
            {
                path: 'young',
                name: 'young',
                component: resolve=> require(['@/views/young'], resolve)
            }
        ]
    },
    {
        path: '*',
        redirect: '/home'
    }
];

var router = new VueRouter({
    // base: '../app.vue',
    routes: routes
});


// router.beforeEach((to, from, next) => {
//     if(to.name === 'young') {
//         alert("hello");
//     }
//     next(); 
// })
export default router;