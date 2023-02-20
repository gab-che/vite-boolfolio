<script>
    import { store, fetchProjects } from '../../store';
    import ProjectCard from '../../components/ProjectCard.vue';
    import PaginationButtons from '../../components/PaginationButtons.vue';
    export default{
        name: 'ProjectsIndex',
        components: { ProjectCard, PaginationButtons },
        data(){
            return{
                store,
            }
        },
        methods: {
        },

        mounted(){
            fetchProjects(this.$route.query);
    }

    }
</script>

<template>
    <div class="container">
        <h1 class="text-center py-5">Vite Portfolio</h1>
        <PaginationButtons />
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-5">
            <div class="col mb-3" v-for="(project, i) in store.projects" :key="i">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../../style/main.scss';
</style>