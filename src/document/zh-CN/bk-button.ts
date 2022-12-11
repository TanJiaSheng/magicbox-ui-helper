import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "theme",
    "description": "按钮类型",
    "type": "String",
    "value": "default / primary / success / warning / danger",
    "default": "default"
  },
  {
    "name": "hover-theme",
    "description": "mouseover 按钮类型，当设置了此属性时，theme 和 text 失效",
    "type": "String",
    "value": "primary / success / warning / danger",
    "default": "——"
  },
  {
    "name": "size",
    "description": "尺寸",
    "type": "String",
    "value": "mini / small / normal / large",
    "default": "normal"
  },
  {
    "name": "title",
    "description": "title 文案",
    "type": "String",
    "value": "——",
    "default": ""
  },
  {
    "name": "icon",
    "description": "左侧图标，设置为 loading 的时候，会显示转圈的 loading 效果。",
    "type": "String",
    "value": "参考[蓝鲸 ICON](ICON_URL)",
    "default": "——"
  },
  {
    "name": "icon-right",
    "description": "右侧图标，设置为 loading 的时候，会显示转圈的 loading 效果。",
    "type": "String",
    "value": "参考[蓝鲸 ICON](ICON_URL)",
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
    "name": "border",
    "description": "是否有边框",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "loading",
    "description": "是否加载中",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "outline",
    "description": "是否显示反色按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "text",
    "description": "是否是文字按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM button 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "click",
    "description": "点击事件",
    "parameter": "事件对象 event"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "left-icon",
    "description": "可以使用 left-icon 插槽来定义按钮中文字左侧的图标"
  },
  {
    "name": "right-icon",
    "description": "可以使用 right-icon 插槽来定义按钮中文字右侧的图标"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
