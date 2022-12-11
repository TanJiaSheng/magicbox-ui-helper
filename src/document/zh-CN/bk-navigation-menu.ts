import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "default-active",
    "description": "默认选中的菜单栏目ID",
    "type": "String/Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "unique-opened",
    "description": "左侧导航栏是否只保持一个子菜单的展开",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "toggle-active",
    "description": "左侧导航栏在伸缩时子级菜单是否一起展开和收回",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "item-hover-bg-color",
    "description": "menu子项hover背景色",
    "type": "String",
    "value": "——",
    "default": "linear-gradient(90deg,rgba(37,48,71,1) 0%,rgba(32,42,60,1) 100%)"
  },
  {
    "name": "item-hover-color",
    "description": "menu子项hover字体颜色",
    "type": "String",
    "value": "——",
    "default": "#D3D9E4"
  },
  {
    "name": "item-active-bg-color",
    "description": "menu子项选中背景色",
    "type": "String",
    "value": "——",
    "default": "linear-gradient(90deg,rgba(63,135,255,1) 0%,rgba(58,132,255,1) 100%)"
  },
  {
    "name": "item-active-color",
    "description": "menu子项选中字体色",
    "type": "String",
    "value": "——",
    "default": "#FFFFFF"
  },
  {
    "name": "item-default-bg-color",
    "description": "menu子项默认背景色",
    "type": "String",
    "value": "——",
    "default": "#182132"
  },
  {
    "name": "item-default-color",
    "description": "menu子项默认字体色",
    "type": "String",
    "value": "——",
    "default": "#96A2B9"
  },
  {
    "name": "item-default-icon-color",
    "description": "menu子项默认icon的颜色",
    "type": "String",
    "value": "——",
    "default": "#B0BDD5"
  },
  {
    "name": "item-child-icon-default-color",
    "description": "menu子项的二级栏icon的颜色",
    "type": "String",
    "value": "——",
    "default": "#63656E"
  },
  {
    "name": "item-child-icon-hover-color",
    "description": "menu子项的二级栏icon hover动作的颜色",
    "type": "String",
    "value": "——",
    "default": "#D3D9E4"
  },
  {
    "name": "item-active-icon-color",
    "description": "选中时menu子项icon颜色",
    "type": "String",
    "value": "——",
    "default": "#FFFFFF"
  },
  {
    "name": "item-hover-icon-color",
    "description": "menu子项icon hover颜色",
    "type": "String",
    "value": "——",
    "default": "#D3D9E4"
  },
  {
    "name": "item-child-icon-active-color",
    "description": "子级item选中时icon颜色",
    "type": "String",
    "value": "——",
    "default": "#FFFFFF"
  },
  {
    "name": "sub-menu-open-bg-color",
    "description": "父级menu展开后的背景色",
    "type": "String",
    "value": "——",
    "default": "#151D2C"
  },
  {
    "name": "before-nav-change",
    "description": "手动点击 nav-item 子项之前触发判断是否改变 nav 导向，支持异步，返回 false 标识不改变",
    "type": "Funticon",
    "value": "——",
    "default": "true"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "——",
    "description": "默认插槽，用于设置菜单子项 子项inject接受bk-menu实例"
  }
];

export const document: BkDocument = {attributes,slots,};

export default document;
