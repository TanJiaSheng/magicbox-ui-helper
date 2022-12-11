import { DocumentSlot } from './../index';
import { BkDocument, DocumentAttribute, DocumentMethod, DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '日历组件的值，可以是 Date 或字符串或数组，只有在 daterange 、 datetimerange 和 week 类型时才支持数组',
    type: 'Date / String / Array',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '类型',
    type: 'String',
    value: 'date / daterange / datetime / datetimerange / week / month / year',
    default: 'date'
  },
  {
    name: 'editable',
    description: '设置文本框是否可编辑',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'format',
    description: '格式',
    type: 'String',
    value: '-',
    default: `date: yyyy-MM-dd, month: yyyy-MM, year: yyyy, datetime: yyyy-MM-dd HH:mm:ss, time: HH:mm:ss, timerange: HH:mm:ss, daterange: yyyy-MM-dd, datetimerange: yyyy-MM-dd HH:mm:ss`
  },
  {
    name: 'readonly',
    description: '是否只读',
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
    name: 'clearable',
    description: '是否可清空',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'open',
    description: '控制日历面板的显示与隐藏',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'multiple',
    description: '是否允许选择多个日期，multiple 只支持 date 类型',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'time-picker-options',
    description: '支持 datetime 和 datetimerange 类型，在 DatePicker 中配置[TimePicker](http://cwui-vue2.cwbk.com/#/time-picker)的属性',
    type: 'Object',
    value: '—',
    default: '-'
  },
  {
    name: 'start-date',
    description: '设置日历面板默认显示的日期',
    type: 'Date',
    value: '—',
    default: '—'
  },
  {
    name: 'placement',
    description: '占位文案',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '日历面板出现的位置',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'start-placeholder',
    description: '范围选择时开始日期的占位内容',
    type: 'String',
    value: 'top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end',
    default: 'bottom-start'
  },
  {
    name: 'transfer',
    description: '控制日历面板是否出现在 body 内',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'shortcuts',
    description: '配置快捷选择日期',
    type: 'Object',
    value: '-',
    default: '-'
  },
  {
    name: 'shortcut-close',
    description: '配置点击 shortcuts 是否关闭弹层',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'options',
    description: '额外配置，目前包括不可选日期的配置，具体如下表',
    type: 'Object',
    value: '',
    default: '{}'
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-date-picker 上',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'up-to-now',
    description: '在日期范围选择器和日期时间范围选择器中（即 type 为 daterange 或者 datetimerange），设置 up-to-now 为 true 可使配置终止时间为“至今”',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'use-shortcut-text',
    description: '开启后，点击选中配置的快捷项时，输入框显示的内容为选中的快捷文案，且不可编辑',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'shortcut-selected-index',
    description: '选中的快捷项index',
    type: 'Number',
    value: '-1',
    default: '—'
  },
  {
    name: 'footer-slot-cls',
    description: '自定义 footer 的容器的样式，只有存在自定义 footer 时才会生效',
    type: 'String',
    value: '-',
    default: '—'
  },
  {
    name: 'behavior',
    description: '风格设置(simplicity:简约 normal:正常)',
    type: 'string',
    value: 'normal / simplicity',
    default: 'normal'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '日期改变事件，参数为当前选择的日期以及当前日历组件的类型',
    parameter: 'date, type'
  },
  {
    name: 'clear',
    description: '日历面板点击清空事件，无参数',
    parameter: '-'
  },
  {
    name: 'open-change',
    description: '日历面板弹出或收起事件，参数为日历面板展开收起的状态',
    parameter: 'state'
  },
  {
    name: 'pick-success',
    description: '日历面板选择日期后，点击确定选择成功的事件，无参数',
    parameter: '-'
  },
  {
    name: 'shortcut-change',
    description: '快捷项改变事件',
    parameter: 'value, index'
  }
];

export const slots: DocumentSlot[] = [
  {
    name: 'trigger',
    description: '可用该插槽配合open属性，自定义日期选择器的展示'
  },
  {
    name: 'footer',
    description: '可用该插槽，自定义日期选择器 footer 的展示'
  }
];

export const options: DocumentAttribute[] = [
  {
    name: 'disabledDate',
    description: '配置不可选的日期，参数为当前的日期，返回 true 禁用这天，否则不禁用',
    type: 'Function',
    value: '—',
    default: '—'
  }
];

export const document: BkDocument = { attributes, events, slots, options };

export default document;
