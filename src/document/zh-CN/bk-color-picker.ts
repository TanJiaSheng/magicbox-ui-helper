import { BkDocument, DocumentAttribute, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'value/v-model',
    description: '绑定值',
    type: 'string',
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
    name: 'readonly',
    description: '是否只读',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'size',
    description: '三种尺寸：大、默认（中）、小',
    type: 'string',
    value: 'large / small',
    default: '—'
  },
  {
    name: 'show-value',
    description: '是否显示当前选择的RGB颜色值',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'transfer',
    description: '控制颜色面板是否出现在 body 内',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'recommend',
    description: '是否显示预设值',
    type: 'Boolean/Array',
    value: '—',
    default: 'true'
  },
  {
    name: 'ext-cls',
    description: 'ext-cls',
    type: 'String',
    value: '—',
    default: '—'
  }
];

export const events: DocumentEvent[] = [
  { name: 'change', description: '当前选择的RGB颜色值变化时调用', parameter: '当前值value' }
];

export const document: BkDocument = { attributes, events };

export default document;
