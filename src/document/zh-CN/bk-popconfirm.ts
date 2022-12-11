import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "title",
    "description": "标题",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "theme",
    "description": "类型",
    "type": "String",
    "value": "可以类型【`none` `primary` `success` `warning` `error`】",
    "default": "none"
  },
  {
    "name": "content",
    "description": "正文",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "trigger",
    "description": "触发方式，与`bk-popover`配置相同",
    "type": "String",
    "value": "click,focusin,mouseenter 等，参照[tippy文档](https://atomiks.github.io/tippyjs/v6/all-props/#trigger)",
    "default": "'mouseenter focus'"
  },
  {
    "name": "confirm-text",
    "description": "确认按钮文字",
    "type": "String",
    "value": "—",
    "default": "—"
  },
  {
    "name": "cancel-text",
    "description": "取消按钮文字",
    "type": "String",
    "value": "—",
    "default": "—"
  },
  {
    "name": "disabled",
    "description": "禁用弹出",
    "type": "Boolean",
    "value": "—",
    "default": "false"
  },
  {
    "name": "before-confirm",
    "description": "触发confirm事件前钩子函数，返回false将阻止弹窗关闭和confirm事件触发",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置 **pop 弹层**自定义样式类名，传入的类会被加在 pop 弹层的 DOM `.tippy-popper` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-popover-cls",
    "description": "配置 **pop 弹层主内容区域**自定义样式类名，传入的类会被加在 pop 弹层主内容区域的 DOM `.bk-popconfirm-content` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "confirm",
    "description": "点击确定按钮触发的事件",
    "parameter": "——"
  },
  {
    "name": "cancel",
    "description": "点击取消按钮触发的事件",
    "parameter": "——"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "content",
    "description": "title部分的插槽"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
