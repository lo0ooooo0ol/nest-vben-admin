<template>
  <BasicDrawer v-bind="$attrs" @register="register" title="基本设置" width="35%" :showCancelBtn="false" showFooter
    @ok="handleSubmit" okText="发布">
    <div>
      <BasicForm @register="registerForm" />
    </div>
    <template #insertFooter>
      <a-button> 保存草稿箱</a-button>
    </template>
    <template #centerFooter>
      <a-button @click="timePublish"> 定时发布</a-button>
    </template>


    <TimeModal @register="timeRegister" @handleOk="handleTime" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
import { useModal } from '@/components/Modal';
import { BasicForm, FormSchema, useForm } from '@/components/Form';

import TimeModal from './TimeModal.vue';
import { formSchema } from './article.data';
const startDateTime = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));
const [timeRegister, { openModal: openModal }] = useModal();
const schemas: FormSchema[] = formSchema
const [registerForm, { setFieldsValue, validate }] = useForm({
  labelWidth: 120,
  schemas,
  showActionButtonGroup: false,
  actionColOptions: {
    span: 24,
  },
});
const [register, { closeDrawer }] = useDrawerInner((data) => {
  setFieldsValue(data);
});
async function handleSubmit() {
  try {
    const values = await validate();
    console.log(values, 'values');
  } catch (error) {
  }
}
function timePublish() {
  openModal(true, {
    startDateTime: startDateTime.value
  });
}
async function handleTime(data: any) {
  startDateTime.value = data.startDateTime
  const values = await validate();
  console.log(values, 'values');
  closeDrawer()
  openModal(false)
}
</script>
