import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import projects from '../views/projects.vue'
import project from '../views/[id].vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: project
    }
  ]
})
