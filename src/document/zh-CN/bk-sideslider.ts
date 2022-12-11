import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "is-show",
    "description": "是否显示组件，支持 .sync 修饰符",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "title",
    "description": "自定义组件标题",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "quick-close",
    "description": "是否支持点击遮罩关闭组件",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-mask",
    "description": "是否允许出现遮罩",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "width",
    "description": "组件的宽度",
    "type": "Number",
    "value": "——",
    "default": "400"
  },
  {
    "name": "direction",
    "description": "组件滑出的方向",
    "type": "String",
    "value": "left / right",
    "default": "right"
  },
  {
    "name": "before-close",
    "description": "关闭前钩子函数",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-sideslider` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "transfer",
    "description": "控制 sidslider 是否出现在 body 内",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "shown",
    "description": "显示组件后的回调函数",
    "parameter": "——"
  },
  {
    "name": "hidden",
    "description": "关闭组件后的回调函数",
    "parameter": "——"
  },
  {
    "name": "animation-end",
    "description": "关闭组件后动画结束的回调函数",
    "parameter": "——"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "content",
    "description": "用于设置侧栏内容区"
  },
  {
    "name": "footer",
    "description": "用于设置侧栏底部区"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
