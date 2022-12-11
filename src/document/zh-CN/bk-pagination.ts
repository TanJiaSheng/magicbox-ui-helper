import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "count",
    "description": "总数据量",
    "type": "Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "current",
    "description": "当前页码，正整数，支持`.sync`修饰符",
    "type": "Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "limit",
    "description": "每页显示条数(须存在于`limit-list`中) ，支持`.sync`修饰符",
    "type": "Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "limit-list",
    "description": "每页显示条数可选项列表",
    "type": "Array",
    "value": "——",
    "default": "[10, 20, 50, 100]"
  },
  {
    "name": "show-limit",
    "description": "是否显示每页显示条数控件",
    "type": "Boolean",
    "value": "`false` `true`",
    "default": "true"
  },
  {
    "name": "location",
    "description": "每页显示条数控件位置",
    "type": "String",
    "value": "`left` / `right`",
    "default": "right"
  },
  {
    "name": "align",
    "description": "分页控件位置，优先级高于location",
    "type": "String",
    "value": "`left` / `center` / `right`",
    "default": "left"
  },
  {
    "name": "type",
    "description": "组件外观类型",
    "type": "String",
    "value": "`default` `compact`",
    "default": "default"
  },
  {
    "name": "size",
    "description": "页码尺寸大小",
    "type": "String",
    "value": "`default` `small`",
    "default": "default"
  },
  {
    "name": "small",
    "description": "小型分页",
    "type": "Boolean",
    "value": "`false` `true`",
    "default": "false"
  },
  {
    "name": "show-total-count",
    "description": "总计",
    "type": "Boolean",
    "value": "`false` `true`",
    "default": "false"
  },
  {
    "name": "show-quick-jumper",
    "description": "是否可以快速跳转至某页",
    "type": "Boolean",
    "value": "`false` `true`",
    "default": "false"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-page` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "change",
    "description": "当前页码变化时的回调",
    "parameter": "变化后的页码"
  },
  {
    "name": "limit-change",
    "description": "当前分页尺寸变化时的回调",
    "parameter": "变化后的分页尺寸"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
