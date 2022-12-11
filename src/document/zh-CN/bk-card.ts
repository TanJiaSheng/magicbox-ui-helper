import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "title",
    "description": "卡片标题",
    "type": "String",
    "value": "-",
    "default": "-"
  },
  {
    "name": "is-collapse",
    "description": "是否支持展开&收起",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "collapse-icons",
    "description": "支持自定义展开 & 收起的icon",
    "type": "Array",
    "value": "-",
    "default": "['icon-down-shape', 'icon-up-shape']"
  },
  {
    "name": "collapse-status",
    "description": "展开 & 收起状态",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "position",
    "description": "展开icon的显示位置",
    "type": "String",
    "value": "left/right",
    "default": "left"
  },
  {
    "name": "showHead",
    "description": "是否显示头部",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "showFoot",
    "description": "是否显示底部",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "isEdit",
    "description": "是否启用编辑标题功能",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "border",
    "description": "是否显示边框",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "disableHeaderStyle",
    "description": "是否禁用Header的line-height默认样式",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "edit",
    "description": "编辑标题事件",
    "parameter": "title"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "header",
    "description": "可用该插槽，自定义 Card 中顶部内容 的展示"
  },
  {
    "name": "——",
    "description": "匿名作用域插槽, 自定义 Card 中间内容的展示"
  },
  {
    "name": "footer",
    "description": "可用该插槽，自定义 Card 中底部内容 的展示"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
