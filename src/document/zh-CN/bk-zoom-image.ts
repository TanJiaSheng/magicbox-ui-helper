import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "src",
    "description": "图片地址",
    "type": "String",
    "value": "-",
    "default": "-"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-zoom-image` 上",
    "type": "String",
    "value": "-",
    "default": "-"
  }
];

export const document: BkDocument = {attributes,};

export default document;
