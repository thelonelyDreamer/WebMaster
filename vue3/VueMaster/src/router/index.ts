import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";


const routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        redirect:'/index'
    },
    {
        path:"/",
        component: ()=>import("@/views/index.vue")
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router