import { ref } from 'vue';
import { FormSchema } from '/@/components/Table';
import { getUserList, deleteUser } from '/@/api/system/user';
// 每行个数
export const grid = ref(6);
// slider属性
export const useSlider = (min = 6, max = 8) => {
  // 每行显示个数滑动条
  const getMarks = () => {
    const l = {};
    for (let i = min; i < max + 1; i++) {
      l[i] = {
        style: {
          color: '#fff',
        },
        label: i,
      };
    }
    return l;
  };
  return {
    min,
    max,
    marks: getMarks(),
    step: 1,
  };
};


export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题 ',
    component: 'Input',
    colProps: { sm: 12, xl: 4 },
  },
  {
    field: 'is_open',
    label: '可见性 ',
    component: 'Select',
    componentProps: {
      options: [
        { label: '全部', value: -1 },
        { label: '公开', value: 1 },
        { label: '私有', value: 0 },
      ],
    },
    colProps: { sm: 12, xl: 4 },
  },
  {
    field: 'category',
    label: '专栏',
    component: 'Select',
    componentProps: {
      options: [
        { label: '全部', value: -1 },
        { label: '啊实打实的 ', value: 1 },
        { label: '哦i威威', value: 0 },
      ],
    },
    colProps: { sm: 12, xl: 4 },
  },
  {
    field: 'label',
    label: '标签',
    component: 'Select',
    componentProps: {
      options: [
        { label: '全部', value: -1 },
        { label: '啊实打实的 ', value: 1 },
        { label: '哦i威威', value: 0 },
      ],
    },
    colProps: { sm: 12, xl: 4 },
  },
  {
    // field: 'author_id',
    // label: '作者',
    // component: 'Select',
    // componentProps: {
    //   options: [
    //     { label: '全部', value: -1 },
    //     { label: '啊实打实的 ', value: 1 },
    //     { label: '哦i威威', value: 0 },
    //   ],
    // },
    // colProps: { sm: 12, xl: 4 },
    label: '作者',
    field: 'author_id',
    component: 'ApiSelect',
    componentProps: {
      api: getUserList,
      resultField: 'items',
      labelField: 'username',
      valueField: 'id',
      mode: 'multiple',
      maxTagCount:1
    },
    colProps: { sm: 12, xl: 4 },
    // colProps: { span: 24 },
    // itemProps: { validateTrigger: 'blur' },
    // required: true,
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
    colProps: { sm: 12, xl: 4 },
  },
];