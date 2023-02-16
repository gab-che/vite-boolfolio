<script>
    export default{
        data(){
            return{
                nav_links: [
                    {
                        label: 'Home',
                        route: 'home'
                    },
                    {
                        label: 'Progetti',
                        route: 'projects.index'
                    },
                    {
                        label: 'Su di me',
                        route: 'about'
                    },
                    {
                        label: 'Contattami',
                        route: 'contacts'
                    }
                ]
            }
        }
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-for="(item, index) in nav_links" :key="index">
                            <a :href="item.route" class="nav-link">{{ item.label }}</a>
                            <!-- <router-link :to="{ name: item.routeName }" class="nav-link">
                            {{ item.label }}
                            </router-link> -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>