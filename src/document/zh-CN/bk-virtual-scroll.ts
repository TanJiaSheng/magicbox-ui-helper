import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "item-height",
    "description": "单个元素的高度",
    "type": "Number",
    "value": "——",
    "default": "16"
  },
  {
    "name": "show-index",
    "description": "是否显示序号",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "list",
    "description": "数据集合，数据变化会调用setListData，如果数据量比较大，推荐调用方法添加数据",
    "type": "Array",
    "value": "——",
    "default": "[]"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-scroll-home` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "addListData",
    "description": "给列表集合添加数据",
    "parameter": "数据集合"
  },
  {
    "name": "setListData",
    "description": "设置列表集合数据",
    "parameter": "数据集合"
  },
  {
    "name": "scrollPageByIndex",
    "description": "根据序号滚动页面",
    "parameter": "序号"
  },
  {
    "name": "drawMinNav",
    "description": "根据序号在滚动条绘制定位点",
    "parameter": "序号集合"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "change",
    "description": "列表纵向滚动触发的事件",
    "parameter": "滚动后视口展示的数据集合"
  },
  {
    "name": "horizontal-scroll",
    "description": "列表横向滚动触发的事件",
    "parameter": "底部滚动条距离左侧的距离"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "default",
    "description": "内容区插槽"
  },
  {
    "name": "index",
    "description": "索引区插槽"
  }
];

export const document: BkDocument = {attributes,methods,events,slots,};

export default document;
