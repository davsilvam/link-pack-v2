<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'
import { useProjects } from '../../composables/useProjects'

const route = useRoute()
const { projects } = useProjects()

const project = ref(projects[Number(route.params.id)])
</script>

<template>
  <div class="flex w-full max-w-[450px] flex-col gap-5 p-6">
    <RouterLink class="flex items-center gap-2 font-semibold" to="/projects">
      <ArrowLeft class="w-4" /> Voltar
    </RouterLink>

    <img :src="project.banner_src" alt="">
    <h1 class="mt-8 text-xl font-semibold">
      {{ project.name }}
    </h1>
    <p>{{ project.description }}</p>

    <div class="flex items-center justify-between">
      <a
        class="mt-3 flex items-center gap-2 font-semibold"
        :href="project.github_href"
      >
        Ver repositório <ArrowUpRight class="w-4" />
      </a>

      <a
        class="mt-3 flex items-center gap-2 font-semibold"
        :href="project.deploy_href"
      >
        Ver projeto <ArrowUpRight class="w-4" />
      </a>
    </div>
  </div>
</template>
