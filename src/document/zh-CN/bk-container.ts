import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "col",
    "description": "栅格数",
    "type": "Number",
    "value": "——",
    "default": "24"
  },
  {
    "name": "gutter",
    "description": "栅格之间的间距",
    "type": "Number",
    "value": "——",
    "default": "20"
  },
  {
    "name": "margin",
    "description": "栅格容器的左右外边距",
    "type": "Number",
    "value": "——",
    "default": "20"
  },
  {
    "name": "flex",
    "description": "是否启用 `flex` 布局",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-grid-container` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
