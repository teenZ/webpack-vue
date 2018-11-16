import './assets/styles/index.less';
import './assets/styles/home.less';
import Vue from 'vue';
import App from './app.vue'
import router from './route';

let app = new Vue({
    el: '#root',
    router: router,
    render: h => h(App)
})