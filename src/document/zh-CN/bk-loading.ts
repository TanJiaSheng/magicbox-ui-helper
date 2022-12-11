import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "isLoading",
    "description": "一个 `boolean` 变量，控制组件的显示",
    "type": "Boolean",
    "value": "true / false",
    "default": "——"
  },
  {
    "name": "mode",
    "description": "loading 的显示形式，可选项: `normal`, `spin`",
    "type": "normal",
    "value": "——",
    "default": "normal"
  },
  {
    "name": "title",
    "description": "组件显示时的文案，支持使用 `createElement` 函数生成的 VNode",
    "type": "string",
    "value": "——",
    "default": "——"
  },
  {
    "name": "size",
    "description": "组件显示大小配置",
    "type": "string",
    "value": "large small mini",
    "default": "large"
  },
  {
    "name": "theme",
    "description": "组件显示主题配置",
    "type": "string",
    "value": "colorful default primary danger warning(spin模式下支持: default primary danger warning success)",
    "default": "colorful"
  },
  {
    "name": "delay",
    "description": "组件消失推迟",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "immediate",
    "description": "组件在初始化完成后立即显示",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "opacity",
    "description": "loading 遮罩的背景透明度 （注：如设置了 color 属性为 rgba 类型颜色则此属性将被覆盖）",
    "type": "number",
    "value": "0 - 1 之间的小数",
    "default": "0.9"
  },
  {
    "name": "color",
    "description": "loading 遮罩的背景色 支持 rgb/hex/rgba",
    "type": "rgb/hex/rgba",
    "value": "--",
    "default": "#ffffff"
  },
  {
    "name": "zIndex",
    "description": "如果配置项有 zIndex 选项，遮罩层的层叠顺序使用配置项的 zIndex，否则使用层叠顺序管理器自动生成的 zIndex",
    "type": "number",
    "value": "--",
    "default": "--"
  },
  {
    "name": "afterLeave",
    "description": "loading 消失完毕的回调函数",
    "type": "Function",
    "value": "--",
    "default": "--"
  },
  {
    "name": "extCls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-loading` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
