import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "show",
    "description": "是否显示",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "versionList",
    "description": "版本列表",
    "type": "{date: string, title: string}[]",
    "value": "——",
    "default": "[]"
  },
  {
    "name": "versionDetail",
    "description": "选择的版本的明细",
    "type": "String",
    "value": "——",
    "default": "''"
  },
  {
    "name": "finished",
    "description": "版本列表是否已经加载完成，如果未加载完成组件将自动加载到可滚动窗口后停止加载",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "getVersionList",
    "description": "获取版本列表",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "getVersionDetail",
    "description": "获取当前选中的版本的版本明细",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "currentVersion",
    "description": "当前版本对应于数据’versionTitleName‘字段的值",
    "type": "Sting",
    "value": "——",
    "default": "——"
  },
  {
    "name": "minLeftWidth",
    "description": "左侧栏的最小宽度",
    "type": "Number",
    "value": "——",
    "default": "180"
  },
  {
    "name": "maxLeftWidth",
    "description": "左侧栏的最大宽度",
    "type": "Number",
    "value": "——",
    "default": "500"
  },
  {
    "name": "versionTitleName",
    "description": "左侧栏版本数据版本标题对应的字段名",
    "type": "String",
    "value": "——",
    "default": "title"
  },
  {
    "name": "versionSubTitleName",
    "description": "左侧栏版本数据版本副标题对应的字段名",
    "type": "String",
    "value": "——",
    "default": "date"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "change",
    "description": "组件弹窗显示值改变时触发",
    "parameter": "show: boolean"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "item",
    "description": "左侧栏列表子项插槽 绑定属性 `{item, index}`"
  },
  {
    "name": "default",
    "description": "右侧显示版本详情数据插槽 绑定属性 `{detail, versionDetail}`"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
