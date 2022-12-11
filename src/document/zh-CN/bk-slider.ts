import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "disable",
    "description": "拖拽禁用",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "range",
    "description": "是否为范围选择",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "value",
    "description": "使用v-model，将指定变量与slider的值进行绑定",
    "type": "Number/Array",
    "value": "——",
    "default": "0"
  },
  {
    "name": "min-value",
    "description": "最小值设置",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "max-value",
    "description": "最大值设置",
    "type": "Number",
    "value": "——",
    "default": "100"
  },
  {
    "name": "show-tip",
    "description": "显示提示",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-slider` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "step",
    "description": "滑块每一步移动的距离",
    "type": "Number",
    "value": "——",
    "default": "1"
  },
  {
    "name": "show-interval",
    "description": "是否显示间断点",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-interval-label",
    "description": "是否显示间断点下的标签",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "interval-label-unit",
    "description": "标签单位",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "show-button-label",
    "description": "滑块下是否显示value值",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "button-label-unit",
    "description": "滑块下是否显示单位",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "show-between-label",
    "description": "首尾标签",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-input",
    "description": "带输入的选择",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "custom-content",
    "description": "自定义内容",
    "type": "Object",
    "value": "——",
    "default": "——"
  },
  {
    "name": "show-custom-label",
    "description": "是否显示自定义标签",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-custom-tip",
    "description": "是否显示自定义tip",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "vertical",
    "description": "是否为垂直模式",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "height",
    "description": "垂直模式高度",
    "type": "String",
    "value": "——",
    "default": "`200px`"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "change",
    "description": "鼠标弹起时触发",
    "parameter": "value"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
