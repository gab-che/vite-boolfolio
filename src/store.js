import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    backendUrl: 'http://localhost:8000',
    api: '/api/projects/',
    projects: [],
    singleProject: {},
});

export function fetchProjects() {
    axios.get(store.backendUrl + store.api)
        .then((resp) => {
            store.projects = resp.data;
        })
}

export function fetchSingleProject() {
    axios.get(store.backendUrl + store.api + this.$route.params.id)
        .then((resp) => {
            // console.log(this.$route.params.id);
            store.singleProject = resp.data;
        })
}