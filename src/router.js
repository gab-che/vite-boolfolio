import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/Home.vue';
import AboutPage from './pages/About.vue';
import ContactsPage from './pages/Contacts.vue';
import ProjectsIndexPage from './pages/projects/Index.vue';
import ProjectsShowPage from './pages/projects/Show.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndexPage,
        },
        {
            path: '/projects/:id',
            name: 'projects.show',
            component: ProjectsShowPage,
        }
    ]
});

export { router };