<template>
<div>
  
  <CardList :params="params" :api="getArticleList" @get-method="getMethod" @delete="handleDel" @view="handleView">
    <template #header>
      <!-- <a-button type="primary" color="error"> 按钮1 </a-button> -->
      <a-button type="primary" color="success" @click="createArtcle"> 写文章 </a-button>
    </template>
  </CardList>
<Drawer @register="register" />
</div>
</template>
<script lang="ts" setup>
import { CardList } from '@/components/CardList';
import { useDrawer } from '@/components/Drawer';
import { getArticleList } from '@/api/blog/article';
import { useMessage } from '@/hooks/web/useMessage';
import Drawer from './Drawer.vue';
import { useRouter } from 'vue-router'
const { notification } = useMessage();
const [register, { openDrawer: openDrawer }] = useDrawer();
// 请求api时附带参数
const params = {};
const userRouter = useRouter()
let reload = () => {};
// 获取内部fetch方法;
function getMethod(m: any) {
  reload = m;
}
//删除按钮事件
function handleDel(id) {
  console.log(id);
  notification.success({ message: `成功删除${id}` });
  reload();
}
function handleView(id) {
  console.log(id);
  openDrawer(true, { id });
}
function createArtcle(){
  userRouter.push('/blog/write')
}
</script>
