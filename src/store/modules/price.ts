const state={
    nowPrice:0
}
const mutations={
    add(state:any,{num}:any){
        state.nowPrice=state.nowPrice+num
    }
}
const getters={

}
export default {
    state,
    mutations,
    getters
}