<script>
  import TheHeader from './components/TheHeader.vue';
  export default{
    components: { TheHeader },
    data(){
      return{
      }
    }
  }
</script>

<template>
  <TheHeader />
  <router-view></router-view>
</template>

<style lang="scss">
  @use 'style/main.scss';
</style>
