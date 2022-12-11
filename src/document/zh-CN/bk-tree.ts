import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "data",
    "description": "tree 数据源（必传）",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "node-key",
    "description": "具有唯一标识的key值（必传）",
    "type": "String",
    "value": "——",
    "default": "id"
  },
  {
    "name": "show-icon",
    "description": "节点是否可配置icon",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "multiple",
    "description": "单选/多选标识",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "has-border",
    "description": "是否显示边框",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "draggable",
    "description": "节点是否可拖拽",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "drag-sort",
    "description": "节点拖拽时可交换位置（开启拖拽可交换位置后将不支持改变层级）",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "drag-after-expanded",
    "description": "节点拖拽后是否展开",
    "type": "Boolean",
    "value": "Boolean",
    "default": "true"
  },
  {
    "name": "is-delete-root",
    "description": "是否可删除根节点",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "opened-icon",
    "description": "父级节点展开全局icon(优先级低于源数据中配置的icon)",
    "type": "String",
    "value": "——",
    "default": "icon-folder-open"
  },
  {
    "name": "closed-icon",
    "description": "父级节点收起全局icon(优先级低于源数据中配置的icon)",
    "type": "String",
    "value": "——",
    "default": "icon-folder"
  },
  {
    "name": "node-icon",
    "description": "子节点全局icon(优先级低于源数据中配置的icon)",
    "type": "String",
    "value": "——",
    "default": "icon-file"
  },
  {
    "name": "tpl",
    "description": "自定义模板",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-tree` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "getNode",
    "description": "获取所需节点(多选时生效，单选时通过 on-click 事件可获取到)",
    "parameter": "keyParton(Array / String 自定义键值)"
  },
  {
    "name": "searchNode",
    "description": "节点过滤",
    "parameter": "filter （过滤器）/ data"
  },
  {
    "name": "getSearchResult",
    "description": "获取节点过滤结果",
    "parameter": "list(过滤返回节点)/ isEmpty(过滤返回是否为空标识)"
  },
  {
    "name": "addNode",
    "description": "添加单个节点",
    "parameter": "parent / newNode"
  },
  {
    "name": "addNodes",
    "description": "添加多个节点",
    "parameter": "parent / newChildren"
  },
  {
    "name": "delNode",
    "description": "删除节点",
    "parameter": "parent / node"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "on-click",
    "description": "节点点击触发",
    "parameter": "node （当前点击节点）"
  },
  {
    "name": "on-check",
    "description": "多选时，多选框 chang 触发 （单选时不生效）",
    "parameter": "node （当前选择节点）"
  },
  {
    "name": "on-expanded",
    "description": "节点展开/收起触发",
    "parameter": "node / expanded"
  },
  {
    "name": "on-drag-node",
    "description": "节点拖拽结束触发",
    "parameter": "dragNode / targetNode"
  },
  {
    "name": "async-load-nodes",
    "description": "异步加载节点数据",
    "parameter": "node （当前节点）"
  }
];

export const document: BkDocument = {attributes,methods,events,};

export default document;
