import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "active-name",
    "description": "当前激活面板的 name",
    "type": "Array / String",
    "value": "--",
    "default": "--"
  },
  {
    "name": "accordion",
    "description": "是否使用手风琴效果",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-collapse` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "item-click",
    "description": "点击时触发",
    "parameter": "激活状态 name 的集合"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
