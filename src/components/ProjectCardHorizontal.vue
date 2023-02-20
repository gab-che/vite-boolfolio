<script>
    import { store } from '../store';
    export default{
        name: 'ProjectCardHorizontal',
        props: {
            project: {
                type: Object,
                required: true,
                default: () => ({}),
            },
            index: {
                type: Number,
                required: true,
                default: 0,
            }
        },
        data(){
            return{
                store,
                url: store.backendUrl,
            }
        },
        
        computed: {
            updatedAt(){
                const date = new Date(this.project.updated_at);
                return date.toLocaleString();
            },

        }
    }
</script>

<template>
    <div class="card mb-3" :id="`card${project.id}`">
        <div class="row g-0" :class="{'flex-row-reverse' : this.index % 2 === 1}">
            <div class="col-md-4">
                <img 
                :src="`${this.url}/storage/${project.cover_img}`" 
                class="img-fluid img_horiz" 
                :alt="project.name"
                :class="[this.index % 2 === 1 ? 'rounded-end' : 'rounded-start']">
            </div>
            <div class="col-md-8">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs" :id="`myTab${project.id}`" role="tablist">
                        <!-- info -->
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" :id="`info-tab${project.id}`" data-bs-toggle="tab" :data-bs-target="`#info-tab-pane${project.id}`" type="button" role="tab" :aria-controls="`info-tab-pane${project.id}`" aria-selected="true">Info</button>
                        </li>
                        <!-- description -->
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" :id="`description-tab${project.id}`" data-bs-toggle="tab" :data-bs-target="`#description-tab-pane${project.id}`" type="button" role="tab" :aria-controls="`description-tab-pane${project.id}`" aria-selected="false">Desc</button>
                        </li>
                        <!-- show -->
                        <li class="nav-item" role="presentation">
                            <router-link :to="{ name: 'projects.show', params: {id: project.id} }" class="btn btn-light"><i class="fa-solid fa-eye"></i></router-link>
                        </li>
                        <!-- github -->
                        <li class="nav-item" role="presentation">
                            <a :href="project.github_link" class="btn btn-outline-dark" target="_blank"><i class="fa-brands fa-github"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content" :id="`myTabContent${project.id}`">
                        <!-- info -->
                        <div class="tab-pane fade show active" :id="`info-tab-pane${project.id}`" role="tabpanel" :aria-labelledby="`info-tab${project.id}`" tabindex="0">
                            <h5 class="card-title">#{{ project.id }} ~ {{ project.name }}</h5>
                            <div class="card-text d-flex gap-2">Stack:
                                <h6 v-for="tech in project?.technologies"><span class="badge bg-success">{{ tech.name }}</span></h6>
                            </div>                            
                            <p class="card-text"><small class="text-muted">Last updated: {{ updatedAt }}</small></p>
                        </div>
                        <!-- description -->
                        <div class="tab-pane fade" :id="`description-tab-pane${project.id}`" role="tabpanel" :aria-labelledby="`description-tab${project.id}`" tabindex="0">{{ project.description.slice(0, 200) }}...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/main.scss';
    .img_horiz{
        height: 100%;
        object-fit: cover;
    }
</style>