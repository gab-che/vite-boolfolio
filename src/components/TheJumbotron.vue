<script>
    export default{
        name: 'TheJumbotron',
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="jumbotron d-flex align-items-end">
        <div class="container text-white py-4">
            <h1>Home</h1>
            <p class="lead"><strong>let's watch the world burn</strong></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/main.scss';
    .jumbotron{
        background-image: url('/Fight-Club-end.jpg');
        min-height: 50vh;
        background-position: center;
        background-size: cover;
    }
</style>