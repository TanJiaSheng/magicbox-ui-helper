import { BkDocument, DocumentAttribute, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'value/v-model',
    description: '绑定值',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'name',
    description: '名称',
    type: 'String',
    value: '—',
    default: '—'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '显示时触发此回调函数',
    parameter: '当前值，原来值'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
