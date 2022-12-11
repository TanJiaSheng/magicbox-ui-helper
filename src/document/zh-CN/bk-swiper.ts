import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "pics",
    "description": "图片列表",
    "type": "Array",
    "value": "—",
    "default": "—"
  },
  {
    "name": "list",
    "description": "数据列表，传了list以list为主",
    "type": "Array",
    "value": "—",
    "default": "—"
  },
  {
    "name": "is-loop",
    "description": "是否开启图片轮播",
    "type": "Boolean",
    "value": "—",
    "default": "true"
  },
  {
    "name": "loop-time",
    "description": "轮播间隔",
    "type": "Number",
    "value": "—",
    "default": "8000"
  },
  {
    "name": "height",
    "description": "轮播容器高度",
    "type": "Number/String",
    "value": "——",
    "default": "容器CSS高度"
  },
  {
    "name": "width",
    "description": "轮播容器宽度",
    "type": "Number/String",
    "value": "——",
    "default": "容器CSS宽度"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-swiper-home` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "changeIndex",
    "description": "用于改变当前图片的索引",
    "parameter": "图片的索引"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "index-change",
    "description": "图片索引改变时触发该事件",
    "parameter": "当前图片的索引"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "——",
    "description": "匿名插槽, 传递`data`数据给自定义内容"
  }
];

export const document: BkDocument = {attributes,methods,events,slots,};

export default document;
