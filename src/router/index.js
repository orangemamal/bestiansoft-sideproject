import { createRouter, createWebHistory } from 'vue-router';

import LoginComp from "@/views/LoginComp.vue"
import FrameComp from "@/views/FrameComp.vue"

import NewPopup from "@/components/DetailComponents/NewPopup.vue"

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
          {
            path: "8",
            name: "TypeEighth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeEighth.vue'),
            }
          },
          {
            path: "9",
            name: "TypeNinth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeNinth.vue'),
            }
          },
          {
            path: "10",
            name: "TypeTenth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeTenth.vue'),
            }
          },
          {
            path: "11",
            name: "TypeEleventh",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeEleventh.vue'),
            }
          },
          {
            path: "12",
            name: "TypeTwelfth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeTwelfth.vue'),
            }
          },
          {
            path: "13",
            name: "TypeThirteenth",
            components: {
              mainContentType: () => import('@/views/content/contentsComponent/TypeThirteenth.vue'),
            }
          },
        ],
      },
    ],
  },
  {
    path: "/NewPopup",
    name: "NewPopup",
    component: NewPopup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;