<template>
  <PageWrapper title="写文章">
    <template #extra>
      <a-button type="primary" danger @click="clearValue"> 清空内容 </a-button>
      <a-button type="primary" @click="send"> 发布 </a-button>
    </template>
    <div>
      <!-- <a-button @click="toggleTheme" class="mb-2" type="primary"> 黑暗主题 </a-button> -->
      <!-- <a-button @click="clearValue" class="mb-2" type="default"> 清空内容 </a-button> -->
      <MarkDown
        :height="700"
        v-model:value="valueRef"
        @change="handleChange"
        ref="markDownRef"
        placeholder="这是占位文本"
      />
    </div>
    

<Drawer @register="register" />
    
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useDrawer } from '@/components/Drawer';
  import { MarkDown, MarkDownActionType } from '@/components/Markdown';
  import { PageWrapper } from '@/components/Page';
  import { type Nullable } from '@vben/types';
import Drawer from './Drawer.vue'
  const markDownRef = ref<Nullable<MarkDownActionType>>(null);
    const [register, { openDrawer: openDrawer }] = useDrawer();
  const valueRef = ref(``);

  // function toggleTheme() {
  //   const markDown = unref(markDownRef);
  //   if (!markDown) return;
  //   const vditor = markDown.getVditor();
  //   vditor.setTheme('dark', 'dark', 'dracula');
  // }

  function handleChange(v: string) {
    valueRef.value = v;
  }

  function clearValue() {
    valueRef.value = '';
  }
  function send() {
    openDrawer(true, {
      data: 'content',
      info: 'Info',
    });
  }
</script>