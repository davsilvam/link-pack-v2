import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { z } from 'zod'

import { useProjects } from '../composables'
import { Project } from '../entities'

interface ProjectDetails extends Project {
  banner_url: string
}

const paramsSchema = z.object({
  name: z.string(),
})

export function useProject() {
  const route = useRoute()
  const routeParams = paramsSchema.parse(route.params)

  const { getUserRepository } = useProjects()

  const project: ProjectDetails = reactive({
    description: '',
    homepage: '',
    html_url: '',
    id: 0,
    name: '',
    banner_url: '',
  })

  onMounted(async () => {
    const { description, homepage, html_url, id, name } = await getUserRepository(routeParams.name)

    project.description = description
    project.homepage = homepage
    project.html_url = html_url
    project.id = id
    project.name = name
    project.banner_url = `https://raw.githubusercontent.com/davsilvam/${project.name}/main/.github/banner.png`
  })

  return {
    project,
  }
}
