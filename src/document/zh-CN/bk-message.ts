import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "theme",
    "description": "组件主题色",
    "type": "String",
    "value": "primary / success / warning / error",
    "default": "primary"
  },
  {
    "name": "icon",
    "description": "组件左侧图标",
    "type": "String",
    "value": "参考[蓝鲸 ICON](ICON_URL)",
    "default": "info"
  },
  {
    "name": "title",
    "description": "组件显示的标题",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "message",
    "description": "组件显示的文字内容，支持字符串或用 `this.$createElement` 生成的 DOM 片段",
    "type": "String / DOM Element",
    "value": "——",
    "default": "——"
  },
  {
    "name": "delay",
    "description": "组件延时关闭时间，值为 0 时需要手动关闭",
    "type": "Number",
    "value": "——",
    "default": "3000"
  },
  {
    "name": "dismissable",
    "description": "是否显示右侧关闭 icon",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "offsetY",
    "description": "组件出现时距离视口顶部的偏移量",
    "type": "Number",
    "value": "——",
    "default": "30"
  },
  {
    "name": "spacing",
    "description": "多个组件之间的垂直距离",
    "type": "Number",
    "value": "——",
    "default": "10"
  },
  {
    "name": "limit",
    "description": "组件个数限制，默认不限制个数，设置为 0 时，清除所有实例",
    "type": "Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ellipsis-line",
    "description": "配置组件显示内容的行数，超过这个行数之后，内容就会被省略，默认值为 1，配置为 0 即表示显示全部内容",
    "type": "Number",
    "value": "——",
    "default": "1"
  },
  {
    "name": "onClose",
    "description": "关闭组件时的回调函数, 参数为组件实例",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "extCls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-message` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ellipsis-copy",
    "description": "内容超出被截断时是否显示复制按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "close",
    "description": "关闭当前的组件",
    "parameter": ""
  }
];

export const document: BkDocument = {attributes,methods,};

export default document;
