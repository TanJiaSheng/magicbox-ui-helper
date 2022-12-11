import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "initial-divide",
    "description": "初始化分隔侧栏大小",
    "type": "String / Number",
    "value": "——",
    "default": "20%"
  },
  {
    "name": "placement",
    "description": "侧栏在布局中的位置",
    "type": "String",
    "value": "left / right / top / bottom",
    "default": "left"
  },
  {
    "name": "min",
    "description": "侧栏最小像素宽度",
    "type": "Number",
    "value": "——",
    "default": "100"
  },
  {
    "name": "max",
    "description": "侧栏最大像素宽度",
    "type": "Number",
    "value": "——",
    "default": "Inifinity"
  },
  {
    "name": "disabled",
    "description": "是否禁用",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "immediate",
    "description": "是否实时拉伸",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "collapsible",
    "description": "是否开启折叠功能",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "auto-minimize",
    "description": "是否自定最小化",
    "type": "Boolean,Number",
    "value": "——",
    "default": "false"
  },
  {
    "name": "border",
    "description": "是否显示外边框",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-resize-layout 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "before-resize",
    "description": "拉伸前出发的回调",
    "parameter": "event"
  },
  {
    "name": "resizing",
    "description": "拉伸前出发的回调",
    "parameter": "width/height"
  },
  {
    "name": "after-resize",
    "description": "拉伸后触发的回调",
    "parameter": "width/height"
  },
  {
    "name": "collapse-change",
    "description": "展开/折叠状态变更事件",
    "parameter": "collapsed"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "aside",
    "description": "侧栏内容"
  },
  {
    "name": "main",
    "description": "主要内容"
  },
  {
    "name": "collapse-trigger",
    "description": "替换折叠功能的触发器，自定义触发器时需要调用组件的setCollapse函数, 参数为折叠状态collapsed, 缺省时默认进行切换"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
