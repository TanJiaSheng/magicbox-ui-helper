import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "type",
    "description": "图标类型",
    "type": "String",
    "value": "图标名",
    "default": "-"
  },
  {
    "name": "svg",
    "description": "使用svg输出图标",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "width",
    "description": "使用svg图标时有效",
    "type": "String",
    "value": "-",
    "default": "1em"
  },
  {
    "name": "height",
    "description": "使用svg图标时有效",
    "type": "String",
    "value": "-",
    "default": "1em"
  }
];

export const document: BkDocument = {attributes,};

export default document;
