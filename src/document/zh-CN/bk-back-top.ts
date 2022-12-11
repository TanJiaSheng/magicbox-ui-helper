import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "right",
    "description": "控制组件显示的位置，距离有页面右侧的距离",
    "type": "Number",
    "value": "——",
    "default": "40"
  },
  {
    "name": "bottom",
    "description": "控制组件显示的位置，距离有页面底部的距离",
    "type": "Number / String",
    "value": "——",
    "default": "40"
  },
  {
    "name": "target",
    "description": "触发滚动的对象",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "visibility-height",
    "description": "滚动高度达到此参数值才出现",
    "type": "Number",
    "value": "——",
    "default": "200"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "click",
    "description": "点击按钮所触发的事件",
    "parameter": "——"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
