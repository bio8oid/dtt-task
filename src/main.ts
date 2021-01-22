import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/routes';
import store from './store/indexTs';
console.log('store:', store)

Vue.config.productionTip = false;

new Vue({
    router,
    // store,
    store: store.original,
    render: h => h(App),
}).$mount('#app');
