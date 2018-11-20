import './assets/styles/index.less';
import './assets/styles/home.less';
import Vue from 'vue';
import App from './app.vue'
import router from './routes/route.js';

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})