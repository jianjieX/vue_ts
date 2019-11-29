<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      <Button type="success" @click="showFrame()">问卷调查</Button>
      <Button type="warning">退出</Button>
      <questFrame :visible.sync="visible"></questFrame>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex';
import questFrame from '../components/frame'
export default {
    components:{
        questFrame
    },
    data(){
        return{
            visible:false
        }
    },
    methods:{
        add(){
           this.$store.commit('add',{
               num:1,
               id:1
           })
        },
        showFrame(){
            this.visible=true
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
<style lang="scss" scoped>
  .ivu-btn-success{
    margin-right: 10px;
  }
</style>

