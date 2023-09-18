import { createRouter, createWebHistory } from 'vue-router'
import { details, home, projects } from '../pages'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects,
    },
    {
      path: '/projects/:name',
      name: 'project',
      component: details,
    },
  ],
})
