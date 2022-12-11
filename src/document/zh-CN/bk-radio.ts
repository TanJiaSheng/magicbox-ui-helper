import { BkDocument, DocumentAttribute, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'value/v-model',
    description: '绑定值',
    type: 'string / number / boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'name',
    description: '名称',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'checked',
    description: '初始化选中状态，如果 v-model 绑定的值也会相应改变，这个属性在 radio-group 里无效',
    type: 'Boolean',
    value: '-',
    default: '—'
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-form-radio 上',
    type: 'String',
    value: '—',
    default: '—'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当前单选框被选中时触发此回调函数',
    parameter: '当前单选框被选中时触发此回调函数'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
