import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "id",
    "description": "唯一标示ID",
    "type": "String/Number",
    "value": "必填项",
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
    "name": "enable-default-icon",
    "description": "是否启用默认图标",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "icon",
    "description": "图标",
    "type": "String/ Object/ Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "has-child",
    "description": "是否有子项",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "group",
    "description": "是否分组标示",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "title",
    "description": "是否标题标示",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "number",
    "description": "展示导航数量",
    "type": "Number",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "click",
    "description": "click事件回调",
    "parameter": "id"
  },
  {
    "name": "sub-menu-click",
    "description": "子项父级菜单栏click事件回调",
    "parameter": "id"
  },
  {
    "name": "open",
    "description": "打开子事件回调",
    "parameter": "Boolean"
  },
  {
    "name": "close",
    "description": "关闭子菜单事件回调",
    "parameter": "Boolean"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "——",
    "description": "默认插槽，用于设置菜单子项显示内容"
  },
  {
    "name": "child",
    "description": "用以设置子菜单插槽"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
