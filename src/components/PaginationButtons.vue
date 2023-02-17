<script>
    import { store, fetchProjects } from '../store';
    export default {
        name: 'PaginationButtons',
        data(){
            return{
                store,
            }
        },

        methods: {
            prevPage(){
                if(store.currentPage === 1){
                    return
                } else {
                    setTimeout(()=>{
                        fetchProjects(this.$route.query);
                    }, 500);
                }
            },

            nextPage(){
                if(store.currentPage === store.lastPage){
                    return
                } else {
                    setTimeout(()=>{
                        fetchProjects(this.$route.query);
                    }, 500);
                }
            }
        }
    }
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <router-link
                class="page-link"
                :to="{ name: 'projects.index', query: { page: store.currentPage - 1 } }"
                @click="prevPage"
                >Prev</router-link>
            </li>
            <!-- page buttons - v-for page, i su lastPage - :to page: i -->
            <li class="page-item">
                <router-link
                class="page-link"
                :to="{ name: 'projects.index', query: { page: store.currentPage + 1 } }"
                @click="nextPage"
                >Next</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
    @use '../style/main.scss';
</style>