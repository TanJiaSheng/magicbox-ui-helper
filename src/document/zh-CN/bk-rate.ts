import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "rate",
    "description": "显示的分数",
    "type": "Number",
    "value": "—",
    "default": "0"
  },
  {
    "name": "tooltips",
    "description": "展示的文案，数组中的每一项对应每一颗星星的文案",
    "type": "Array",
    "value": "—",
    "default": "—"
  },
  {
    "name": "edit",
    "description": "是否可编辑",
    "type": "Boolean",
    "value": "—",
    "default": "true"
  },
  {
    "name": "width",
    "description": "星星的宽度",
    "type": "Number",
    "value": "—",
    "default": "15"
  },
  {
    "name": "height",
    "description": "星星的高度",
    "type": "Number",
    "value": "—",
    "default": "16"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-score-group` 上",
    "type": "String",
    "value": "—",
    "default": "—"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "score",
    "description": "评分的时候触发该回调事件",
    "parameter": "选中的值"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
