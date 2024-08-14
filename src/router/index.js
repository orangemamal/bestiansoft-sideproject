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
            name: "TypeFirst",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeFirst.vue'),
            }
          },
          {
            path: "2",
            name: "TypeSecond",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeSecond.vue'),
            }
          },
          {
            path: "3",
            name: "TypeThird",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeThird.vue'),
            }
          },
          {
            path: "4",
            name: "TypeFourth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeFourth.vue'),
            }
          },
          {
            path: "5",
            name: "TypeFifth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeFifth.vue'),
            }
          },
          {
            path: "6",
            name: "TypeSixth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeSixth.vue'),
            }
          },
          {
            path: "7",
            name: "TypeSeventh",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeSeventh.vue'),
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