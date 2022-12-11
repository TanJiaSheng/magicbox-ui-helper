import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "logo-icon",
    "description": "导航栏左上角logo，base64格式",
    "type": "String",
    "value": "——",
    "default": ""
  },
  {
    "name": "side-title",
    "description": "左侧导航标题",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "theme",
    "description": "导航菜单主题，设置了主题其他颜色属性不生效； 可分别设置header、menu属性设置头部和侧边菜单主题",
    "type": "Object",
    "value": "——",
    "default": "——"
  },
  {
    "name": "default-open",
    "description": "是否默认展开左侧栏, 不设置该字段则会根据屏幕大小是否超过1440px自动打开或收起",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "head-height",
    "description": "导航头部的高度",
    "type": "String/Number",
    "value": "——",
    "default": "60"
  },
  {
    "name": "header-margin-left",
    "description": "头部自定义插槽左边距",
    "type": "String/Number",
    "value": "——",
    "default": "60"
  },
  {
    "name": "nav-width",
    "description": "左侧导航栏缩回宽度",
    "type": "String/Number",
    "value": "——",
    "default": "60"
  },
  {
    "name": "hover-width",
    "description": "左侧导航栏展开、hover放大效果宽度",
    "type": "String/Number",
    "value": "——",
    "default": "260"
  },
  {
    "name": "text-color",
    "description": "文本颜色，设置了theme主题则不会生效，下面颜色属性同理",
    "type": "String",
    "value": "——",
    "default": "#475468"
  },
  {
    "name": "active-text-color",
    "description": "文本激活颜色",
    "type": "String",
    "value": "——",
    "default": "#1272FF"
  },
  {
    "name": "menu-hover-background",
    "description": "菜单项悬浮状态背景颜色",
    "type": "String",
    "value": "——",
    "default": "#F4F5F8"
  },
  {
    "name": "menu-active-background",
    "description": "菜单项激活状态背景颜色",
    "type": "String",
    "value": "——",
    "default": "#F4F5F8"
  },
  {
    "name": "icon-color",
    "description": "菜单图标颜色",
    "type": "String",
    "value": "——",
    "default": "#7588A3"
  },
  {
    "name": "icon-active-color",
    "description": "菜单激活状态图标颜色",
    "type": "String",
    "value": "——",
    "default": "#1272FF"
  },
  {
    "name": "number-bg-color",
    "description": "数字提示背景颜色",
    "type": "String",
    "value": "——",
    "default": "#B2BDCC"
  },
  {
    "name": "number-active-bg-color",
    "description": "数字提示激活状态背景颜色",
    "type": "String",
    "value": "——",
    "default": "#B2BDCC"
  },
  {
    "name": "left-menu-bg-color",
    "description": "侧边栏背景颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-text-color",
    "description": "侧边栏文本颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-active-text-color",
    "description": "侧边栏文本激活颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-hover-bg-color",
    "description": "侧边栏菜单hover颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-active-bg-color",
    "description": "侧边栏菜单激活颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-number-bg-color",
    "description": "侧边栏数字颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-active-Number-bg-color",
    "description": "侧边栏数字激活颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-icon-color",
    "description": "侧边栏图标颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-menu-icon-active-color",
    "description": "侧边栏图标激活颜色",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "toggle",
    "description": "左侧导航栏缩回或伸展触发",
    "parameter": "Boolean"
  },
  {
    "name": "logo-click",
    "description": "点击左上角logo触发",
    "parameter": "——"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "menu",
    "description": "左侧menu插槽"
  },
  {
    "name": "header",
    "description": "右侧头部插槽"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
