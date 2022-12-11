import { BkDocument, DocumentAttribute } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'value',
    description: 'Radio 的 value',
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
  }
];

export const document: BkDocument = { attributes };

export default document;
