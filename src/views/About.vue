<template>
  <div class="about">
    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                show:true
            }
        }
    }
</script>
