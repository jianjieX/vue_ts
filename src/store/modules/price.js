const state = {
    nowPrice: 0
};
const mutations = {
    add(state, { num }) {
        state.nowPrice = state.nowPrice + num;
    }
};
const getters = {};
export default {
    state,
    mutations,
    getters
};
//# sourceMappingURL=price.js.map