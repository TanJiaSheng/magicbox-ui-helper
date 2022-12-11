import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentMethod } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "urlList",
    "description": "预览图片地址集合",
    "type": "Array",
    "value": "——",
    "default": "[]"
  },
  {
    "name": "isShowTitle",
    "description": "预览图片地址集合",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "onSwitch",
    "description": "切换图片",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "onClose",
    "description": "关闭预览",
    "type": "Function",
    "value": "——",
    "default": "——"
  },
  {
    "name": "initialIndex",
    "description": "z-index",
    "type": "Number",
    "value": "——",
    "default": "2000"
  }
];

export const methods: DocumentMethod[] = [
  {
    "name": "hide",
    "description": "点击关闭按钮",
    "parameter": "——"
  },
  {
    "name": "change",
    "description": "当前预览图片的索引值",
    "parameter": "index"
  }
];

export const document: BkDocument = {attributes,methods,};

export default document;
