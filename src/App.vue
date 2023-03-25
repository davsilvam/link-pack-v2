<script lang="ts" setup>
  import AppHeader from './components/AppHeader.vue'
  import LinkSection from './components/LinkSection.vue'
  import SocialSection from './components/SocialSection.vue'
</script>

<template>
  <div class="flex h-screen justify-center items-start bg-secondary-900 p-10">
    <div class="max-w-[450px] flex-col justify-center md:flex">
      <AppHeader />
      <LinkSection />
      <SocialSection />
    </div>
  </div>
</template>
