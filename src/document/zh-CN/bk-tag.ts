import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "closable",
    "description": "标签是否可以关闭",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "icon",
    "description": "设置图标",
    "type": "String",
    "value": "-",
    "default": "-"
  },
  {
    "name": "theme",
    "description": "主题",
    "type": "String",
    "value": "success / info / warning / danger",
    "default": "-"
  },
  {
    "name": "effect",
    "description": "类型",
    "type": "String",
    "value": "filled(填充式) / stroke(描边式)",
    "default": "-"
  },
  {
    "name": "checkable",
    "description": "是否点击选中",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "state",
    "description": "是否是状态标签（字体加粗）",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "checked",
    "description": "设置标签的选中状态，跟 checkable 配合使用",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "radius",
    "description": "标签圆角设置",
    "type": "String",
    "value": "-",
    "default": "2px"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名",
    "type": "String",
    "value": "-",
    "default": "-"
  },
  {
    "name": "size",
    "description": "设置尺寸",
    "type": "String",
    "value": "large / medium / small",
    "default": "-"
  },
  {
    "name": "loading",
    "description": "是否是加载中",
    "type": "Boolean",
    "value": "false",
    "default": "-"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "close",
    "description": "关闭 Tag 时触发的事件",
    "parameter": "event"
  },
  {
    "name": "change",
    "description": "当可选择标签时，点击 Tag 时触发的事件",
    "parameter": "新状态值（Boolean）"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
