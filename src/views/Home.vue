<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      <Button type="success">问卷调查</Button>
      <Button type="warning">退出</Button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
    data(){
        return{

        }
    },
    methods:{
        add(){
           this.$store.commit('add',{
               num:1,
               id:1
           })
        }
    },
    computed:{
        ...mapState({
            isLogin:state=>state.Login.isLogin
        })
    },
    created(){

    }
}
</script>

