import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "value",
    "description": "是否显示弹框，支持 v-model 双向绑定",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "title",
    "description": "弹框的标题，不设置 title 和 slot header 可配置出无 header 的弹框",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "render-directive",
    "description": "弹框的渲染方式",
    "type": "Boolean",
    "value": "if / show",
    "default": "show"
  },
  {
    "name": "ok-text",
    "description": "确定按钮的文字",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "cancel-text",
    "description": "取消按钮的文字",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "theme",
    "description": "颜色 按钮类型",
    "type": "String",
    "value": "primary, success, warning, danger",
    "default": "primary"
  },
  {
    "name": "position",
    "description": "设置层的位置，接收 top, left 两个属性。支持数字和百分比",
    "type": "Object",
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
    "name": "show-mask",
    "description": "是否允许出现遮罩",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "mask-close",
    "description": "是否允许点击遮罩关闭弹框",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "close-icon",
    "description": "是否显示右上角的关闭 icon，此属性为 false 时，esc-close 和 mask-close 会被强制设置为 false。",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "esc-close",
    "description": "是否允许 esc 按键关闭弹框",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "fullscreen",
    "description": "是否全屏弹框，当设置全屏弹框时，draggable 属性无效",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "height-adaption",
    "description": "是否允许弹框最大高度适应屏幕",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "header-position",
    "description": "显示 header 的位置",
    "type": "String",
    "value": "left, center",
    "default": "center"
  },
  {
    "name": "show-footer",
    "description": "是否显示 footer",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "footer-position",
    "description": "显示 footer 的位置",
    "type": "String",
    "value": "left, center, right",
    "default": "right"
  },
  {
    "name": "draggable",
    "description": "是否允许弹框拖拽，当设置全屏弹框时，draggable 属性无效",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "scrollable",
    "description": "弹框出现时，是否允许页面滚动",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "transfer",
    "description": "控制弹框是否出现在 body 内",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "auto-close",
    "description": "点击确认时是否自动关闭弹窗",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "on-close",
    "description": "点击取消时触发的回调方法，参数是Dialog的this对象",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "confirm-fn",
    "description": "点击确认时触发的回调方法，参数是Dialog的this对象",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-dialog-wrapper上",
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
    "description": "点击取消按钮触发的事件，主动调用关闭才会触发，通过改变双向绑定的值关闭弹框时不会触发",
    "parameter": "——"
  },
  {
    "name": "value-change",
    "description": "弹框显示状态变化的回调函数",
    "parameter": "——"
  },
  {
    "name": "after-leave",
    "description": "弹框消失的动画结束后触发的回调函数",
    "parameter": "——"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "匿名插槽",
    "description": "没有名字的插槽，会被渲染到dialog的主体上"
  },
  {
    "name": "header",
    "description": "title部分的插槽，dialog头部区域"
  },
  {
    "name": "footer",
    "description": "确认和取消按钮部分的插槽，dialog底部区域"
  },
  {
    "name": "tools",
    "description": "工具栏插槽，顶部区域"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
