import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "position",
    "description": "位置",
    "type": "String",
    "value": "`middle`、`top`、`bottom`",
    "default": "`middle`"
  },
  {
    "name": "navItems",
    "description": "导航元素列表",
    "type": "Array",
    "value": "传入一个数组，数组的每个元素都是一个对象，属性包括`icon`，`text`，`tooltip`和`action`， 详见示例",
    "default": "[]"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-fixed-navbar-wrapper` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
