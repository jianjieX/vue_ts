const state={
    isLogin:localStorage.isLogin||false,
    user:localStorage.user||''
}
const mutations={
    LOGIN(state:any,form:any){
        state.user=form.user;
        localStorage.setItem('isLogin','true');
        localStorage.setItem('user',form.user);
    },
    OUTLOGIN(state:any){
        localStorage.removeItem('isLogin');
        localStorage.removeItem('user');
        state.user=null;
        state.isLogin=false;
    }
}
const actions={
    login({commit}:any,form:any){
        //模拟异步
        setTimeout(function(){
            commit('LOGIN',form);
        },0)
    },
    outLogin({commit}:any){
        setTimeout(function () {
            commit('OUTLOGIN');
        })
    }
}
export default {
    state,
    mutations,
    actions
}