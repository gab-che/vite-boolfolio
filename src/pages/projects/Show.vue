<script>
    import { store, fetchSingleProject } from '../../store';
    export default{
        name: 'ProjectsShow',
        data(){
            return{
                project: store.singleProject,
            }
        },

        mounted(){
            fetchSingleProject();
        }
    }
</script>

<template>
    {{ project.name }}
</template>

<style scoped lang="scss">
    @use '../../style/main.scss';
</style>