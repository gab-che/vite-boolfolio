<script>
  import axios from 'axios';
  import ProjectCard from './components/ProjectCard.vue';
  import TheHeader from './components/TheHeader.vue';
  export default{
    components: { ProjectCard, TheHeader },
    data(){
      return{
        backendUrl: 'http://localhost:8000',
        projects: [],
      }
    },

    methods: {
      fetchProjects(){
        axios.get(this.backendUrl + '/api/projects')
          .then((resp) =>{
            this.projects = resp.data;
          })
      }
    },

    mounted(){
      this.fetchProjects();
    }
  }
</script>

<template>
  <TheHeader />
  <div class="container">
    <h1 class="text-center py-5">Vite Portfolio</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-5">
      <div class="col mb-3" v-for="(project, i) in this.projects">
        <ProjectCard :project="project" :key="i" :url="this.backendUrl"/>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
  @use 'style/main.scss';
</style>
