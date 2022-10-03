import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
// import ErrorPage from '../pages/404/ErrorPage.vue'
import PostsPage from '../pages/posts/PostsPage.vue'
import PostComponent from '../pages/posts/PostComponent.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        alias: '/home'
    },
    {
        path: '/posts',
        name: 'posts',
        component: PostsPage,
        children:[
            {
                path:':id',
                component: PostComponent
            }
        ]
    },
    // error 404 page
    /*
    {
        path:'/:catchAll(.*)',
        name: 'error page',
        component: ErrorPage
    }
    */
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router