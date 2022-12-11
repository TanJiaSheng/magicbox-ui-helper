import { BkDocument } from '../index';
import { DocumentAttribute } from '../index';
import { DocumentMethod } from '../index';
import { DocumentEvent } from '../index';
import { DocumentSlot } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'value/v-model',
    description: '选中项绑定值',
    type: '-',
    value: '—',
    default: '—'
  },
  {
    name: 'multiple',
    description: '是否多选',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'list',
    description: '可选项数据源',
    type: 'Array',
    value: '-',
    default: '[]'
  },
  {
    name: 'options',
    description: '配置项，具体见下表',
    type: 'Object',
    value: '—',
    default: '—'
  },
  {
    name: 'scroll-height',
    description: '下拉列表滚动高度',
    type: 'Number',
    value: '—',
    default: '216'
  },
  {
    name: 'scroll-width',
    description: '子版面的宽度',
    type: 'Number',
    value: '-',
    default: '160'
  },
  {
    name: 'placeholder',
    description: '未选择数据时的占位',
    type: 'String',
    value: '—',
    default: '请选择'
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
    description: '是否支持清空选项',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'filterable',
    description: '是否允许快捷搜索',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'check-any-level',
    description: '是否允许选择任意一级',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'limit-one-line',
    description: '限制是否只显示一行，当显示为一行时，单个选项不允许删除。（仅当 multiple 为 true 时生效）',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'show-complete-name',
    description: '输入框中是否显示选中值的完整路径',
    type: 'Boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'separator',
    description: '选项分隔符',
    type: 'string',
    value: '—',
    default: "' / '"
  },
  {
    name: 'trigger',
    description: '触发子菜单模式',
    type: 'String',
    value: 'click / hover',
    default: 'click'
  },
  {
    name: 'remote-method',
    description: '远程加载方法，具体配置看样例使用',
    type: 'Function',
    value: '-',
    default: '-'
  },
  {
    name: 'is-remote',
    description: '开启远程加载，搭配remote-method一起使用',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'popover-options',
    description: '透传至下拉列表所在的popover组件的tippyOptions选项',
    type: 'Object',
    value: '—',
    default: '—'
  },
  {
    name: 'ext-popover-cls',
    description: '配置自定义样式类名，传入的类会被加在下拉菜单的 DOM .bk-cascade-dropdown-content 上',
    type: 'String',
    value: '—',
    default: '—'
  }
];

export const options: DocumentAttribute[] = [
  {
    name: 'idKey',
    description: '选项的id取值',
    type: 'String',
    value: '—',
    default: 'id'
  },
  {
    name: 'nameKey',
    description: '选项的name取值',
    type: 'String',
    value: '—',
    default: 'name'
  },
  {
    name: 'childrenKey',
    description: '选项的children取值',
    type: 'String',
    value: '—',
    default: 'children'
  }
];

export const methods: DocumentMethod[] = [
  {
    name: 'getCheckedNodes',
    description: '获取选中的节点',
    parameter: '(leafOnly) 是否只是叶子节点，默认值为 `false`'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '选项发生变化时调用',
    parameter: 'newValue, oldValue, selectList'
  },
  {
    name: 'toggle',
    description: '切换下拉折叠状态时调用',
    parameter: 'Boolean'
  },
  {
    name: 'clear',
    description: '清空选项时调用',
    parameter: 'oldValue'
  },
  {
    name: 'search',
    description: '搜索输入时调用',
    parameter: 'string, event'
  }
];

export const slots: DocumentSlot[] = [
  {
    name: 'option',
    description: '可以用以自定义下拉列表展示格式 scope中存在node参数'
  }
];

export const document: BkDocument = { attributes, options, methods, events, slots };

export default document;
