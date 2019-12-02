<template>
    <div>
        <h1>哈喽，艾瑞巴蒂</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="随便填个名字就可以啦">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="随便写个密码就可以啦">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">点我登录</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "login",
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '小可爱，不能做无名氏哦', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '小可爱，不填密码是没办法成功的呦~', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码最多六个字符哦~', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('login',{
                            user:this.formInline.user,
                            password:this.formInline.password
                        }).then(()=>{
                            this.$Message.success('恭喜小可爱登录成功~');
                            this.$router.push('/home').catch(err=>{
                                console.log(err)
                            });
                        })
                    } else {
                        this.$Message.error('出错了QAQ!');
                    }
                })
            }
        },
        computed:{
            ...mapState({
                isLogin:state=>state.Login.isLogin
            })
        },
        mounted(){

        }
    }
</script>

<style lang="scss" scoped>
    h1{
        text-align: center;
        margin-top: 50px;
    }
    form{
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>