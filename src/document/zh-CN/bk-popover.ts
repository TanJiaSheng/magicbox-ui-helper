import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "placement",
    "description": "组件显示位置",
    "type": "String",
    "value": "top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end",
    "default": "bottom"
  },
  {
    "name": "delay",
    "description": "延迟显示，单位毫秒",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "width",
    "description": "提示框的内容容器的宽度",
    "type": "Number, String",
    "value": "——",
    "default": "auto"
  },
  {
    "name": "max-width",
    "description": "提示框的内容容器的最大宽度",
    "type": "Number, String",
    "value": "——",
    "default": "auto"
  },
  {
    "name": "height",
    "description": "提示框的内容容器的高度",
    "type": "Number, String",
    "value": "——",
    "default": "auto"
  },
  {
    "name": "max-height",
    "description": "提示框的内容容器的最大高度，超过最大高度出现滚动条",
    "type": "Number, String",
    "value": "——",
    "default": "auto"
  },
  {
    "name": "always",
    "description": "是否总是可见",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "content",
    "description": "显示的内容",
    "type": "String",
    "value": "——",
    "default": "''"
  },
  {
    "name": "disabled",
    "description": "是否禁用提示框",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "transfer",
    "description": "将弹层放置于 document.body 内，使其不受父级样式影响，方便布局",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "on-show",
    "description": "显示提示框时触发",
    "type": "Function",
    "value": "——",
    "default": "function () {}"
  },
  {
    "name": "on-hide",
    "description": "隐藏提示框时触发",
    "type": "Function",
    "value": "——",
    "default": "function () {}"
  },
  {
    "name": "tippy-options",
    "description": "更多的其他tippyjs参数参考[tippyjs参数](https://atomiks.github.io/tippyjs/v5/all-props/)",
    "type": "Object",
    "value": "——",
    "default": "{}"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.tippy-popper` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "z-index",
    "description": "弹出层的 `z-index`",
    "type": "Number",
    "value": "——",
    "default": "2500"
  }
];

export const document: BkDocument = {attributes,};

export default document;
