import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "value / v-model",
    "description": "绑定值(已选择的数据)",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "title",
    "description": "顶部 title",
    "type": "Array",
    "value": "——",
    "default": "['左侧列表', '右侧列表']"
  },
  {
    "name": "source-list",
    "description": "穿梭框数据源(必传)",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "empty-content",
    "description": "无数据时显示文案",
    "type": "Array",
    "value": "——",
    "default": "['无数据', '未选择任何项']"
  },
  {
    "name": "display-key",
    "description": "循环 list 时，显示字段的 key 值",
    "type": "String",
    "value": "——",
    "default": "name"
  },
  {
    "name": "setting-key",
    "description": "具有唯一标识的 key 值",
    "type": "String",
    "value": "——",
    "default": "id"
  },
  {
    "name": "searchable",
    "description": "是否允许搜索（以display-key来匹配）",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "draggable",
    "description": "是否允许选择项拖拽",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "show-overflow-tips",
    "description": "文本溢出时，是否使用气泡显示全部内容",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "width",
    "description": "穿梭框宽度（注意带单位）",
    "type": "String",
    "value": "——",
    "default": "600px"
  },
  {
    "name": "height",
    "description": "穿梭框高度（注意带单位）",
    "type": "String",
    "value": "——",
    "default": "274px"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-transfer` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "change",
    "description": "数据源改变触发(targetValueList 表示所选数据的 setting-key 值，即value值)",
    "parameter": "sourceList/targetList/targetValueList"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "left-header",
    "description": "左侧头部插槽"
  },
  {
    "name": "right-header",
    "description": "右侧头部插槽"
  },
  {
    "name": "left-empty-content",
    "description": "左侧无数据时插槽"
  },
  {
    "name": "right-empty-content",
    "description": "右侧无数据时插槽"
  },
  {
    "name": "left-option",
    "description": "左侧选项卡插槽"
  },
  {
    "name": "right-option",
    "description": "右侧选项卡插槽"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
