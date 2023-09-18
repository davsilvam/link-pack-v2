<script lang="ts" setup>
import { ArrowLeft } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import { Header, Link, SocialSection } from '../components'
import { useProjects } from '../composables'

const { projects } = useProjects()
</script>

<template>
  <div
    class="flex w-full max-w-[450px] flex-col items-center justify-center gap-12 p-6"
  >
    <Header />
    <SocialSection />

    <Link.Section>
      <RouterLink
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.name}`"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        {{ project.name }}
      </RouterLink>
    </Link.Section>

    <RouterLink to="/" class="flex items-center gap-2 font-semibold">
      <ArrowLeft class="w-4" /> Voltar
    </RouterLink>
  </div>
</template>
