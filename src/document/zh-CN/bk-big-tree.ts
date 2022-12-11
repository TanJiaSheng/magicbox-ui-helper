import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";
import { DocumentFile } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "data",
    "description": "同步渲染数据，异步数据请使用组件实例的setData方法进行渲染",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "options",
    "description": "配置项",
    "type": "Object",
    "value": "——",
    "default": "——"
  },
  {
    "name": "options.idKey",
    "description": "节点的id取值",
    "type": "String, Function(data)",
    "value": "——",
    "default": "id"
  },
  {
    "name": "options.nameKey",
    "description": "节点的name取值",
    "type": "String",
    "value": "——",
    "default": "name"
  },
  {
    "name": "options.childrenKey",
    "description": "节点的children取值",
    "type": "String",
    "value": "——",
    "default": "children"
  },
  {
    "name": "options.isFolder",
    "description": "结点是否为目录",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-checkbox",
    "description": "是否显示节点复选框，为Function时返回true显示",
    "type": "Boolean, Function(data)",
    "value": "——",
    "default": "false"
  },
  {
    "name": "check-strictly",
    "description": "在显示复选框的情况下，是否严格的遵循父子互相关联的做法",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "check-only-available-strictly",
    "description": "在显示复选框且严格的遵循父子互相关联的情况下，是否仅关联可用节点(可用指非禁用且仍能在树结构中呈现)",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "disable-strictly",
    "description": "禁用/启用节点时，是否严格的遵循子节点跟随当前节点一同变化的做法",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "show-link-line",
    "description": "是否显示层级连线",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "expand-icon",
    "description": "折叠时的图标",
    "type": "String",
    "value": "——",
    "default": "bk-icon icon-down-shape"
  },
  {
    "name": "collapse-icon",
    "description": "展开时的图标",
    "type": "String",
    "value": "——",
    "default": "bk-icon icon-down-shape"
  },
  {
    "name": "node-icon",
    "description": "节点的图标",
    "type": "String, Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "default-expand-all",
    "description": "默认展开全部节点",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "default-expanded-nodes",
    "description": "默认展开的节点id集合",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "default-checked-nodes",
    "description": "默认勾选的节点id集合",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "default-selected-node",
    "description": "默认选中的节点id，selectable为false时无效",
    "type": "String,Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "selectable",
    "description": "节点是否可以选中",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "before-select",
    "description": "选中节点前的回调函数，返回false时将终止后续的选中动作",
    "type": "Function(node)",
    "value": "——",
    "default": "——"
  },
  {
    "name": "before-check",
    "description": "复选节点前的回调函数，返回false时将终止后续的复选动作",
    "type": "Function(node/[node])",
    "value": "——",
    "default": "——"
  },
  {
    "name": "expand-on-click",
    "description": "点击节点时展开/折叠",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "check-on-click",
    "description": "点击节点时复选/取消复选",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "filter-method",
    "description": "筛选节点的方法, 默认按节点的名称进行筛选",
    "type": "Function(keyword, node)",
    "value": "——",
    "default": "——"
  },
  {
    "name": "display-matched-node-descendants",
    "description": "筛选时，节点命中后，是否显示后代节点",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "lazy-method",
    "description": "异步加载子节点的方法，返回的数据格式为{ data: childData/[childData], leaf: [childId] }，仅支持加载一层，如果需要手动阻止继续加载下一层级，可在leaf字段中写入不继续加载的节点的id",
    "type": "Function(node)",
    "value": "——",
    "default": "——"
  },
  {
    "name": "lazy-disabled",
    "description": "是否禁用异步加载节点，当配置了lazy-method后如果一些节点明确不需要进行异步加载可通过此属性配置",
    "type": "Function, Boolean",
    "value": "Function(node)",
    "default": "——"
  },
  {
    "name": "loading-class",
    "description": "节点处于异步加载子节点时的类名",
    "type": "String",
    "value": "——",
    "default": "node-loading"
  },
  {
    "name": "node-width",
    "description": "节点宽度(px)，设定该值后，将动态判断是否应用宽度",
    "type": "String,Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-big-tree 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "use-default-empty",
    "description": "无搜索结果时，是否显示默认的无结果UI,使用了empty插槽后此配置无效",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "height",
    "description": "容器高度，设置此属性可开启虚拟滚动，支持渲染大量数据",
    "type": "Number",
    "value": "——",
    "default": "——"
  },
  {
    "name": "node-height",
    "description": "单个节点的高度，用于虚拟滚动的数据计算，",
    "type": "Number",
    "value": "——",
    "default": "32"
  },
  {
    "name": "configurable",
    "description": "仅作为数据展示用时，可将此属性配置为false，从而节省渲染开销，但会导致数据失去响应式的能力",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "padding",
    "description": "节点左侧缩进的距离，默认为 20",
    "type": "Number",
    "value": "——",
    "default": "20"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "setData",
    "description": "因组件内部对data属性不是响应式的，所以异步数据需要主动调用此方法设置",
    "parameter": "data"
  },
  {
    "name": "getNodeById",
    "description": "根据id获取节点实例,返回TreeNode对象",
    "parameter": "id"
  },
  {
    "name": "addNode",
    "description": "添加节点, 默认插入到指定父节点的末尾, options可选参数为parentId, insertIndex, expandParent",
    "parameter": "data/[data], parentId, insertIndex 或者 data/[data], options"
  },
  {
    "name": "removeNode",
    "description": "移除节点",
    "parameter": "id/[id]"
  },
  {
    "name": "setSelected",
    "description": "设置选中的节点，options.emitEvent是否触发select-change事件,options.beforeSelect是否调用before-select属性配置的方法",
    "parameter": "id, options = { emitEvent: false, beforeSelect: true }"
  },
  {
    "name": "removeChecked",
    "description": "取消所有复选的节点，options.emitEvent是否触发check-change事件",
    "parameter": "options = { emitEvent: false }"
  },
  {
    "name": "setChecked",
    "description": "设置节点复选状态, options.emitEvent是否触发check-change事件, options.beforeCheck是否调用before-check属性配置的方法, options.checked复选状态",
    "parameter": "id/[id], options = { emitEvent: false, beforeCheck: true, checked: true }"
  },
  {
    "name": "setExpanded",
    "description": "设置节点的展开/折叠状态, options.emitEvent是否触发expand-change事件, options.expanded展开/折叠状态",
    "parameter": "id/[id], options = { emitEvent: false, expanded: true }"
  },
  {
    "name": "setDisabled",
    "description": "设置节点的禁用/启用状态, options.emitEvent是否触发disable-change事件, options.disabled禁用/启用状态",
    "parameter": "id/[id], options = { emitEvent: false, disabled: true }"
  },
  {
    "name": "filter",
    "description": "筛选节点, 默认按照节点的name进行筛选，可通过filter-method方法自定义筛选过程",
    "parameter": "keyword"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "select-change",
    "description": "选中的节点发生变化时触发",
    "parameter": "TreeNode"
  },
  {
    "name": "check-change",
    "description": "复选节点发生变化时触发",
    "parameter": "id/[id], checked"
  },
  {
    "name": "expand-change",
    "description": "展开/折叠节点时触发",
    "parameter": "TreeNode"
  },
  {
    "name": "disable-change",
    "description": "禁用/启用节点时触发",
    "parameter": "TreeNode/[TreeNode]"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "——",
    "description": "匿名作用域插槽, 提供node、data两个props"
  },
  {
    "name": "empty",
    "description": "搜索结果为空时的插槽，使用此插槽后use-default-empty配置将无效"
  }
];

export const treeNode: DocumentFile[] = [
  {
    "name": "node.data",
    "description": "节点的原始数据"
  },
  {
    "name": "node.id",
    "description": "节点id"
  },
  {
    "name": "node.name",
    "description": "节点的显示的名称"
  },
  {
    "name": "node.vNode",
    "description": "节点的vue实例"
  },
  {
    "name": "node.tree",
    "description": "节点所在的树组件实例"
  },
  {
    "name": "node.icon",
    "description": "节点的icon集合，包含expand/collapse/node三种icon"
  },
  {
    "name": "node.level",
    "description": "节点的层级"
  },
  {
    "name": "node.index",
    "description": "节点在所有树节点中的索引"
  },
  {
    "name": "node.parent",
    "description": "当前节点的父节点"
  },
  {
    "name": "node.isLeaf",
    "description": "是否是子节点"
  },
  {
    "name": "node.children",
    "description": "节点的子节点"
  },
  {
    "name": "node.parents",
    "description": "节点的祖先节点"
  },
  {
    "name": "node.descendants",
    "description": "节点的子孙节点"
  },
  {
    "name": "node.isFirst",
    "description": "节点是否是父节点的第一个节点"
  },
  {
    "name": "node.isLast",
    "description": "节点是否是父节点的最后一个节点"
  },
  {
    "name": "node.hasCheckbox",
    "description": "节点是否显示复选框"
  },
  {
    "name": "node.collapseIcon",
    "description": "节点折叠时的图标"
  },
  {
    "name": "node.expandIcon",
    "description": "节点展开时的图标"
  },
  {
    "name": "node.nodeIcon",
    "description": "节点内容的图标"
  },
  {
    "name": "node.checked",
    "description": "节点是否被勾选"
  },
  {
    "name": "node.selected",
    "description": "节点是否被选中"
  },
  {
    "name": "node.expanded",
    "description": "节点是否展开"
  },
  {
    "name": "node.disabled",
    "description": "节点是否禁用"
  },
  {
    "name": "node.matched",
    "description": "节点是否匹配筛选结果"
  },
  {
    "name": "node.visible",
    "description": "节点是否显示"
  },
  {
    "name": "node.indeterminate",
    "description": "在有复选框时，节点是否处于半选状态"
  }
];

export const document: BkDocument = {attributes,methods,events,slots,treeNode,};

export default document;
