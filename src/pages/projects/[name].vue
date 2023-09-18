<script lang="ts" setup>
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'

import { useProject } from '../../composables'

const { project } = useProject()
</script>

<template>
  <div class="flex w-full max-w-[450px] flex-col gap-5 p-6">
    <RouterLink to="/projects" class="flex items-center gap-2 font-semibold">
      <ArrowLeft class="w-4" /> Voltar
    </RouterLink>

    <img v-if="project.banner_url" :src="project.banner_url" :alt="`${project.name}'s banner.`">
    <div v-else class="h-40 w-full animate-pulse bg-dusk" />

    <h1 class="mt-4 text-xl font-semibold">
      {{ project.name }}
    </h1>

    <p>{{ project.description }}</p>

    <div class="flex items-center justify-between">
      <a
        :href="project.html_url"
        class="mt-3 flex items-center gap-2 font-semibold"
      >
        Ver repositório <ArrowUpRight class="w-4" />
      </a>

      <a
        :href="project.homepage"
        class="mt-3 flex items-center gap-2 font-semibold"
      >
        Ver projeto <ArrowUpRight class="w-4" />
      </a>
    </div>
  </div>
</template>
