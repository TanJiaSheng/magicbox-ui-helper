import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "head-background-color",
    "description": "第一个表单项的背景色",
    "type": "String",
    "value": "颜色值",
    "default": "#FAFBFD"
  },
  {
    "name": "tail-background-color",
    "description": "最后一个表单项的背景色",
    "type": "String",
    "value": "颜色值",
    "default": "-"
  }
];

export const document: BkDocument = {attributes,};

export default document;
