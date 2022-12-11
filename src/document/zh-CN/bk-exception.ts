import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "type",
    "description": "异常类型",
    "type": "String / Number",
    "value": "`403`、`404`、`500`、`building`、`empty`、`search-empty`",
    "default": "`404`"
  },
  {
    "name": "scene",
    "description": "使用场景",
    "type": "String",
    "value": "`page`（页面）、`part`（局部）",
    "default": "`page`"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-exception` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
