import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "list",
    "description": "下拉菜单所需的数据列表",
    "type": "Array",
    "value": "——",
    "default": "[]"
  },
  {
    "name": "placeholder",
    "description": "空数据时显示的提示文案",
    "type": "String",
    "value": "——",
    "default": "请输入并按 Enter 结束"
  },
  {
    "name": "disabled",
    "description": "是否禁用组件",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "allow-next-focus",
    "description": "多选时，是否允许选中后继续操作",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "save-key",
    "description": "循环 list 时，保存字段的 key 值",
    "type": "String",
    "value": "——",
    "default": "'id'"
  },
  {
    "name": "search-key",
    "description": "输入时，搜索的 key 值",
    "type": "String/Array",
    "value": "——",
    "default": "'name'"
  },
  {
    "name": "display-key",
    "description": "循环 list 时，显示字段的 key 值",
    "type": "String",
    "value": "——",
    "default": "'name'"
  },
  {
    "name": "has-delete-icon",
    "description": "是否显示删除按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "clearable",
    "description": "是否允许清空",
    "type": "Boolean",
    "value": "true / false",
    "default": "true"
  },
  {
    "name": "allow-create",
    "description": "是否允许自定义标签输入",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "max-data",
    "description": "是否限制可选个数，-1为不限制",
    "type": "Number",
    "value": "——",
    "default": "-1"
  },
  {
    "name": "use-group",
    "description": "是否显示分组",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "max-result",
    "description": "下拉列表搜索结果显示个数，默认为 10",
    "type": "Number",
    "value": "——",
    "default": "10"
  },
  {
    "name": "content-width",
    "description": "自定义设置下拉弹框的宽度，单选会撑满因此失效",
    "type": "Number",
    "value": "——",
    "default": "190"
  },
  {
    "name": "content-max-height",
    "description": "自定义设置下拉弹框的长度",
    "type": "Number",
    "value": "——",
    "default": "300"
  },
  {
    "name": "separator",
    "description": "输入分隔符号，支持批量输入",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "tpl",
    "description": "自定义下拉列表模板",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "tag-tpl",
    "description": "自定义标签模板",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "paste-fn",
    "description": "批量粘贴处理文本返回格式",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "left-space",
    "description": "文字与左边框距离",
    "type": "Number",
    "value": "——",
    "default": "0"
  },
  {
    "name": "trigger",
    "description": "搜索列表触发展示方式，默认是输入关键字搜索时展示，也可以获取焦点是展示（用在数据量少的时候）",
    "type": "String",
    "value": "search / focus",
    "default": "search"
  },
  {
    "name": "filter-callback",
    "description": "过滤函数，参数 `(filterVal, filterKey, data)`，分别表示当前过滤的文本、当前数据使用的 key、所有数据，方便使用者根据自己的逻辑来筛选数据",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-tag-selector` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "tooltip-key",
    "description": "让选中的标签在鼠标移上去时显示提示文案",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "allow-auto-match",
    "description": "配置输入时失焦点后，如果完全匹配则自动选中，如果自定义则自动输入",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "create-tag-validator",
    "description": "自定义标签校验函数，返回 boolean，参数`(tag)`，tag表示当前输入值，在自定义标签时，可以自定义添加标签的校验",
    "type": "Function",
    "value": "-",
    "default": "_"
  },
  {
    "name": "show-clear-only-hover",
    "description": "是否在只有 hover 的时候才显示 clear 清除按钮",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "change",
    "description": "数据发生变化时回调函数",
    "parameter": "tags"
  },
  {
    "name": "select",
    "description": "选择数据后的回调函数",
    "parameter": ""
  },
  {
    "name": "remove",
    "description": "删除数据后的回调函数",
    "parameter": ""
  },
  {
    "name": "removeAll",
    "description": "一键清空数据后的回调函数",
    "parameter": ""
  },
  {
    "name": "blur",
    "description": "输入状态时失焦点的回调函数",
    "parameter": "input, tags"
  }
];

export const document: BkDocument = {attributes,events,};

export default document;
