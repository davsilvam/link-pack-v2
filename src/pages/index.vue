<script lang="ts" setup>
import { RouterLink } from 'vue-router'

import { Header, Link, SocialSection } from '../components'
</script>

<template>
  <div class="flex w-full max-w-[450px] flex-col justify-center gap-12 p-6">
    <Header />
    <SocialSection />

    <Link.Section>
      <Link.Button href="https://davidsilvam.vercel.app">
        Acesse meu Portfólio
      </Link.Button>

      <RouterLink
        to="/projects"
        class="flex w-full items-center justify-center rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
      >
        Confira os Projetos
      </RouterLink>
    </Link.Section>
  </div>
</template>
