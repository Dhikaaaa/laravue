import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'

import IndexComponent from './components/posts/Index.vue';
import CreateComponent from './components/posts/Create.vue';
import EditComponent from './components/posts/Edit.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/posts',
            name: 'posts',
            component: IndexComponent
        },
        {
            path: '/create',
            name: 'create',
            component: CreateComponent
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: EditComponent
        }
    ]
})

export default router   