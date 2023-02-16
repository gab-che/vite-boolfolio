<script>
    export default{
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
        <img :src="this.url + '/storage/' + project.cover_img" class="card-img-top" :alt="project.name">
        <div class="card-body">
            <h5 class="card-title">{{project.name}}</h5>
            <p class="card-text">{{project.description.slice(0, 20)}}...</p>
            <div class="buttons d-flex justify-content-between">
                <a href="#" class="btn btn-info">Vedi dettagli</a>
                <a :href="project.github_link" class="btn btn-success">Check repo</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>