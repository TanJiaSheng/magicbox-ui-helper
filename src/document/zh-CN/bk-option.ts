import { BkDocument } from '../index';
import { DocumentAttribute } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'id',
    description: '当前选项的值，必填',
    type: '-',
    value: '—',
    default: '—'
  },
  {
    name: 'name',
    description: '当前选项展示的文本，必填',
    type: '-',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用当前选项',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  }
];

export const document: BkDocument = { attributes };

export default document;
