<template>
   <div>
       <Modal
               v-model="visible"
               title="Common Modal dialog box title"
               @on-visible-change="change">
           <p>Content of dialog</p>
           <p>Content of dialog</p>
           <p>Content of dialog</p>
       </Modal>
   </div>
</template>

<script>
    export default {
        name: "frame",
        props:["visible"],
        data () {
            return {

            }
        },
        methods:{
            change(val){
                this.$emit("update:visible",val)
            }
        }
    }
</script>

<style scoped>

</style>