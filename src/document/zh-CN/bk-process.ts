import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "list",
    "description": "process 数据源（必传）",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "display-key",
    "description": "循环 list 时，显示字段的 key 值(必传)",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "controllable",
    "description": "步骤可否被控制前后跳转",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-steps",
    "description": "是否显示子步骤操作按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "cur-process",
    "description": "当前步骤的索引值（必传），支持 .sync 修饰符",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-process` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "process-changed",
    "description": "当前步骤变化时的回调",
    "parameter": "变化后的步骤 process / 变化后 process 对于的数据 data"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
