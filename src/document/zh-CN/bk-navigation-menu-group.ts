import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "groupName",
    "description": "分组名称",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "click",
    "description": "click事件回调",
    "parameter": "MouseEvent groupName"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "group",
    "description": "用以设置分组名称的插槽"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
