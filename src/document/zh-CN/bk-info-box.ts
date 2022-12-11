import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "extCls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-dialog-wrapper`上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "width",
    "description": "弹框的宽度，支持数字和百分比",
    "type": "Number/String",
    "value": "——",
    "default": "400"
  },
  {
    "name": "type",
    "description": "消息框的类型，配置此属性后，可支持显示 icon 等",
    "type": "String",
    "value": "primary, success, warning, error, loading",
    "default": "''"
  },
  {
    "name": "title",
    "description": "消息框的标题",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "subHeader",
    "description": "消息框的二级标题（当 subHeader 与 subTitle 同时存在并且 subHeader 是 VNode 时，subHeader 的优先级高于 subTitle，否则 subTitle 优先级更高），可以用 vm.$createElement 函数生成模版",
    "type": "String/VNode",
    "value": "——",
    "default": "——"
  },
  {
    "name": "subTitle",
    "description": "消息框的二级标题（当 subHeader 与 subTitle 同时存在并且 subHeader 是 VNode 时，subHeader 的优先级高于 subTitle，否则 subTitle 优先级更高）",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "showFooter",
    "description": "是否显示底部按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "theme",
    "description": "消息框主按钮的颜色",
    "type": "String",
    "value": "primary, success, warning, danger",
    "default": "primary"
  },
  {
    "name": "maskClose",
    "description": "是否允许点击遮罩关闭弹框",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "escClose",
    "description": "是否允许 `esc` 按键关闭弹框",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "closeIcon",
    "description": "是否显示右上角的关闭 icon，此属性为 false 时，`esc-close` 和 `mask-close` 会被强制设置为 `false`。",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "okText",
    "description": "确定按钮的文字",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "cancelText",
    "description": "取消按钮的文字",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "container",
    "description": "控制弹框出现在什么容器内",
    "type": "HTMLElement / VNode / String",
    "value": "——",
    "default": "document.body"
  },
  {
    "name": "icon",
    "description": "消息框状态的图标，使用蓝鲸icon",
    "type": "String",
    "value": "参考[蓝鲸 ICON](ICON_URL)",
    "default": "——"
  },
  {
    "name": "confirmLoading",
    "description": "异步 confirmFn 确定按钮自动开启 loading",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "confirmFn",
    "description": "确认按钮点击回调函数，支持异步函数，函数返回false可阻止弹窗关闭",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "cancelFn",
    "description": "取消按钮点击回调函数",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "stateChangeFn",
    "description": "弹框显示状态变化的回调函数",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "afterLeaveFn",
    "description": "弹框消失的动画结束后触发的回调函数",
    "type": "Function",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
