import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/baiduMap',
            name: 'baiduMap',
            component: () =>
                import(
                    /* webpackChunkName: "baiduMap" */ './views/baiduMap.vue'
                )
        },
        {
            path: '/form',
            name: 'form',
            component: () =>
                import(/* webpackChunkName: "baiduMap" */ './views/form.vue')
        },
        {
            path: '/table',
            name: 'table',
            component: () =>
                import(/* webpackChunkName: "baiduMap" */ './views/table.vue')
        }
    ]
})
