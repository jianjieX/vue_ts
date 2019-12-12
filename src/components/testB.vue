<template>
    <div>
        <slot v-bind:user="user">{{user.lastName}}</slot>
    </div>
</template>

<script>
    export default {
        name: "testB",
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