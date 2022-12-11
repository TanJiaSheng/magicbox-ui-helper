import { BkDocument, DocumentAttribute, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '当前分组名称，必填',
    type: '-',
    value: '—',
    default: '—'
  },
  {
    name: 'show-count',
    description: '是否显示分组子选项总数',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'show-collapse',
    description: '	是否显示分组收起\展开',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'show-select-all',
    description: '是否支持支持分组全选',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'is-collapse',
    description: '分组子选项是否收起，必须设置了show-collapse为true此配置项才生效，此配置项支持sync同步操作',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'readonly',
    description: '分组展开收起功能是否只读，必须设置了show-collapse为true此配置项才生效',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'collapse',
    description: '开启展开\收起分组功能时，回调事件',
    parameter: 'isCollapse：Boolean'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
