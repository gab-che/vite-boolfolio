<script>
    import { store } from '../store';
    export default{
        name: 'ProjectCard',
        props: {
            project: {
                type: Object,
                required: true,
                default: ()=> ({}),
            }
        },
        data(){
            return{
                store,
                url: store.backendUrl,
            }
        }
    }

</script>


<template>
    <div class="card h-100">
        <div class="card_display">
            <img :src="`${this.url}/storage/${project.cover_img}`" class="card-img-top" :alt="project.name">
            <span class="badge text-bg-light">{{ project.type['name'] }}</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{project.name}}</h5>
            <p class="card-text">{{project.description.slice(0, 20)}}...</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <router-link :to="{ name: 'projects.show', params: {id: project.id} }" class="btn btn-info"><i class="fa-solid fa-eye"></i></router-link>
            <a :href="project.github_link" class="btn btn-success"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .card_display{
        position: relative;

        .badge{
            position: absolute;
            top: 10px;
            right: 10px;
            opacity: 0;
        }
    }

    .card:hover .card_display .badge{
        opacity: 1;
    }

    .card-img-top{
        height: 150px;
        object-fit: cover;
    }
</style>