import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "percent",
    "description": "显示目前进度",
    "type": "Number",
    "value": "`0 < percent < 1`",
    "default": "0"
  },
  {
    "name": "width",
    "description": "圆环的直径",
    "type": "String",
    "value": "——",
    "default": "`100px`"
  },
  {
    "name": "num-unit",
    "description": "值的单位",
    "type": "String",
    "value": "——",
    "default": "`%`"
  },
  {
    "name": "content",
    "description": "设置的内容，当设置此属性时，进度条会直接显示此属性的内容，不会显示进度值",
    "type": "String",
    "value": "——",
    "default": "--"
  },
  {
    "name": "num-show",
    "description": "是否显示目前百分数值（默认显示）",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "num-style",
    "description": "设置显示百分数的样式",
    "type": "Object",
    "value": "——",
    "default": "`{fontSize: '16px'}`"
  },
  {
    "name": "title",
    "description": "是否显示标题（默认不显示）",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "title-style",
    "description": "设置 title 的样式",
    "type": "Object",
    "value": "——",
    "default": "`{fontSize: '16px'}`"
  },
  {
    "name": "config",
    "description": "设置进度圆环的颜色 bgColor、宽度 strokeWidth、背景色 bgColor",
    "type": "Object",
    "value": "--",
    "default": "`{strokeWidth: 5, bgColor: 'gray', activeColor: 'green'}`"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-round-progress` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
