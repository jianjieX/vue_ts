<template>
    <div>
        <!--<testB>-->
            <!--<template v-slot="slotProps">-->
                <!--{{slotProps.user.firstName }}-->
            <!--</template>-->
        <!--</testB>-->
        <!--当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：-->
        <testB v-slot="slotProps">
            {{slotProps.user.firstName }}
        </testB>
    </div>
</template>

<script>
    import testB from '../components/testB'
    export default {
        name: "testA",
        data(){
            return{
                name:'小杰'
            }
        },
        components:{
            testB
        }
    }
</script>

<style scoped>

</style>