<script lang="ts" setup>
import { Github, Instagram, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <div
    class="flex w-full items-center justify-center gap-16 [&>a:hover]:-translate-y-2 [&>a]:transition-all"
  >
    <a href="https://www.instagram.com/davsilvam_/">
      <Instagram class="h-8 w-8" />
    </a>

    <a href="https://www.linkedin.com/in/davsilvam/">
      <Linkedin class="h-8 w-8" />
    </a>

    <a href="https://github.com/davsilvam">
      <Github class="h-8 w-8" />
    </a>
  </div>
</template>
