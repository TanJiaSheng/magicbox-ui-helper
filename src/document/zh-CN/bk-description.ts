import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "column",
    "description": "一行`Description Item`的数量",
    "type": "Number / String",
    "value": "--",
    "default": "1"
  },
  {
    "name": "label-width",
    "description": "`Description Item`项 label 宽度",
    "type": "Number / String",
    "value": "--",
    "default": "--"
  },
  {
    "name": "label-align",
    "description": "对齐方式",
    "type": "String",
    "value": "left / center / right",
    "default": "left"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-description` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "content-cls",
    "description": "自定义内容类名",
    "type": "String",
    "value": "--",
    "default": "--"
  },
  {
    "name": "content-style",
    "description": "自定义内容样式",
    "type": "String",
    "value": "--",
    "default": "--"
  },
  {
    "name": "label-cls",
    "description": "自定义标签类名",
    "type": "String",
    "value": "--",
    "default": "--"
  },
  {
    "name": "label-style",
    "description": "自定义标签样式",
    "type": "String",
    "value": "--",
    "default": "--"
  },
  {
    "name": "colon",
    "description": "是否显示冒号",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  }
];

export const document: BkDocument = {attributes,};

export default document;
