<script lang="ts" setup>
  import IconGitHub from './IconGitHub.vue'
  import IconInstagram from './IconInstagram.vue'
  import IconLinkedin from './IconLinkedin.vue'
</script>

<template>
  <div
    class="flex items-center gap-10 pt-8 [&>a:hover]:-translate-y-2 [&>a]:transition-all"
  >
    <a href="https://www.instagram.com/davsilvam_/">
      <IconInstagram class="w-8" />
    </a>
    <a href="https://www.linkedin.com/in/davsilvam/">
      <IconLinkedin class="w-8" />
    </a>
    <a href="https://github.com/davsilvam">
      <IconGitHub class="w-8" />
    </a>
  </div>
</template>
