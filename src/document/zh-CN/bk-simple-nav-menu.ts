import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "is-header-nav",
    "description": "是否是头部导航菜单, 头部导航没有子级菜单",
    "type": "Boolean",
    "value": "",
    "default": "false"
  },
  {
    "name": "menu-list",
    "description": "菜单数据；菜单项可以是对象或数组，如果是数组则作为无标题的分组菜单，如果是对象并且设置了group为true则作为带标题的分组菜单",
    "type": "Array",
    "value": "——",
    "default": "[ ]"
  },
  {
    "name": "default-active",
    "description": "当前选中菜单",
    "type": "String/Number",
    "value": "——",
    "default": ""
  },
  {
    "name": "unique-opened",
    "description": "左侧导航栏是否只保持一个子菜单的展开",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "id-key",
    "description": "菜单的id取值",
    "type": "String",
    "value": "——",
    "default": "id"
  },
  {
    "name": "name-key",
    "description": "菜单的name取值",
    "type": "String",
    "value": "——",
    "default": "name"
  },
  {
    "name": "children-key",
    "description": "菜单的children取值",
    "type": "String",
    "value": "——",
    "default": "children"
  },
  {
    "name": "before-change",
    "description": "手动点击 nav-item 子项之前触发判断是否改变 nav 导向，支持异步，返回 false 标识不改变",
    "type": "Funticon",
    "value": "——",
    "default": "true"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "select",
    "description": "选中菜单触发",
    "parameter": "Object"
  },
  {
    "name": "before-change",
    "description": "手动点击菜单触发，判断是否允许改变选中菜单，支持异步，返回 false 标识不改变",
    "parameter": "Funticon"
  },
  {
    "name": "menu-click",
    "description": "点击父级和子级菜单触发",
    "parameter": "Object"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
