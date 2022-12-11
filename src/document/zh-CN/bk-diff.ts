import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "old-content",
    "description": "旧内容",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "new-content",
    "description": "新内容",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "context",
    "description": "不同地方间隔多少行不隐藏",
    "type": "Number",
    "value": "——",
    "default": ""
  },
  {
    "name": "theme",
    "description": "主题风格",
    "type": "String",
    "value": "light，dark",
    "default": "light"
  },
  {
    "name": "format",
    "description": "展示方式",
    "type": "String",
    "value": "`line-by-line`，`side-by-side`",
    "default": "`line-by-line`"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-diff` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const document: BkDocument = {attributes,};

export default document;
