import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "name",
    "description": "唯一标识符，相当于 ID",
    "type": "String",
    "value": "--",
    "default": "默认为 index"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-collapse-item` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "content-hidden-type",
    "description": "配置内容隐藏方式，默认是 `none`，收起时，不渲染内容组件; `hidden` 模式渲染组件，通过设置 `display:none` 不显示在页面",
    "type": "String",
    "value": "none, hidden",
    "default": "none"
  },
  {
    "name": "hide-arrow",
    "description": "是否隐藏箭头",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "custom-trigger-area",
    "description": "是否自定义触发区域，开启后，hide-arrow将不再生效，仅文字区域内可触发hover和点击效果",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "disabled",
    "description": "是否禁用当前面板，禁用后展开过的面板会自动折叠",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "before-enter",
    "description": "动画开始前",
    "parameter": "——"
  },
  {
    "name": "after-leave",
    "description": "动画结束后",
    "parameter": "——"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
