<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      <Button type="success" @click="showFrame()">问卷调查</Button>
      <Button type="warning">退出</Button>
      <questFrame :visible.sync="visible"></questFrame>
      <!--<Test>我是插槽内容{{visible}}</Test>-->
      <Test>
        <template v-slot:header>
            <h1 style="color: red">这里是头部</h1>
        </template>
       <h1 style="color: orange">不包含名字的插槽</h1>
        <template v-slot:footer>
            <h1 style="color: cornflowerblue">这里是footer</h1>
        </template>
      </Test>
    </div>
  </div>
</template>

<script>
// @ is an alias to /srcvisible
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex';
import questFrame from '../components/frame';
import Test from '../views/test'
export default {
    components: {
        questFrame,
        Test
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
      // this.$ajax({
      //     method:'post',
      //     url:'https://www.easy-mock.com/mock/5de4a8ae8739b22f6b171a87/example/upload',
      //     success:res=>{
      //         console.log(res)
      //     }
      // })
    }
}
</script>
<style lang="scss" scoped>
  .ivu-btn-success{
    margin-right: 10px;
  }
</style>

