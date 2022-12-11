import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "label",
    "description": "标签文本",
    "type": "String",
    "value": "--",
    "default": "--"
  },
  {
    "name": "span",
    "description": "列的数量",
    "type": "Number / String",
    "value": "--",
    "default": "1"
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
    "name": "show-overflow-tooltip",
    "description": "当内容过长被隐藏时显示 tooltip",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "line-clamp",
    "description": "文本的行数，带\"...\"省略号，开启`show-overflow-tooltip`才生效",
    "type": "Number / String",
    "value": "--",
    "default": "1"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "label",
    "description": "自定义标签文本"
  }
];

export const document: BkDocument = {attributes,slots,};

export default document;
