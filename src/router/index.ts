import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/index.vue'
import projects from '../pages/projects.vue'
import project from '../pages/projects/[id].vue'

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
      path: '/projects/:id',
      name: 'project',
      component: project,
    },
  ],
})
