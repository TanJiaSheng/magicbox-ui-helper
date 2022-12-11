import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "theme",
    "description": "加载类型",
    "type": "String",
    "value": "primary / success / warning / danger / info",
    "default": "primary"
  },
  {
    "name": "size",
    "description": "尺寸",
    "type": "String",
    "value": "large / normal / small / mini",
    "default": "small"
  },
  {
    "name": "icon",
    "description": "自定义的加载图标",
    "type": "String",
    "value": "参考[蓝鲸 ICON](#/icon)",
    "default": "——"
  },
  {
    "name": "spinning",
    "description": "是否为加载中状态",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "placement",
    "description": "插槽的位置",
    "type": "String",
    "value": "right / bottom",
    "default": "bottom"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "——",
    "description": "匿名作用域插槽, 自定义 spin 的内容"
  }
];

export const document: BkDocument = {attributes,slots,};

export default document;
