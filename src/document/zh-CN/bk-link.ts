import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "theme",
    "description": "文字链接主题色",
    "type": "String",
    "value": "`default` `primary` `success` `warning` `danger`",
    "default": "default"
  },
  {
    "name": "href",
    "description": "文字链接地址",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "disabled",
    "description": "是否禁用",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "underline",
    "description": "是否显示下划线",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "icon",
    "description": "图标类名",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "icon-placement",
    "description": "图标位置",
    "type": "String",
    "value": "`left` `right`",
    "default": "left"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "click",
    "description": "文字链接点击事件",
    "parameter": "event"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
