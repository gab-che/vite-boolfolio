<script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  export default{
    components: { TheHeader, TheFooter },
    data(){
      return{
      }
    }
  }
</script>

<template>
  <div class="main_container">
    <TheHeader />
    <main>
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
  @use 'style/main.scss';

  .main_container{
    display: flex;
    flex-direction: column;
    height: 100vh;

    main{
      flex-grow: 1;
      overflow: auto;
    }
  }
</style>
