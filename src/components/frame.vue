<template>
    <Modal
            v-model="visible"
            title="Common Modal dialog box title"
            @on-ok="ok"
            @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
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
            ok () {
                this.$Message.info('Clicked ok');
                this.$emit("update:visible",false)
            },
            cancel () {
                this.$Message.info('Clicked cancel');
                this.$emit("update:visible",false)
            }
        }
    }
</script>

<style scoped>

</style>