<script>
    import { store, fetchLatestProjects } from '../store';
    import TheJumbotron from '../components/TheJumbotron.vue';
    import ProjectCardHorizontal from '../components/ProjectCardHorizontal.vue';
    export default{
        name: 'Home',
        components: { TheJumbotron, ProjectCardHorizontal },
        data(){
            return{
                store,
            }
        },

        mounted() {
            fetchLatestProjects();
        }
    }
</script>

<template>
    <TheJumbotron />
    <div class="container py-5">
        <div class="row">
            <div class="col-md-10 col-lg-8 m-auto">
                <h2 class="mb-5">Ultimi progetti inseriti</h2>
            </div>
            <div class="col-md-10 col-lg-8 m-auto mb-3"
            v-for="(project, i) in store.latestProjects" :key="i">
                <ProjectCardHorizontal :project="project" :index="i"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/main.scss';
</style>