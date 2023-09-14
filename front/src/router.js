import { createRouter, createWebHistory } from "vue-router";

const Home = {
    path: "/",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "event" */ `@/page/Home.vue`),
};

const routes = [
    Home
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
