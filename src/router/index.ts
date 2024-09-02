import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('@/layouts/default')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'HomeIndex',
          component: () => import('@/views/home/index'),
        },
      ],
    },
  ],
})

export default router
