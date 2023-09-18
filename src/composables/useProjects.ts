import { onMounted, ref } from 'vue'

import type { Project } from '../entities'
import { instance } from '../services'

export function useProjects() {
  const projects = ref<Project[]>([])

  onMounted(() => {
    getUserRepositories()
  })

  async function getUserRepositories() {
    const data = await instance.get<Project[]>('https://api.github.com/users/davsilvam/repos')
      .then(({ data }) => {
        return data.filter(project => project.name !== 'davsilvam')
      })

    projects.value = data
  }

  async function getUserRepository(name: string) {
    const { data } = await instance.get<Project>(`/${name}`)
    return data
  }

  return {
    projects,
    getUserRepository,
  }
}
