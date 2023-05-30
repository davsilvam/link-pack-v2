<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  import AppHeader from '../components/AppHeader.vue'
  import SocialSection from '../components/SocialSection.vue'
  import LinkSection from '../components/LinkSection.vue'
  import LinkButton from '../components/LinkButton.vue'
</script>

<template>
  <div class="flex w-full max-w-[450px] flex-col justify-center gap-12 p-6">
    <AppHeader />
    <SocialSection />
    <LinkSection>
      <LinkButton href="https://davidsilvam.vercel.app">
        Acesse meu Portfólio
      </LinkButton>

      <RouterLink
        class="flex w-full items-center justify-center rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
        to="/projects"
      >
        Confira os Projetos
      </RouterLink>
    </LinkSection>
  </div>
</template>
