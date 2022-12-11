import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "data",
    "description": "显示的数据",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "values",
    "description": "选择中查询条件 支持v-model",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "split-code",
    "description": "查询条件分隔符",
    "type": "String",
    "value": "——",
    "default": "`"
  },
  {
    "name": "explain-code",
    "description": "查询条件解释符",
    "type": "String",
    "value": "——",
    "default": "空格"
  },
  {
    "name": "placeholder",
    "description": "输入框空白提示",
    "type": "String",
    "value": "——",
    "default": "请输入"
  },
  {
    "name": "empty-text",
    "description": "包含键值得过滤查询查询时为空的提示",
    "type": "String",
    "value": "——",
    "default": "包含键值得过滤查询必须有一个值"
  },
  {
    "name": "max-height",
    "description": "最大高度",
    "type": "Number",
    "value": "——",
    "default": "120"
  },
  {
    "name": "min-height",
    "description": "最小高度",
    "type": "Number",
    "value": "——",
    "default": "32"
  },
  {
    "name": "strink",
    "description": "当输入条件过多超出input最小值时是否伸缩input框",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "show-delay",
    "description": "列表弹窗动画延时时间",
    "type": "Number",
    "value": "——",
    "default": "100"
  },
  {
    "name": "display-key",
    "description": "显示的字段名称",
    "type": "String",
    "value": "——",
    "default": "name"
  },
  {
    "name": "primary-key",
    "description": "项目的唯一id字段名称",
    "type": "String",
    "value": "——",
    "default": "id"
  },
  {
    "name": "condition",
    "description": "查询条件的其他关系值",
    "type": "Object",
    "value": "——",
    "default": "`{ name: '或'}`"
  },
  {
    "name": "filter",
    "description": "是否过滤",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "filter-children-method",
    "description": "自定义过滤子列表的方法",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "filter-menu-method",
    "description": "自定义过滤父列表的方法",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "remote-method",
    "description": "自定义异步获取子列表的方法（必须有返回值，可返回 Promise 或者直接返回数据）",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "remote-empty-text",
    "description": "自定义异步获取子列表为空显示",
    "type": "String",
    "value": "——",
    "default": "暂无数据"
  },
  {
    "name": "remote-loading-text",
    "description": "自定义异步获取子列表时loading显示",
    "type": "String",
    "value": "——",
    "default": "加载中。。。"
  },
  {
    "name": "show-condition",
    "description": "是否显示条件选择 （或）",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "key-delay",
    "description": "监听输入和过滤的延时间隔",
    "type": "Number",
    "value": "——",
    "default": "300"
  },
  {
    "name": "readonly",
    "description": "是否只读",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "wrap-zindex",
    "description": "设置组件的层级高度",
    "type": "Number、String",
    "value": "——",
    "default": "9"
  },
  {
    "name": "popover-zindex",
    "description": "设置下拉列表的层级高度",
    "type": "Number",
    "value": "——",
    "default": "999"
  },
  {
    "name": "default-focus",
    "description": "组件初始化时是否获取焦点",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-popover-tag-change",
    "description": "生成或者删除标签时是否显示一级子列表",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "input-type",
    "description": "输入框类型",
    "type": "String",
    "value": "text/number",
    "default": "text"
  },
  {
    "name": "clearable",
    "description": "是否允许清空",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "validate-message",
    "description": "校验提示文本",
    "type": "String",
    "value": "——",
    "default": "''"
  },
  {
    "name": "input-unfocus-clear",
    "description": "当单元格失去焦点时是否清除输入框的内容",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.search-select-wrap` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "getMenuInstance",
    "description": "获取menu实例方法",
    "parameter": "——"
  },
  {
    "name": "getChildMenuInstance",
    "description": "获取子列表实例方法",
    "parameter": "——"
  },
  {
    "name": "getInputInstance",
    "description": "获取input框实例",
    "parameter": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "show-menu",
    "description": "父列表显示时触发的事件",
    "parameter": "menuInstance"
  },
  {
    "name": "input-change",
    "description": "当用户输入时触发的事件",
    "parameter": "event"
  },
  {
    "name": "input-cut",
    "description": "当用户剪切内容时触发的事件",
    "parameter": "event"
  },
  {
    "name": "input-click",
    "description": "当用户点击input时触发的事件",
    "parameter": "event"
  },
  {
    "name": "input-focus",
    "description": "当单元格获取焦点时触发该事件",
    "parameter": "event"
  },
  {
    "name": "input-click-outside",
    "description": "当单元格失去焦点时触发该事件",
    "parameter": "event"
  },
  {
    "name": "menu-select",
    "description": "当选择父列表项时触发该事件",
    "parameter": "item, index"
  },
  {
    "name": "menu-child-select",
    "description": "当选择子列表项时触发该事件",
    "parameter": "item, index"
  },
  {
    "name": "change",
    "description": "当输入内容发生变化时触发该事件",
    "parameter": "list"
  },
  {
    "name": "key-delete",
    "description": "当用户键入delete删除时会触发该事件",
    "parameter": "item"
  },
  {
    "name": "key-enter",
    "description": "当用户键入enter时会触发该事件",
    "parameter": "event"
  },
  {
    "name": "child-checked",
    "description": "当用户选中子项时触发该事件",
    "parameter": "item, index, next"
  },
  {
    "name": "clear",
    "description": "当用户点击清空时触发该事件",
    "parameter": "event"
  },
  {
    "name": "search",
    "description": "当用户点击搜索图标时触发该事件",
    "parameter": "event"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "prefix",
    "description": "输入框前插槽"
  },
  {
    "name": "nextfix",
    "description": "输入框后插槽"
  },
  {
    "name": "validate",
    "description": "输入校验提示插槽"
  }
];

export const document: BkDocument = {attributes,methods,events,slots,};

export default document;
