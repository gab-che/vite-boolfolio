<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        backendUrl: 'http://localhost:8000',
        posts: [],
      }
    },

    methods: {
      fetchProjects(){
        axios.get(this.backendUrl + '/api/projects')
          .then((resp) =>{
            this.posts = resp.data;
          })
      }
    },

    mounted(){
      this.fetchProjects();
    }
  }
</script>

<template>

</template>

<style lang="scss">
  @use 'style/main.scss';
</style>
