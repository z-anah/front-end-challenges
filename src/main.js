import { createApp } from 'vue'
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";

import App from './App.vue';
import AppGlass from "./AppGlass.vue";
import AppRounded from './AppRounded.vue';
import AppTextAnimation from './AppTextAnimation.vue';

const routes = [
  { path: "/", component: AppRounded },
  { path: "/app-glass", component: AppGlass },
  { path: "/app-text-animation", component: AppTextAnimation },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
