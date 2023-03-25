<script lang="ts" setup>
  import LinkButton from './LinkButton.vue'
</script>

<template>
  <section class="flex w-full flex-col gap-6 pt-16">
    <h1 class="text-lg font-bold text-secondary-50">Meus Links</h1>
    <nav class="flex w-full flex-col gap-4">
      <LinkButton href="https://davidsilvam.vercel.app">
        Acesse meu Portfólio
      </LinkButton>
      <LinkButton href="https://www.linkedin.com/in/davsilvam/">
        Acompanhe meu trabalho no Linkedin
      </LinkButton>
      <LinkButton href="https://github.com/davsilvam">
        Explore meu GitHub e veja meus últimos códigos
      </LinkButton>
    </nav>
  </section>
</template>
