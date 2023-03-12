import { createWebHistory, createRouter } from "vue-router";
// 라이브러리 import createRouter  : 라우터 생성 함수
import Home from "./components/Home.vue";
import Category from "./components/Category.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/category", //경로 (list로 접속)
    component: Category
  }
  // {
  //   path: "/:anything(.*)", //404 페이지(페이지없음)
  //   component: Home
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
