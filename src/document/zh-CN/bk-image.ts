import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "src",
    "description": "图片源，同原生",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "fit",
    "description": "确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)",
    "type": "String",
    "value": "fill / contain / cover / none / scale-down",
    "default": "-"
  },
  {
    "name": "alt",
    "description": "原生 alt",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "referrer-policy",
    "description": "原生 referrerPolicy",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "lazy",
    "description": "是否开启懒加载",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "scroll-container",
    "description": "开启懒加载后，监听 scroll 事件的容器",
    "type": "String / HTMLElement",
    "value": "—",
    "default": "最近一个 overflow 值为 auto 或 scroll 的父元素"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "load",
    "description": "图片加载成功触发",
    "parameter": "(e: Event)"
  },
  {
    "name": "error",
    "description": "图片加载失败触发",
    "parameter": "(e: Error)"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "placeholder",
    "description": "图片未加载的占位内容"
  },
  {
    "name": "error",
    "description": "图片加载失败的内容"
  }
];

export const document: BkDocument = {attributes,methods,slots,};

export default document;
