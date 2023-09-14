import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";

const app = createApp(App);
app.use(router).use(store).use(VueCookies).mount("#app");
