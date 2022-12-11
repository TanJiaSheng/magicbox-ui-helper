import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "list",
    "description": "时间轴数据源（必传）",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "list[].tag",
    "description": "标题（一般是时间标识）",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "list[].content",
    "description": "内容",
    "type": "String/Object",
    "value": "——",
    "default": "——"
  },
  {
    "name": "list[].description",
    "description": "描述",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "list[].type",
    "description": "节点样式",
    "type": "String",
    "value": "default / primary / warning / success / danger",
    "default": "primary"
  },
  {
    "name": "list[].size",
    "description": "节点大小",
    "type": "String",
    "value": "large",
    "default": "——"
  },
  {
    "name": "list[].color",
    "description": "节点颜色",
    "type": "String",
    "value": "blue / red / green / yellow / gray",
    "default": "gray"
  },
  {
    "name": "list[].icon",
    "description": "节点图标，可使用[蓝鲸 ICON](ICON_URL)或者传入VNode自定义图标",
    "type": "String/VNode",
    "value": "true / false",
    "default": "——"
  },
  {
    "name": "list[].filled",
    "description": "是否填充节点(实心)",
    "type": "Boolean",
    "value": "true / false",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-timeline` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "select",
    "description": "点击标题触发",
    "parameter": "相应点击项的数据data"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "`title${index}`",
    "description": "index为在list中的索引"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
