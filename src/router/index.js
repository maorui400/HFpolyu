// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Polyhfri.vue"),
  },
  // {
  //   path: '/dist/index.html',
  //   name: 'env',
  //   component: () => import('../components/Polyhfri.vue')
  // },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/AboutView.vue"),
  },
  {
    path: "/hexintuandui",
    name: "hexintuandui",
    component: () => import("../components/Team.vue"),
  },
  {
    path: "/professor/:id",
    name: "professor",
    component: () => import("../components/ProfessorDetailView.vue"),
    props: true, // 将路由参数作为 props 传递给组件
  },
  {
    path: "/research",
    name: "research",
    component: () => import("../components/ResearchView.vue"),
    children: [
      {
        path: "center/:id",
        name: "center",
        component: () => import("../components/CenterView.vue"),
        props: true, // 将路由参数作为 props 传递
      },
    ],
  },

  {
    path: "/news",
    name: "news",
    component: () => import("../components/NewsView.vue"),
  },
  {
    path: "/newsdetails/:id",
    name: "newsdetails",
    component: () => import("../components/NewsDetailView.vue"),
    props: true, // 将路由参数作为 props 传递
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/ContactView.vue"),
    // children: [
    //   {
    //     path: 'details/:id',
    //     name: 'details',
    //     component: () => import('../components/ContactDetailView.vue'),
    //     props: true  // 将路由参数作为 props 传递
    //   },
    // ]
  },
  // contact二级标题
  {
    path: "/contactdetails/:id",
    name: "contactdetails",
    component: () => import("../components/ContactDetailView.vue"),
    props: true, // 将路由参数作为 props 传递
  },
  {
    path: "/searchresults",
    name: "searchresults",
    component: () => import("../components/SearchResultView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 添加滚动行为控制:路由跳转时保持页面在顶部
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
    // 或者如果需要平滑滚动：
    // return { top: 0, behavior: 'smooth' }
  },
});

export default router;
