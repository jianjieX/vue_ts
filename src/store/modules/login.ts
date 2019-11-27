const state={
    isLogin:localStorage.isLogin||false,
    user:localStorage.user||''
}
const mutations={
    LOGIN(state:any,form:any){
        state.user=form.user;
        localStorage.setItem('isLogin','true')
        localStorage.setItem('user',form.user)
    }
}
const actions={
    login({commit}:any,form:any){
        let _this=this;
        //模拟异步
        setTimeout(function(){
            commit('LOGIN',form);
            form.success();
        },0)
    }
}
export default {
    state,
    mutations,
    actions
}