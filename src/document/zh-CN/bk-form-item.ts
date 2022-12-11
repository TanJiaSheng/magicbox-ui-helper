import { BkDocument } from "../../document";
import { DocumentAttribute } from "../../document";
import { DocumentSlot } from "../../document";

export const attributes: DocumentAttribute[] = [
  {
    "name": "property",
    "description": "必须结合 bk-form 的 model 属性来配置，用于从整个 model 获取值，通过此值再结合校验规则进行校验",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "label",
    "description": "表单项 label 显示的内容",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "label-width",
    "description": "表单项 label 宽度, 如果没有设置则使用 bk-form 的 `label-width`",
    "type": "Number",
    "value": "——",
    "default": "`150`"
  },
  {
    "name": "error-display-type",
    "description": "表单项错误提示的方式，有tooltips和行展示效果",
    "type": "String",
    "value": "`tooltips` / `normal`",
    "default": "`tooltips`"
  },
  {
    "name": "desc",
    "description": "表单项 label描述信息, 具体用法和v-bk-tooltips指令一致，详情可参考[v-bk-tooltips参数](#/tooltips)",
    "type": "String, Object",
    "value": "——",
    "default": "——"
  },
  {
    "name": "desc-type",
    "description": "表单项 label描述信息展示方式，包括下划线和图标两种方式",
    "type": "String",
    "value": "`border` / `icon`",
    "default": "`border`"
  },
  {
    "name": "desc-icon",
    "description": "表单项 label描述信息展示为图标时配置，仅在desc-type为`icon`时生效",
    "type": "String",
    "value": "参考[蓝鲸 ICON](ICON_URL)",
    "default": "--"
  },
  {
    "name": "required",
    "description": "是否必填，在 label 会显示红色的*",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  },
  {
    "name": "rules",
    "description": "定义表单项的校验规则, 一条规则包含：触发方式 `trigger`，可选值有 'blur', 'change', 显示：message, 校验规则：required、min、max，也可以自定正则regex, 以及自定义方法validator，在自定义方法里可以实现异步验证，详情看表单验证例子",
    "type": "Array",
    "value": "——",
    "default": "——"
  },
  {
    "name": "icon-offset",
    "description": "当表单项校验错误时，会有一个红色感叹 icon 出现，此属性可定位 icon 的偏移位置",
    "type": "Number",
    "value": "——",
    "default": "`8`"
  },
  {
    "name": "ext-cls",
    "description": "配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-form-item` 上",
    "type": "String",
    "value": "——",
    "default": "——"
  },
  {
    "name": "auto-check",
    "description": "一旦渲染完成，自动启用检查一次",
    "type": "Boolean",
    "value": "true / false",
    "default": "false"
  }
];

export const slots: DocumentSlot[] = [
  {
    "name": "tip",
    "description": "自定表单项提示内容"
  }
];

export const document: BkDocument = {attributes,slots,};

export default document;
