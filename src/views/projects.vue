<script lang="ts" setup>
  import { ArrowLeft, Snowflake, TreePine } from 'lucide-vue-next'
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
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
        to="/projects/0"
      >
        <Snowflake class="w-5" />
        Winterman
      </RouterLink>

      <RouterLink
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
        to="/projects/1"
      >
        <TreePine class="w-5" />
        Link Pack
      </RouterLink>
    </LinkSection>

    <RouterLink class="flex items-center gap-2 font-semibold" to="/">
      <ArrowLeft class="w-4" /> Voltar
    </RouterLink>
  </div>
</template>
