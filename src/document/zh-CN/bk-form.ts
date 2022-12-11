import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "form-type",
    "description": "表单类型, 水平布局（horizontal）和垂直布局（vertical）",
    "type": "String",
    "value": "`horizontal`,`vertical`, `inline`",
    "default": "`horizontal`"
  },
  {
    "name": "label-width",
    "description": "表单项 label 宽度",
    "type": "Number",
    "value": "——",
    "default": "150"
  },
  {
    "name": "model",
    "description": "数据",
    "type": "Object",
    "value": "——",
    "default": "——"
  },
  {
    "name": "rules",
    "description": "表单项验证规则",
    "type": "Object",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-form` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "validate",
    "description": "对所有的表单项进行手动触发校验",
    "parameter": "校验后的回调函数"
  },
  {
    "name": "clearError",
    "description": "对所有的表单项的错误提示清除",
    "parameter": "--"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
