<script>
    export default{
        name: 'ProjectCard',
        props: {
            project: {
                type: Object
            },
            url: {
                type: String
            }
        },
        data(){
            return{

            }
        }
    }

</script>


<template>
    <div class="card">
        <img :src="`${this.url}/storage/${project.cover_img}`" class="card-img-top" :alt="project.name">
        <div class="card-body">
            <h5 class="card-title">{{project.name}}</h5>
            <p class="card-text">{{project.description.slice(0, 20)}}...</p>
            <div class="buttons d-flex justify-content-between">
                <router-link :to="{ name: 'projects.show', params: {id: project.id} }" class="btn btn-info"><i class="fa-solid fa-eye"></i></router-link>
                <a :href="project.github_link" class="btn btn-success"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card-img-top{
        height: 150px;
        object-fit: cover;
    }
</style>