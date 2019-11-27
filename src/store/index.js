import Vue from 'vue';
import Vuex from 'vuex';
import Login from './modules/login';
import Price from './modules/price';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        Login,
        Price
    }
});
//# sourceMappingURL=index.js.map