import { uploadApi } from '@/api/system/upload';
import { FormSchema } from '/@/components/Table';
export const formSchema: FormSchema[] = [
    {
        field: 'field4',
        component: 'Select',
        label: '文章标签',
        colProps: {
          span: 24,
        },
        componentProps: {
          mode: 'tags',
          options: [
            {
              label: '选项1',
              value: '1',
              key: '1',
            },
            {
              label: '选项2',
              value: '2',
              key: '2',
            },
          ],
          onChange: (value) => {
            console.log(value, '123');
          },
        },
        rules: [
          {
            required: true,
            message: '文章标签',
            type: 'array',
          },
        ],
      },
  {
        field: 'field4',
        component: 'Select',
        label: '文章专栏',
        colProps: {
          span: 24,
        },
        componentProps: {
          mode: 'tags',
          options: [
            {
              label: '选项1',
              value: '1',
              key: '1',
            },
            {
              label: '选项2',
              value: '2',
              key: '2',
            },
          ],
          onChange: (value) => {
            console.log(value, '123');
          },
        },
        rules: [
          {
            required: true,
            message: '文章专栏',
            type: 'array',
          },
        ],
      },
    {
      field: 'cover',
      component: 'Upload',
      label: '封面',
      colProps: {
        span: 24,
      },
      // rules: [{ required: true, message: '请选择上传封面' }],
      componentProps: {
        api: uploadApi,
      },
    },
    {
        field: 'is_comment',
        label: '允许评论',
        component: 'RadioGroup',
        defaultValue: 1,
        colProps: {
            span: 24,
          },
        componentProps: {
          options: [
            { label: '启用', value: 1 },
            { label: '停用', value: 0 },
          ],
        },
      },
      {
        field: 'is_top',
        label: '是否置顶',
        component: 'RadioGroup',
        defaultValue: 1,
        colProps: {
            span: 24,
          },
        componentProps: {
          options: [
            { label: '启用', value: 1 },
            { label: '停用', value: 0 },
          ],
        },
      },
      {
        field: 'is_open',
        label: '可见性',
        component: 'RadioGroup',
        defaultValue: 1,
        colProps: {
            span: 24,
          },
        componentProps: {
          options: [
            { label: '启用', value: 1 },
            { label: '停用', value: 0 },
          ],
        },
      },
  ];
  