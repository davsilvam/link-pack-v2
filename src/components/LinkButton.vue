<script lang="ts" setup>
  import { AnchorHTMLAttributes } from 'vue'

  interface LinkButtonProps extends AnchorHTMLAttributes {
    href: string
  }

  defineProps<LinkButtonProps>()
</script>

<template>
  <a
    class="flex w-full items-center justify-center rounded-lg bg-dawn/10 p-4 font-medium hover:bg-dawn/20"
    :href="href"
  >
    <slot></slot>
  </a>
</template>
