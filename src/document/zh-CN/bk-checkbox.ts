import { BkDocument, DocumentAttribute, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'String / Number / Boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'value',
    description: 'checkbox 的真值，与 checkbox-group 结合时通过配置 value',
    type: 'String / Number / Boolean',
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
    name: 'true-value',
    description: 'checkbox 的真值',
    type: 'String / Number / Boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'false-value',
    description: 'checkbox 的假值',
    type: 'String / Number / Boolean',
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
    description: '初始化选中状态，如果 v-model 绑定的值也会相应改变，这个属性在 check-group 里无效',
    type: 'Boolean',
    value: 'true / false',
    default: '-'
  },
  {
    name: 'indeterminate',
    description: '是否半选',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-form-checkbox 上',
    type: 'String',
    value: '—',
    default: '-'
  },
  {
    name: 'before-change',
    description: '在选中状态发生变更前执行的函数，返回false将中断状态变更',
    type: 'Function',
    value: '—',
    default: '-'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当绑定值变化时触发的事件',
    parameter: '更新后的值'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
