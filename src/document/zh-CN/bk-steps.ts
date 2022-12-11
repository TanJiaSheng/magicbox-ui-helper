import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentEvent } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "steps",
    "description": "组件步骤内容，数组中的元素可以是对象，可以是数字，可以是字符串，也可以是三者混合；<br>当元素是对象时，有四个可选的key：`title` `icon` `description` `status`；当元素是数字或字符串时，组件会将其解析成对象形式下的 `icon` 的值；当元素是字符串时，使用[蓝鲸 ICON](ICON_URL)",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "cur-step",
    "description": "当前步骤的索引值，从 1 开始；支持 .sync 修饰符",
    "type": "Number",
    "value": "——",
    "default": "1"
  },
  {
    "name": "direction",
    "description": "步骤条方向，支持水平（horizontal）和竖直（vertical）两种方向",
    "type": "String",
    "value": "horizontal / vertical",
    "default": "horizontal"
  },
  {
    "name": "label-placement",
    "description": "步骤标签描述文字放置位置，当前仅步骤条方向（direction） 为 水平（horizontal） 时有效，默认 `block` 放置在图标下方，可选 `inline` 放置在图标右侧",
    "type": "String",
    "value": "inline / block",
    "default": "block"
  },
  {
    "name": "size",
    "description": "指定大小，目前支持普通（不设置）和小尺寸（small）",
    "type": "String",
    "value": "small",
    "default": "——"
  },
  {
    "name": "status",
    "description": "指定当前步骤状态，不指定则为默认状态（是否完成）",
    "type": "String",
    "value": "error / loading",
    "default": "——"
  },
  {
    "name": "controllable",
    "description": "步骤可否被控制前后跳转",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "theme",
    "description": "组件的主题色",
    "type": "String",
    "value": "primary / info / success / warning / danger",
    "default": "primary"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-steps` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "before-change",
    "description": "步骤切换前的钩子函数，支持异步函数",
    "type": "Function(nextStep)",
    "value": "——",
    "default": "——"
  }
];

export const events: DocumentEvent[] = [
  {
    "name": "step-changed",
    "description": "当前步骤变化时的回调",
    "parameter": "变化后的步骤 index"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "stepContent`index`",
    "description": "对应索引的插槽，`index`替换为对应位置的索引，如果步骤中同时存在description，会以description为主"
  }
];

export const document: BkDocument = {attributes,events,slots,};

export default document;
