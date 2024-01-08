<template>
  <BasicModal width="20%" v-bind="$attrs" @register="register" title="定时发布" okText="定时发布" :maskClosable="false"
    @ok="handleOk" @visible-change="handleVisibleChange">
    请选择当前时间后 4小时 至 7天 进行定时发布
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="modelRef" />
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue';
import { BasicModal, useModalInner } from '@/components/Modal';
import { BasicForm, FormSchema, useForm } from '@/components/Form';

const emit = defineEmits(['handleOk']);

const schemas: FormSchema[] = [
  {
    field: 'startDateTime',
    label: '',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      placeholder: '开始日期、时间',
      showTime: { format: 'HH:mm:ss' },
    },
  }
];

const props = defineProps({
  userData: { type: Object },
});
const modelRef = ref({});

const [
  registerForm,
  { setFieldsValue, validate }
] = useForm({
  labelWidth: 120,
  schemas,
  showActionButtonGroup: false,
  actionColOptions: {
    span: 24,
  },
});

const [register] = useModalInner((data) => {
  data && onDataReceive(data);
});

function onDataReceive(data) {
  setFieldsValue({
    startDateTime: data.startDateTime,
  });
}

function handleVisibleChange(v) {
  console.log(v, 'handle');
  v && props.userData && nextTick(() => onDataReceive(props.userData));
}
async function handleOk() {
  const values = await validate();
  emit("handleOk", values)
  
}
</script>
