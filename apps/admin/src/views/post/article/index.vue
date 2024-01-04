<!--
 * @Author: lion mleganza@163.com
 * @Date: 2024-01-03 19:31:47
 * @LastEditors: lion mleganza@163.com
 * @LastEditTime: 2024-01-03 21:53:38
 * @FilePath: \lion_platonic\apps\admin\src\views\post\article\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>

  <CardList :params="params" :api="getArticleList" @get-method="getMethod" @delete="handleDel">
    <template #header>
      <a-button type="primary" color="error"> 按钮1 </a-button>
      <a-button type="primary" color="success"> 按钮2 </a-button>
    </template>
  </CardList>

</template>
<script lang="ts" setup>
import { CardList } from '@/components/CardList';
import { getArticleList } from '@/api/post/article';
import { useMessage } from '@/hooks/web/useMessage';

const { notification } = useMessage();
// 请求api时附带参数
const params = {};

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
</script>
