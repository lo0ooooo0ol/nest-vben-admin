<template>
    <BasicDrawer v-bind="$attrs" @register="register" title="基本设置" width="50%" :showCancelBtn="false" showFooter @ok="handleOk" okText="发布"> 
      <div>
        <BasicForm @register="registerForm" />
      </div>
      <template #insertFooter>
      <a-button> 保存草稿箱</a-button>
    </template>
    <template #centerFooter>
      <a-button> 定时发布</a-button>
    </template>

    <!-- <template #appendFooter>
      <a-button> btn3</a-button>
    </template> -->

    <!-- <template #footer>
      <a-button> customerFooter</a-button>
    </template> -->
    </BasicDrawer>
  </template>
  <script lang="ts" setup>
    import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
    import { BasicForm, FormSchema, useForm } from '@/components/Form';
    import { uploadApi } from '@/api/sys/upload';
    const schemas: FormSchema[] = [
      {
        field: 'title',
        component: 'Input',
        label: '标题',
        colProps: {
          span: 24,
        },
        rules: [{ required: true, message: '请输入文章标题' }],
        defaultValue: '',
      },
      {
        field: 'field2',
        component: 'Input',
        label: '字段2',
        colProps: {
          span: 12,
        },
      },
      {
      field: 'cover',
      component: 'Upload',
      label: '封面',
      colProps: {
        span: 24,
      },
      rules: [{ required: true, message: '请选择上传封面' }],
      componentProps: {
        api: uploadApi,
      },
    },
    ];
    const [registerForm, { setFieldsValue }] = useForm({
      labelWidth: 120,
      schemas,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 24,
      },
    });
    const [register] = useDrawerInner((data) => {
      // 方式1
      setFieldsValue({
        field2: data.data,
        field1: data.info,
      });
    });
    function handleOk() {
    console.log('=====================');
    console.log('ok');
    console.log('======================');
  }
  </script>