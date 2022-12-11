import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "type",
    "description": "主题",
    "type": "String",
    "value": "primary/success/warning/error",
    "default": "info"
  },
  {
    "name": "title",
    "description": "标题",
    "type": "String",
    "value": "-",
    "default": "-"
  },
  {
    "name": "closable",
    "description": "是否可以关闭",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "close-text",
    "description": "自定义关闭按钮",
    "type": "String",
    "value": "-",
    "default": "-"
  },
  {
    "name": "show-icon",
    "description": "是否显示按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "ellipsis-line",
    "description": "配置组件显示内容的行数，超过这个行数之后，内容就会被省略，默认值为 1，配置为 0 即表示显示全部内容",
    "type": "Number",
    "value": "——",
    "default": "1"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "close",
    "description": "关闭事件",
    "parameter": "事件对象 event"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
