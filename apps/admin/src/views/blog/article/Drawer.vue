<template>
    <BasicDrawer v-bind="$attrs" :isDetail="true" title="Drawer Title5">
      <p class="h-20">Content Message</p>  ui
      <template #titleToolbar> toolbartoolbartoolbartoolbartoolbartoolbar </template>
    
    </BasicDrawer>
  </template>
  <script lang="ts" setup>
    import { BasicDrawer } from '@/components/Drawer';
  </script>