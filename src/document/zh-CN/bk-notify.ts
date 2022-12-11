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
    "description": "组件的标题",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "message",
    "description": "组件显示的文字内容，支持字符串或用 `this.$createElement` 生成的 DOM 片段",
    "type": "String / DOMElement",
    "value": "——",
    "default": "——"
  },
  {
    "name": "position",
    "description": "组件出现的方向",
    "type": "String",
    "value": "top-left/top-center/top-right/bottom-left/bottom-center/bottom-right",
    "default": "top-center"
  },
  {
    "name": "delay",
    "description": "组件延时关闭时间，值为 0 时需要手动关闭",
    "type": "Number",
    "value": "——",
    "default": "5000"
  },
  {
    "name": "dismissable",
    "description": "是否显示右侧关闭 icon",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "limit",
    "description": "组件个数限制，默认不限制个数，设置为 0 时，清除所有实例",
    "type": "Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "limitLine",
    "description": "文字内容的最大行数，默认为两行，值为 0 时文字内容全部显示",
    "type": "Number",
    "value": "——",
    "default": "2"
  },
  {
    "name": "showViewMore",
    "description": "是否显示`显示更多`按钮，配合`limitLine`使用",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "offsetX",
    "description": "组件出现时距离视口的水平偏移量",
    "type": "Number",
    "value": "——",
    "default": "10"
  },
  {
    "name": "offsetY",
    "description": "组件出现时距离视口的垂直偏移量",
    "type": "Number",
    "value": "——",
    "default": "30"
  },
  {
    "name": "onViewMoreHandler",
    "description": "`显示更多`按钮点击回调函数",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "onClose",
    "description": "关闭组件时的回调函数, 参数为组件实例",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-notify` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "useHTMLString",
    "description": "属性设置为 true，message 属性就会被当作 HTML 片段处理。请确保 message 的内容是可信的，不然容易导致 XSS攻击",
    "type": "Boolean",
    "value": "--",
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
