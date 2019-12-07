import Vue from 'vue'
import VueRouter from 'vue-router'
import Showpreference from '@/views/Showpreference.vue'
import Result from '@/views/Result'
import Home from '@/views/Home'
import Contact from '@/views/Contact'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/result',
        component: Result
    },
    {
        path: '/show-preference',
        component: Showpreference
    },
    {
      path: '/contact',
        component: Contact
    },

]

const router = new VueRouter({
    routes
})
export default router


