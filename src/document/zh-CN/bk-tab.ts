import { DocumentScopedSlot } from './../index';
import { BkDocument } from '../index';
import { DocumentAttribute } from '../index';
import { DocumentEvent } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'active',
    description: '当前显示的选项卡名称，支持sync修饰符',
    type: '-',
    value: '—',
    default: '-'
  },
  {
    name: 'type',
    description: '选项卡样式',
    type: 'string',
    value: 'card / border-card / unborder-card / gap-card-deep',
    default: 'border-card'
  },
  {
    name: 'tab-position',
    description: '选项卡位置',
    type: 'string',
    value: 'left / right / top',
    default: 'top'
  },
  {
    name: 'closable',
    description: '标签是否可关闭',
    type: 'boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'addable',
    description: '标签是否可增加',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'sortable',
    description: '标签是否可拖拽排序',
    type: 'boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'sort-type',
    description: '标签拖拽排序的方式，只有开启sortable才有效（只会在创建的时候加载类型，动态修改无效）',
    type: 'string',
    value: '标签拖拽排序的方式，只有开启sortable才有效（只会在创建的时候加载类型，动态修改无效）',
    default: 'insert'
  },
  {
    name: 'show-close-icon-always',
    description: '选项卡关闭按钮是否常显，仅当选项卡可关闭时生效',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'label-height',
    description: '选项卡label的高度',
    type: 'Number',
    value: '-',
    default: '50 / 36'
  },
  {
    name: 'scroll-step',
    description: '可滚动时，每次滚动的像素',
    type: 'Number',
    value: '-',
    default: '200'
  },
  {
    name: 'before-toggle',
    description: '切换选项卡前的钩子函数, 支持异步函数',
    type: 'Function(panelName, panelInstance)',
    value: '-',
    default: '-'
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-tab 上',
    type: 'String',
    value: '-',
    default: '-'
  },
  {
    name: 'validate-active',
    description: '是否校验ActiveName，true：如果active匹配不到，默认激活第一个Tab，触发tab-change；false：active匹配不到不显示',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'show-header',
    description: '是否显示选项卡头部',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'change-on-hover',
    description: '鼠标悬停tab时进行切换',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'change-on-hover-delay',
    description: ' 鼠标悬停切换tab的延时，单位为毫秒',
    type: 'Number',
    value: '-',
    default: '1000'
  },
  {
    name: 'active-bar',
    description: '当前选中激活样式，暂时只支持横排样式',
    type: 'Object',
    value: '-',
    default: `{ position: 'bottom', height: '2px' }`
  },
  {
    name: 'add-show-next-right',
    description: '添加按钮是否显示在右边滚动按钮左边',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'inside-padding',
    description: '设置选项卡内容部分的padding值',
    type: 'String / Number',
    value: '-',
    default: '20'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'tab-change',
    description: '选项卡切换时调用',
    parameter: 'name'
  },
  {
    name: 'close-panel',
    description: '关闭选项卡时调用',
    parameter: 'index, panel'
  },
  {
    name: 'add-panel',
    description: '新增选项卡时调用',
    parameter: '—'
  },
  {
    name: 'sort-change',
    description: '	标签拖动交互位置后调用',
    parameter: 'dragTabIndex（拖动的tab的index）,dropTabIndex'
  },
  {
    name: 'on-drag-tab',
    description: '标签拖动时调用',
    parameter: 'dragTabIndex,dragEvent'
  },
  {
    name: 'scroll-show-change',
    description: '滚动按钮显隐时调用',
    parameter: 'hasScroll'
  }
];

export const slots: DocumentScopedSlot[] = [
  {
    name: 'setting',
    description: '插入至选项卡右上角的扩展内容'
  },
  {
    name: 'add',
    description: '自定义新增按钮'
  }
];

export const document: BkDocument = { attributes, events, slots };

export default document;
