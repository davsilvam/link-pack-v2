<script lang="ts" setup>
import { ArrowLeft, Film, Snowflake, TreePine } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import SocialSection from '../components/SocialSection.vue'
import LinkSection from '../components/LinkSection.vue'
</script>

<template>
  <div
    class="flex w-full max-w-[450px] flex-col items-center justify-center gap-12 p-6"
  >
    <AppHeader />
    <SocialSection />

    <LinkSection>
      <RouterLink
        to="/projects/0"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        <Snowflake class="w-5" />
        Winterman
      </RouterLink>

      <RouterLink
        to="/projects/1"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        <TreePine class="w-5" />
        Link Pack
      </RouterLink>

      <RouterLink
        to="/projects/2"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        <Film class="w-5" />
        Movieshelf
      </RouterLink>
    </LinkSection>

    <RouterLink to="/" class="flex items-center gap-2 font-semibold">
      <ArrowLeft class="w-4" /> Voltar
    </RouterLink>
  </div>
</template>
