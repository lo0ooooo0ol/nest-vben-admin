<template>
  <BasicModal
  width="20%"
    v-bind="$attrs"
    @register="register"
    title="定时发布"
    @visible-change="handleVisibleChange"
  >
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

  const schemas: FormSchema[] = [
    {
      field: 'startDateTime',
      label: '日期时间范围',
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
    // {
    //   // setFieldsValue,
    //   // setProps
    // },
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
    console.log('Data Received', data);
    // 方式1;
    // setFieldsValue({
    //   field2: data.data,
    //   field1: data.info,
    // });

    // // 方式2
    modelRef.value = { startDateTime:data.startDateTime };

    // setProps({
    //   model:{ field2: data.data, field1: data.info }
    // })
  }

  function handleVisibleChange(v) {
    v && props.userData && nextTick(() => onDataReceive(props.userData));
  }
</script>
