import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "nav-width",
    "description": "左侧导航栏缩小宽度",
    "type": "String/Number",
    "value": "——",
    "default": "60"
  },
  {
    "name": "hover-width",
    "description": "左侧导航栏固定、hover放大效果宽度",
    "type": "String/Number",
    "value": "——",
    "default": "260"
  },
  {
    "name": "side-title",
    "description": "左侧导航标题",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "header-title",
    "description": "右侧内容栏头部标题",
    "type": "String",
    "value": "——",
    "default": "栏目名称"
  },
  {
    "name": "hover-leave-delay",
    "description": "左侧导航栏hover离开缩回延迟时间",
    "type": "String/Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "default-open",
    "description": "是否默认展开左侧栏",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "theme",
    "description": "导航栏主题色",
    "type": "String",
    "value": "light/dark",
    "default": "light"
  },
  {
    "name": "head-height",
    "description": "导航上测栏的高度",
    "type": "String/Number",
    "value": "——",
    "default": "52"
  },
  {
    "name": "navigation-type",
    "description": "导航布局结构类型",
    "type": "String",
    "value": "left-right/top-bottom",
    "default": "left-right"
  },
  {
    "name": "need-menu",
    "description": "是否需要左侧导航条",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.navigation-bar` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "hover",
    "description": "鼠标进入左侧导航栏后触发",
    "parameter": "Boolean"
  },
  {
    "name": "leave",
    "description": "鼠标离开左侧导航栏后触发",
    "parameter": "Boolean"
  },
  {
    "name": "toggle",
    "description": "左侧导航栏缩回或伸展触发",
    "parameter": "Boolean"
  },
  {
    "name": "toggle-click",
    "description": "点击左侧导航栏底部固定导航按钮触发",
    "parameter": "Boolean"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "——",
    "description": "默认插槽，右侧内容设置"
  },
  {
    "name": "side-icon",
    "description": "左侧菜单头部icon插槽"
  },
  {
    "name": "side-header",
    "description": "左侧菜单头部插槽"
  },
  {
    "name": "menu",
    "description": "左侧menu插槽"
  },
  {
    "name": "header",
    "description": "右侧头部插槽"
  },
  {
    "name": "header-set",
    "description": "右侧头部title右侧内容插槽"
  },
  {
    "name": "footer",
    "description": "右侧底部footer插槽"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
