import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "interactive",
    "description": "鼠标是否可进入到 tooltip 中",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "content",
    "description": "提示信息内容",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "html",
    "description": "提示信息内容，可配置 html 字符串，当此配置存在时，`content` 配置会失效",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "boundary",
    "description": "相对定位",
    "type": "String",
    "value": "`window` / `scrollParent` / `viewport`",
    "default": "window"
  },
  {
    "name": "showOnInit",
    "description": "是否在初始化时默认显示",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "width",
    "description": "设置 tip 的宽度",
    "type": "Number",
    "value": "--",
    "default": "'auto'"
  },
  {
    "name": "max-width",
    "description": "设置 tip 的最大宽度",
    "type": "Number, String",
    "value": "——",
    "default": "400"
  },
  {
    "name": "height",
    "description": "设置 tip 的高度",
    "type": "Number",
    "value": "--",
    "default": "'auto'"
  },
  {
    "name": "max-height",
    "description": "设置 tip 的最大高度，超过最大高度出现滚动条",
    "type": "Number, String",
    "value": "——",
    "default": "100"
  },
  {
    "name": "theme",
    "description": "主题颜色",
    "type": "String",
    "value": "`dark` / `light`",
    "default": "`dark`"
  },
  {
    "name": "placement",
    "description": "设置组件显示的位置",
    "type": "String",
    "value": "`auto-start`, `auto`, `auto-end`, `top-start`, `top`, `top-end`, `right-start`, `right`, `right-end`, `bottom-end`, `bottom`, `bottom-start`, `left-end`, `left`, `left-start`",
    "default": "`top`"
  },
  {
    "name": "placements",
    "description": "设置组件显示的位置，设置为数组，数组里的项表示组件显示位置的优先级，会结合页面的大小以及位置来自动计算",
    "type": "Array",
    "value": "`auto-start`, `auto`, `auto-end`, `top-start`, `top`, `top-end`, `right-start`, `right`, `right-end`, `bottom-end`, `bottom`, `bottom-start`, `left-end`, `left`, `left-start`",
    "default": "`[top]`"
  },
  {
    "name": "trigger",
    "description": "触发方式",
    "type": "String",
    "value": "`mouseenter`, `mouseover`, `click`",
    "default": "`mouseenter`"
  },
  {
    "name": "delay",
    "description": "延迟的时间，毫秒。如果是数组，那么数组第一项表示出现的延迟时间，第二项表示消失的延迟时间；如果是数字，那么出现和消失都是这个延迟时间",
    "type": "Array/Number",
    "value": "--",
    "default": "`[0, 20]`"
  },
  {
    "name": "duration",
    "description": "动画的时间，毫秒。延迟的时间，毫秒。如果是数组，那么数组第一项表示出现的动画的持续时间，第二项表示消失的动画持续时间；如果是数字，那么出现和消失的动画持续时间都是这个时间",
    "type": "Array/Number",
    "value": "——",
    "default": "`0`"
  },
  {
    "name": "distance",
    "description": "tip 出现于触发节点的距离，参照 `placement` 的方向",
    "type": "Number",
    "value": "--",
    "default": "10"
  },
  {
    "name": "appendTo",
    "description": "设置 tip 出现在哪个节点上，本参数要设置为 `Function`，返回要设置的 dom 节点",
    "type": "Function",
    "value": "--",
    "default": "() => document.body"
  },
  {
    "name": "zIndex",
    "description": "设置 tip 的 z-index",
    "type": "Number",
    "value": "--",
    "default": "9999"
  },
  {
    "name": "onShow",
    "description": "tip 显示时的回调函数",
    "type": "Function",
    "value": "--",
    "default": "--"
  },
  {
    "name": "onShown",
    "description": "tip 显示完成的回调函数",
    "type": "Function",
    "value": "--",
    "default": "--"
  },
  {
    "name": "onHide / onClose",
    "description": "tip 消失时的回调函数",
    "type": "Function",
    "value": "--",
    "default": "--"
  },
  {
    "name": "onHidden",
    "description": "tip 消失完成的回调函数",
    "type": "Function",
    "value": "--",
    "default": "--"
  },
  {
    "name": "extCls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.tippy-popper` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "disabled",
    "description": "是否禁用tooltips",
    "type": "Boolean",
    "value": "true / false",
    "default": "——"
  },
  {
    "name": "allowHtml",
    "description": "确定是否将内容字符串解析为HTML而不是文本",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "clone",
    "description": "可以allowHtml使用，使用的html节点进行clone，防止tooltip销毁后删除",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  }
];

export const document: BkDocument = {attributes,};

export default document;
