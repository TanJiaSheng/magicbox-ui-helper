import { BkDocument } from '../index';
import { DocumentAttribute } from '../index';
import { DocumentMethod } from '../index';
import { DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'input-style',
    description: '样式',
    type: 'Object',
    value: '',
    default: '{}'
  },
  {
    name: 'type',
    description: '输入框类型',
    type: 'string',
    value: 'ext, textarea, password, number, email, url, date',
    default: 'text'
  },
  {
    name: 'maxlength',
    description: '原生属性，最大输入长度',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'minlength',
    description: '原生属性，最小输入长度',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'clearable',
    description: '是否可清空',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'resizeable',
    description: '是否显示切换密码图标',
    type: 'boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'readonly',
    description: '原生属性，是否只读',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'size',
    description: '输入框尺寸，只在 type!="textarea" 时有效，字号可通过 font-size 属性覆盖',
    type: 'string',
    value: 'large / medium / small',
    default: '—'
  },
  {
    name: 'name',
    description: '名称，原生属性',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'left-icon',
    description: '左边显示icon',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'right-icon',
    description: '右边显示icon',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'precision',
    description: '保留小数位',
    type: 'Number',
    value: '[0-16]',
    default: '-'
  },
  {
    name: 'prepend-unit',
    description: '数字类型单位前缀',
    type: 'String',
    value: '—',
    default: '-'
  },
  {
    name: 'append-unit',
    description: '数字类型单位后缀',
    type: 'String',
    value: '-',
    default: '-'
  },
  {
    name: 'show-controls',
    description: 'type为number时，是否显示右侧控制箭头',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'password-icon',
    description: '设置密码框切换显示密码的 icon',
    type: 'Array',
    value: '—',
    default: `['icon-eye-slash', 'icon-eye']`
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-form-control 上',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'native-attributes',
    description: '原生属性，设置最小值',
    type: 'Object',
    value: '—',
    default: '—'
  },
  {
    name: 'show-word-limit',
    description: '是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效',
    type: 'boolean',
    value: 'true/fasle',
    default: '-'
  },
  {
    name: 'behavior',
    description: '简约风格设置(simplicity:简约 normal:正常 type=textarea时不生效)',
    type: 'String',
    value: 'normal/simplicity',
    default: 'normal'
  },
  {
    name: 'show-clear-only-hover',
    description: '是否在只有 hover/active 的时候才显示 clear 清除按钮',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'stop-auto-set-number',
    description: '是否在禁止超出min和max范围时自动校正数据，如果为true将会有error提示',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'show-error-tip',
    description: '配合stop-auto-set-number属性一起使用，开启后报错信息会以tip形式展示',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '文本框内容变化时调用',
    parameter: 'value, event'
  },
  {
    name: 'input',
    description: '文本框输入时调用',
    parameter: 'value, event'
  },
  {
    name: 'focus',
    description: '文本框获取焦点时调用',
    parameter: 'value, event'
  },
  {
    name: 'blur',
    description: '文本框失去焦点时调用',
    parameter: 'value, event'
  },
  {
    name: 'keypress',
    description: '文本框输入按下键盘时调用',
    parameter: 'value, event'
  },
  {
    name: 'keydown',
    description: '文本框输入按下键盘时调用',
    parameter: 'value, event'
  },
  {
    name: 'keyup',
    description: '文本框输入按下键盘按键松开时调用',
    parameter: 'value, event'
  },
  {
    name: 'enter',
    description: '文本框获取焦点时，按下回车时调用',
    parameter: 'value, event'
  },
  {
    name: 'paste',
    description: '文本框粘贴内容时调用',
    parameter: 'value, event'
  },
  {
    name: 'clear',
    description: '在点击由 `clearable` 属性生成的清空按钮时触发',
    parameter: 'value, event'
  },
  {
    name: 'step',
    description: '点击数字输入框上下箭头时调用',
    parameter: 'value, event'
  },
  {
    name: 'left-icon-click',
    description: '点击配置的左图标时调用',
    parameter: 'value, event'
  },
  {
    name: 'right-icon-click',
    description: '点击配置的右图标时调用',
    parameter: 'value, event'
  }
];

export const document: BkDocument = { attributes, events };

export default document;
