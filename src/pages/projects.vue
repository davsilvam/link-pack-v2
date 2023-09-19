<script lang="ts" setup>
import { ArrowLeft, Dumbbell, Film, Snowflake, TreePine } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import { Header, Link, SocialSection } from '../components'
</script>

<template>
  <div
    class="flex w-full max-w-[450px] flex-col items-center justify-center gap-12 p-6"
  >
    <Header />
    <SocialSection />

    <Link.Section>
      <RouterLink
        to="/projects/winterman-app"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        <Snowflake class="h-5 w-5" />
        Winterman
      </RouterLink>

      <RouterLink
        to="/projects/link-pack-v2"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        <TreePine class="h-5 w-5" />
        Link Pack
      </RouterLink>

      <RouterLink
        to="/projects/movieshelf"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        <Film class="h-5 w-5" />
        Movieshelf
      </RouterLink>

      <RouterLink
        to="/projects/towo-list"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        <Dumbbell class="h-5 w-5" />
        ToWo List
      </RouterLink>
    </Link.Section>

    <RouterLink to="/" class="flex items-center gap-2 font-semibold">
      <ArrowLeft class="w-4" /> Voltar
    </RouterLink>
  </div>
</template>
