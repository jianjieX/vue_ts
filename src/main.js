import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false;
import axios from 'axios';
Vue.use(ViewUI);
Vue.prototype.$ajax = axios;
router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        let state = store.state;
        if (state.Login.isLogin) {
            next();
        }
        else {
            next('/login');
        }
    }
    else {
        next();
    }
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map