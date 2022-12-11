import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "span",
    "description": "栅格的占位格数，当设置为 0 时，则自动设置为 col 相当于 width: 100%",
    "type": "Number",
    "value": "——",
    "default": "1"
  },
  {
    "name": "offset",
    "description": "栅格的偏移",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "pull",
    "description": "栅格向左移动格数",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "push",
    "description": "栅格向右移动格数",
    "type": "Number",
    "value": "——",
    "default": "0"
  }
];

export const document: BkDocument = {attributes,};

export default document;
