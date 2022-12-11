import { BkDocument } from '../index';
import { DocumentAttribute } from '../index';
import { DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '选中值',
    type: 'String',
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
    name: 'auto-width',
    description: '自适应父元素宽度，适用于胶囊按钮组',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'type',
    description: '类型',
    type: 'String',
    value: 'text(文字式切换)',
    default: '-'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '单选组选中的值改变时触发此回调函数',
    parameter: '当前单选组选中值'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
