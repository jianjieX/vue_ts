<template>
    <div class="container">
        <div>我是测试页</div>
        <!--插槽-->
        <!--后备内容-->
       <!--<slot>我是测试页的内容</slot>-->
        <!--<div class="container">-->
            <!--<header>-->
                <!--<slot name="header"></slot>-->
            <!--</header>-->
            <!--<main>-->
               <!--<slot></slot>-->
            <!--</main>-->
            <!--<footer>-->
                <!--<slot name="footer"></slot>-->
            <!--</footer>-->
        <!--</div>-->
        <div>
            <slot v-bind:user="user">
                {{user.lastName}}
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test",
        data(){
            return{
                user:{
                    firstName:'s',
                    lastName:'jj'
                }
            }
        }
    }
</script>

<style scoped>

</style>