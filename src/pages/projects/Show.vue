<script>
    import { store, fetchSingleProject } from '../../store';
    export default{
        name: 'ProjectsShow',
        data(){
            return{
                store,
                url: store.backendUrl,
            }
        },

        mounted(){
            fetchSingleProject(this.$route.params.id);
        }
    }
</script>

<template>
    <div class="container py-5">
        <div class="mb-3 d-flex justify-content-between align-items-center">
            <h2 class="mb-3">{{ store.singleProject.name }}</h2>
            <h3><span class="badge text-bg-success">{{ store.singleProject.type?.name }}</span></h3>
        </div>
        <div class="row mb-3">
            <div class="col-md-8">
                <p class="lead">{{ store.singleProject.description }}</p>
            </div>
            <div class="col-md-4">
                <div v-if="store.singleProject.cover_img">
                    <img :src="url + '/storage/' + store.singleProject.cover_img" :alt="store.singleProject.name" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center gap-3">
            <div class="d-flex flex-grow-1 gap-2 justify-content-end">
                <h6 class="mb-0"
                    v-for="tag in store.singleProject?.technologies">
                    <span class="badge text-bg-light">#{{ tag.name }}</span>
                </h6>
            </div>
            <a :href="store.singleProject.github_link" class="btn btn-success"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../../style/main.scss';
</style>