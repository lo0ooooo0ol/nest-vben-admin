<template>
  <PageWrapper>
    <template #extra>
      <a-button type="primary" danger @click="clearValue"> 清空内容 </a-button>
      <a-button type="primary" @click="send"> 发布 </a-button>
    </template>
    <div>
      <!-- <a-button @click="toggleTheme" class="mb-2" type="primary"> 黑暗主题 </a-button> -->
      <!-- <a-button @click="clearValue" class="mb-2" type="default"> 清空内容 </a-button> -->
      <div class="wrapper">
        <div class="input-data">
          <input type="text" v-model="title" required maxlength="100" />
          <div class="underline"></div>
          <label>文章标题</label>
        </div> 
        <MarkDown :height="660" v-model:value="content" @change="handleChange" ref="markDownRef" placeholder="这是占位文本" />
      </div>

     
    </div>


    <Drawer @register="register" />

  </PageWrapper>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useMessage } from '@/hooks/web/useMessage';
import { useDrawer } from '@/components/Drawer';
import { MarkDown, MarkDownActionType } from '@/components/Markdown';
import { PageWrapper } from '@/components/Page';
import { type Nullable } from '@vben/types';
import Drawer from './Drawer.vue'
const markDownRef = ref<Nullable<MarkDownActionType>>(null);
const [register, { openDrawer: openDrawer }] = useDrawer();
const {createMessage} = useMessage();
const { error } = createMessage;

const title = ref('')
const content = ref(``);

function handleChange(v: string) {
  content.value = v;
}

function clearValue() {
  title.value = ''
  content.value = '';
}
function send() {
  if (content.value.trim() === ''
    || title.value.trim() === ''
  ) {
    return error('请输入标题和内容')
  }
  console.log(content.value, title.value)

  openDrawer(true);
}
</script>
<style>
.vben-page-wrapper .vben-page-wrapper-content {
  margin: 0;
}
.ant-page-header{
  padding: 10px;
}
input:focus {

  outline: none;

}

.wrapper {
  background-color: #fff;
  padding: 20px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.wrapper .input-data {
  width: 100%;
  height: 40px;
  position: relative;
  margin-bottom: 20px;
}

.wrapper .input-data input {
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid silver;
  font-size: 17px;
  font-weight: 600;
  overflow: visible;
  word-break: break-all;
}

.input-data input:focus~label,
.input-data input:valid~label {
  transform: translateY(-30px);
  font-size: 14px;
  color: rgba(0, 0, 0, 0.88);
}

.wrapper .input-data label {
  position: absolute;
  bottom: 10px;
  left: 0;
  color: grey;
  pointer-events: none;
  transition: all 0.3s ease;
}

.wrapper .input-data .underline {
  position: absolute;
  bottom: 0px;
  height: 1px;
  width: 100%;
}

.input-data .underline:before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: #0960bd;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.input-data input:focus~.underline:before,
.input-data input:valid~.underline:before {
  transform: scaleX(1);
}
</style>