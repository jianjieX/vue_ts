const state = {
    isLogin: localStorage.isLogin || false,
    user: localStorage.user || ''
};
const mutations = {
    LOGIN(state, form) {
        state.user = form.user;
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('user', form.user);
    }
};
const actions = {
    login({ commit }, form) {
        let _this = this;
        //模拟异步
        setTimeout(function () {
            commit('LOGIN', form);
            form.success();
        }, 0);
    }
};
export default {
    state,
    mutations,
    actions
};
//# sourceMappingURL=login.js.map