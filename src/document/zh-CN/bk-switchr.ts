import { BkDocument, DocumentAttribute, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '绑定值, 是否打开',
    type: 'Boolean',
    value: 'true / false',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否显示文本',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'show-text',
    description: 'switch 的宽度（像素）',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'on-text',
    description: '打开状态显示的文本',
    type: 'String',
    value: '建议 1 到 3 个字符，过长显示不全',
    default: 'ON'
  },
  {
    name: 'off-text',
    description: '关闭状态显示文本',
    type: 'String',
    value: '建议 1 到 3 个字符，过长显示不全',
    default: 'OFF'
  },
  {
    name: 'size',
    description: '尺寸，显示文本时此属性无效',
    type: 'String',
    value: 'large / small / mini',
    default: '—'
  },
  {
    name: 'theme',
    description: '主题',
    type: 'String',
    value: 'primary / success',
    default: 'success'
  },
  {
    name: 'true-value',
    description: 'switcher的真值',
    type: 'Boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'false-value',
    description: 'switcher的假值',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'is-outline',
    description: '是否为描边效果',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'is-square',
    description: '是否为方形效果',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'pre-check',
    description: '状态切换的前置检测接收操作后的状态（lastValue），返回true，false，Promise',
    type: 'Function',
    value: '—',
    default: '—'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '状态发生变化时回调函数',
    parameter: '新状态的值'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
