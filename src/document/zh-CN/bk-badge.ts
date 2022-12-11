import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "theme",
    "description": "组件的主题色",
    "type": "String",
    "value": "`primary` `info` `warning` `danger` `success` 或16进制颜色值",
    "default": "primary"
  },
  {
    "name": "val",
    "description": "组件显示的值",
    "type": "Number / String",
    "value": "——",
    "default": "1"
  },
  {
    "name": "icon",
    "description": "组件显示图标；当设置 icon 时，将忽略设置的 value 值",
    "type": "String",
    "value": "参考[蓝鲸 ICON](ICON_URL)",
    "default": "——"
  },
  {
    "name": "max",
    "description": "组件显示的最大值，当 value 超过 max，显示数字 +；仅当设置了 Number 类型的 value 值时生效",
    "type": "Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "dot",
    "description": "是否仅显示小圆点；当设置 dot 为 true 时，value, icon, max 均会被忽略",
    "type": "Boolean",
    "value": "true / false",
    "default": "——"
  },
  {
    "name": "visible",
    "description": "是否显示组件",
    "type": "Boolean",
    "value": "true / false",
    "default": "——"
  },
  {
    "name": "position",
    "description": "组件相对于其兄弟组件的位置",
    "type": "String",
    "value": "`top-right` `bottom-right` `bottom-left` `top-left`",
    "default": "top-right"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-badge-wrapper` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "radius",
    "description": "配置自定义弧度，以实现多种形状",
    "type": "String",
    "value": "Number",
    "default": "——"
  },
  {
    "name": "valLength",
    "description": "配置val字符显示长度，最大值建议英文不超过3个字母，中文不超过2个汉字(一个汉字长度算作2)",
    "type": "Number",
    "value": "——",
    "default": "3"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "hover",
    "description": "广播给父组件 mouseover 事件",
    "parameter": "——"
  },
  {
    "name": "leave",
    "description": "广播给父组件 mouseleave 事件",
    "parameter": "——"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
