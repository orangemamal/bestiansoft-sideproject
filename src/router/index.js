import { createRouter, createWebHistory } from 'vue-router';

import LoginComp from "@/views/LoginComp.vue"
import FrameComp from "@/views/FrameComp.vue"

const routes = [
  {
    path: '/',
    component: LoginComp,
  },
  {
    path: '/MainComp',
    component: FrameComp,
    children: [
      {
        path: "",
        name: "MainComp",
        components: {
          mainContentViews: () => import('@/views/content/MainComp.vue'),
        },
        children: [
          {
            path: "",
            name: "typeFirst",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/typeFirst.vue'),
            }
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;