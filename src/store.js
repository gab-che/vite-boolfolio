import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    backendUrl: 'http://localhost:8000',
    api: '/api/projects/',
    projects: [],
    currentPage: 1,
    lastPage: 1,
    singleProject: {},
    latestProjects: [],
    submitResponse: '',
});

export function fetchProjects(query) {
    axios.get(store.backendUrl + store.api, {
        params: {
            ...query,
        }
    })
        .then((resp) => {
            store.projects = resp.data.data;
            store.currentPage = resp.data.current_page;
            store.lastPage = resp.data.last_page;
        })
}

export function fetchSingleProject(id) {
    axios.get(store.backendUrl + store.api + id)
        .then((resp) => {
            store.singleProject = resp.data;
        })
}

export function fetchLatestProjects() {
    axios.get(store.backendUrl + store.api, {
        params: {
            last5: true,
        }
    })
        .then((resp) => {
            store.latestProjects = resp.data;
        })
}

export function sendFormData(data) {
    axios
        .post(store.backendUrl + '/api/contacts/', data)
        .then((resp) => {
            store.submitResponse = 'yay';
            console.log(resp);
        })
        .catch((e) => {
            if (e.response && e.response.data) {
                store.submitResponse = e.response.data.message;
            } else {
                store.submitResponse = e.message;
            }
        })
}