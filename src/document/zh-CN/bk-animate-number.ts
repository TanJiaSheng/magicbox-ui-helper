import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "value",
    "description": "显示的数字",
    "type": "Number",
    "value": "—",
    "default": "—"
  },
  {
    "name": "digits",
    "description": "数字的位数",
    "type": "Number",
    "value": "—",
    "default": "0"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `span` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
