import { BkDocument, DocumentAttribute, DocumentMethod, DocumentEvent, DocumentSlot } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'boolean / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'multiple',
    description: '是否多选',
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
    name: 'readonly',
    description: '是否只读',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'size',
    description: '输入框尺寸',
    type: 'string',
    value: 'large / small',
    default: '—'
  },
  {
    name: 'clearable',
    description: '是否可以清空选项',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'display-tag',
    description: '是否将选择的结果以标签的形式显示，仅当开启multiple时生效',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'auto-height',
    description: '下拉框高度是否自动撑开，当开启display-tag时生效',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'non-stretchable',
    description: '悬浮展示内容，不撑开下拉框高度，当开启display-tag时生效',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'collapse-tag',
    description: '当以标签形式显示选择结果时，是否合并溢出的结果以数字显示',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'is-tag-width-limit',
    description: '是否对标签进行宽度限制，超出显示...',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'placeholder',
    description: '占位符',
    type: 'string',
    value: '—',
    default: '请选择'
  },
  {
    name: 'show-select-all',
    description: '是否显示全选选项，仅当开启multiple时生效',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'scroll-height',
    description: '	下拉列表滚动高度',
    type: 'Number',
    value: '—',
    default: '216'
  },
  {
    name: 'allow-create',
    description: '是否允许自定义标签输入',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'allow-enter',
    description: '是否允许按enter键，根据搜索结果确定选择值',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'loading',
    description: '是否加载中',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'searchable',
    description: '是否显示搜索框',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'loading-text',
    description: '远程加载时显示的文字',
    type: 'string',
    value: '—',
    default: '加载中'
  },
  {
    name: 'searchable-min-count',
    description: '在显示搜索框的情况下，下拉列表数量大于等于该值时才显示搜索框',
    type: 'Number',
    value: '—',
    default: '0'
  },
  {
    name: 'search-ignore-case',
    description: '搜索选项时是否忽略大小写',
    type: 'string',
    value: '—',
    default: '无数据'
  },
  {
    name: 'popover-min-width',
    description: '设置下拉列表的最小宽度, 默认的列表宽度跟组件保持一致',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'popover-options',
    description: '透传至下拉列表所在的popover组件的tippyOptions选项',
    type: 'Object',
    value: '-',
    default: '-'
  },
  {
    name: 'remote-method',
    description: '远程搜索方法（可返回 Promise 或者直接返回数据），函数的参数为搜索关键字',
    type: 'Function',
    value: '-',
    default: '-'
  },
  {
    name: 'font-size',
    description: '设置下拉已选择及列表的字体大小',
    type: 'String',
    value: 'normal（12px）/ medium（14px）/ large（16px）',
    default: 'normal'
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-select 上',
    type: 'String',
    value: '-',
    default: '-'
  },
  {
    name: 'ext-popover-cls',
    description: '配置自定义样式类名，传入的类会被加在下拉菜单的 DOM .bk-select-dropdown-content 上',
    type: 'String',
    value: '-',
    default: '-'
  },
  {
    name: 'z-index',
    description: '弹出层的 z-index',
    type: 'Number',
    value: '-',
    default: '2500'
  },
  {
    name: 'prefix-icon',
    description: '配置在下拉选框前面的icon类名',
    type: 'String',
    value: '-',
    default: '-'
  },
  {
    name: 'search-placeholder',
    description: '搜索框占位',
    type: 'String',
    value: '-',
    default: '输入关键字搜索'
  },
  {
    name: 'search-with-pinyin',
    description: '搜索的时候是否加入中文转换为拼音搜索',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'enable-virtual-scroll',
    description: '是否开启虚拟滚动',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'virtual-scroll-render',
    description: '虚拟滚动内容的render,参数分别为数据和 createElement 函数',
    type: 'Function',
    value: '-',
    default: '-'
  },
  {
    name: 'list',
    description: '开启虚拟滚动的时候需要传入的数据列表',
    type: 'Array',
    value: '-',
    default: '-'
  },
  {
    name: 'id-key',
    description: '虚拟滚动数据，值的key值',
    type: 'String',
    value: '-',
    default: 'id'
  },
  {
    name: 'display-key',
    description: '虚拟滚动数据，显示字段的key值',
    type: 'String',
    value: '-',
    default: 'name'
  },
  {
    name: 'value-key',
    description: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
    type: 'string',
    value: '—',
    default: 'value'
  },
  {
    name: 'item-height',
    description: '虚拟滚动单行元素的高度',
    type: 'Number',
    value: '-',
    default: '32'
  },
  {
    name: 'show-empty',
    description: '是否展示空数据的提示',
    type: 'String',
    value: '-',
    default: 'true'
  },
  {
    name: 'show-on-init',
    description: '是否在初始化的时候展示下拉列表',
    type: 'Boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'behavior',
    description: '风格设置(simplicity:简约 normal:正常)',
    type: 'String',
    value: 'normal / simplicity',
    default: 'normal'
  },
  {
    name: 'enable-scroll-load',
    description: '下拉列表是否支持滚动分页加载，配合scroll-end事件使用',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'scroll-loading',
    description: '滚动分页loading状态，同spin组件的配置一样',
    type: 'Object',
    value: '-',
    default: "{ isLoading: false, size: 'mini', theme: 'info', icon: 'circle-2-1', placement: 'right' }"
  },
  {
    name: 'auto-scroll',
    description: '是否自动跳转到已选项',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
];

export const events: DocumentEvent[] = [
  {
    name: 'selected',
    description: '选择列表时调用，多选时，回调参数均为数组',
    parameter: 'value, option(s)'
  },
  {
    name: 'toggle',
    description: '切换下拉折叠状态时调用',
    parameter: 'Boolean'
  },
  {
    name: 'change',
    description: '选项发生变化时调用',
    parameter: 'newValue, oldValue'
  },
  {
    name: 'clear',
    description: '清空已选项时调用',
    parameter: 'oldValue'
  },
  {
    name: 'tab-remove',
    description: '删除tab时触发',
    parameter: 'options'
  },
  {
    name: 'scroll-end',
    description: '下拉列表滚动到底部时触发（需enable-scroll-load为true）',
    parameter: '-'
  }
];

export const slots: DocumentSlot[] = [
  { name: '—', description: '默认作用域插槽，用以自定义下拉列表展示格式, 作用域插槽参数为 {option, optionIndex, group, groupIndex}' },
  { name: 'extension', description: '固定在下拉列表最后的内容' },
  { name: 'trigger', description: '可用于自定义选框的触发者,作用域插槽参数为该组件的props中的属性' },
  { name: 'selectedNameLeft', description: '可用于选择值左侧的插槽设置' }
];

export const document: BkDocument = { attributes, events, slots };

export default document;
