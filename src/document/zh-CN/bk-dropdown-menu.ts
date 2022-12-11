import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "align",
    "description": "与触发对象的对齐方式，包括左对齐，居中，右对齐三种方式",
    "type": "String",
    "value": "left / center / right",
    "default": "left"
  },
  {
    "name": "trigger",
    "description": "触发事件",
    "type": "String",
    "value": "click / mouseover",
    "default": "mouseover"
  },
  {
    "name": "disabled",
    "description": "禁用下拉菜单",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "position-fixed",
    "description": "下拉框定位属性",
    "type": "Boolean",
    "value": "`true`（使用position:fiexed来进行定位）、`false`（使用position:absoluted来进行定位）",
    "default": "false"
  },
  {
    "name": "open-delay",
    "description": "打开下拉菜单的延迟时间，单位为毫秒",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "close-delay",
    "description": "关闭下拉菜单的延迟时间，单位为毫秒",
    "type": "Number",
    "value": "——",
    "default": "100"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-dropdown-menu` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "show",
    "description": "显示时触发此回调函数",
    "parameter": "——"
  },
  {
    "name": "hide",
    "description": "隐藏时触发此回调函数",
    "parameter": "——"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "dropdown-trigger",
    "description": "配置触发对象，即触发下拉列表显示的元素"
  },
  {
    "name": "dropdown-content",
    "description": "配置下拉列表"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
