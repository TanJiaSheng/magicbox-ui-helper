import { BkDocument, DocumentAttribute, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '时间选择器组件的值，可以是 Date 或字符串或数组，只有在 timerange 类型时才支持数组',
    type: 'Date / String / Array',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '类型',
    type: 'String',
    value: 'time / timerange',
    default: 'time'
  },
  {
    name: 'readonly',
    description: '只读',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'editable',
    description: '设置文本框是否可编辑',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'clearable',
    description: '是否显示清除按钮',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'allow-cross-day',
    description: '是否允许时间段进行跨天选择, 即起始时间大于终止时间, 此属性只在type为timerange时生效',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'format',
    description: '格式，不配置 ss 时即不显示秒',
    type: 'String',
    value: '—',
    default: 'HH:mm:ss'
  },
  {
    name: 'steps',
    description: '面板的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15, 20] 时，面板中分钟的备选项为：00、15、30、45，秒的备选项为：00、20、40。',
    type: 'Array',
    value: '—',
    default: '[]'
  },
  {
    name: 'placement',
    description: '面板出现的位置',
    type: 'String',
    value: 'top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end',
    default: 'bottom-start'
  },
  {
    name: 'transfer',
    description: '控制日历面板是否出现在 body 内',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'placeholder',
    description: '占位文案',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'open',
    description: '控制面板的显示与隐藏',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'type',
    description: '显示type',
    type: 'string',
    value: 'year/month/date/week/ datetime/datetimerange/daterange',
    default: 'date'
  },
  {
    name: 'disabled-hours',
    description: '不可选小时数，数组中的小时数将为仅用状态',
    type: 'Array',
    value: '-',
    default: '[]'
  },
  {
    name: 'disabled-minutes',
    description: '不可选分钟数，数组中的分钟数将为仅用状态',
    type: 'Array',
    value: '-',
    default: '[]'
  },
  {
    name: 'disabled-seconds',
    description: '不可选分秒数，数组中的秒数将为仅用状态',
    type: 'Array',
    value: '-',
    default: '[]'
  },
  {
    name: 'hide-disabled-options',
    description: '是否隐藏禁止选择的小时、分钟、秒',
    type: 'Boolean',
    value: '	true / false',
    default: 'false'
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-date-picker 上',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'ext-popover-cls',
    description: '配置自定义样式类名，传入的类会被加在弹出的日历面板 DOM .bk-date-picker-dropdown 上',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'behavior',
    description: '风格设置(simplicity:简约 normal:正常)',
    type: 'String',
    value: 'normal / simplicity',
    default: 'normal'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '时间改变事件，参数为当前选择的时间',
    parameter: 'time'
  },
  {
    name: 'open-change',
    description: '面板弹出或收起事件，参数为面板展开收起的状态',
    parameter: 'state'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
