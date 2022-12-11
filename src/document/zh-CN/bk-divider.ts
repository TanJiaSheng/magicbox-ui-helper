import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "direction",
    "description": "分割线方向",
    "type": "String",
    "value": "horizontal / vertical",
    "default": "horizontal"
  },
  {
    "name": "align",
    "description": "分割线位置",
    "type": "String",
    "value": "left / right / center",
    "default": "center"
  },
  {
    "name": "color",
    "description": "分割线颜色",
    "type": "String",
    "value": "-",
    "default": "#dde4eb"
  },
  {
    "name": "width",
    "description": "分割线宽度",
    "type": "Number",
    "value": "-",
    "default": "0"
  },
  {
    "name": "type",
    "description": "分割线类型，border-style类型",
    "type": "String",
    "value": "solid / dashed",
    "default": "solid"
  }
];

export const document: BkDocument = {attributes,};

export default document;
