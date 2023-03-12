import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./css/reset.css";
import "./css/common.css";
createApp(App).use(router).mount("#app");
