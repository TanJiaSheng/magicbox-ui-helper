import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "offset-top",
    "description": "距离窗口顶部达到指定偏移量后触发",
    "type": "Number",
    "value": "0",
    "default": ""
  },
  {
    "name": "offset-bottom",
    "description": "距离窗口底部达到指定偏移量后触发",
    "type": "Number",
    "value": "-",
    "default": ""
  },
  {
    "name": "z-index",
    "description": "设置 affix 对象的层级",
    "type": "Number",
    "value": "1000",
    "default": ""
  },
  {
    "name": "target",
    "description": "设置 affix 需要监听其滚动事件容器的id",
    "type": "String",
    "value": "window",
    "default": ""
  },
  {
    "name": "disabled",
    "description": "设置为true的时候可将图钉定位效果移除",
    "type": "Boolean",
    "value": "false",
    "default": ""
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "change",
    "description": "在固定状态发生改变时触发",
    "parameter": "true / false"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
