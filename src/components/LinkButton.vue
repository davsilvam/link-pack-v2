<script lang="ts" setup>
  import { AnchorHTMLAttributes } from 'vue'

  interface LinkButtonProps extends AnchorHTMLAttributes {
    href: string
  }

  const props = defineProps<LinkButtonProps>()
</script>

<template>
  <a
    v-bind="props"
    class="w-full rounded-lg border-2 border-secondary-50 py-7 px-6 font-semibold text-secondary-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-50/20"
  >
    <slot></slot>
  </a>
</template>
