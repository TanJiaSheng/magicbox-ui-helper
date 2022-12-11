import { DocumentSlot } from './../index';
import { BkDocument } from '../index';
import { DocumentAttribute } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '选项卡唯一标识',
    type: '-',
    value: '—',
    default: ''
  },
  {
    name: 'label',
    description: '选项卡默认显示的文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '选项卡是否禁用',
    type: 'boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'closable',
    description: '是否可关闭选项卡，设置此属性后，bk-tab 上的 closable 属性将不会作用于该 bk-tab-panel',
    type: 'boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'visible',
    description: '是否显示选项卡',
    type: 'boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'sortable',
    description: '选项卡标签是否可拖拽排序',
    type: 'boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'render-label',
    description: '用于自定义选项卡label的内容的渲染函数，此配置优先级比label插槽更高',
    type: 'Function(h, name)',
    value: '—',
    default: '-'
  },
  {
    name: 'render-directive',
    description: 'render-directive',
    type: 'String',
    value: 'if / show',
    default: 'show'
  }
];

export const slots: DocumentSlot[] = [
  {
    name: 'label',
    description: '替换默认显示的选项卡文案的内容，当内容需要动态改变时，请选择使用render-label配置'
  }
];

export const document: BkDocument = { attributes, slots };

export default document;
