import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { z } from 'zod'

import { Project } from '../entities'
import { instance } from '../services'

interface ProjectDetails extends Project {
  banner_url: string
}

const paramsSchema = z.object({
  name: z.string(),
})

export function useProject() {
  const route = useRoute()
  const routeParams = paramsSchema.parse(route.params)

  const project: ProjectDetails = reactive({
    id: 0,
    name: '',
    description: '',
    html_url: '',
    homepage: '',
    banner_url: '',
  })

  async function getUserRepository(projectName: string) {
    const { data } = await instance.get<Project>(`/${projectName}`)
    const { description, homepage, html_url, id, name } = data

    project.description = description
    project.homepage = homepage
    project.html_url = html_url
    project.id = id
    project.name = name
    project.banner_url = `https://raw.githubusercontent.com/davsilvam/${project.name}/main/.github/banner.png`
  }

  onMounted(() => {
    getUserRepository(routeParams.name)
  })

  return {
    project,
  }
}
