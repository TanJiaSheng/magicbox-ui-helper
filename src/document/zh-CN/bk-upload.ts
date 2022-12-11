import { DocumentEvent, DocumentAttribute, DocumentSlot, BkDocument } from './../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '当前上传文件列表',
    type: 'Array',
    value: '—',
    default: '[]'
  },
  {
    name: 'theme',
    description: '上传组件类型',
    type: 'string',
    value: '支持拖拽和点击(draggable)、自定义(custom)、图片卡片(picture)',
    default: 'draggable'
  },
  {
    name: 'accept',
    description: "可选的文件类型。theme为 picture时且accept没有配置时，可接受文件文类型为：'image/png,image/jpeg,image/jpg'。",
    type: 'string',
    value: '接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（尽量使用文件扩展名	）',
    default: '—'
  },
  {
    name: 'url',
    description: '服务器地址（必传）',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'header',
    description: '请求头 { name: " ", value: " " }',
    type: 'Array, Object',
    value: '—',
    default: '—'
  },
  {
    name: 'handle-res-code',
    description: '处理返回码的函数，默认参数 response，需要返回 true 或 false',
    type: 'Function',
    value: '—',
    default: 'true'
  },
  {
    name: 'multiple',
    description: '是否支持多选文件',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'form-data-attributes',
    description: '自定义上传属性',
    type: "Array | [{ name: 'attrName', value: Object }]",
    value: '—',
    default: ''
  },
  {
    name: 'size',
    description: '限制上传文件体积 { maxFileSize: 1, maxImgSize: 1 }	',
    type: 'Number, Object',
    value: '—',
    default: '5M'
  },
  {
    name: 'name',
    description: '后台读取文件的 key',
    type: 'string',
    value: '—',
    default: 'upload_file'
  },
  {
    name: 'limit',
    description: '限制上传文件个数',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'with-credentials',
    description: '支持发送 cookie 凭证信息',
    type: 'boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'custom-li-width',
    description: "采用自定义上传入口方式(theme为'custom'时)的文件区域宽度，支持如'300px'和'40%'的形式",
    type: 'String',
    value: '—',
    default: '-'
  },
  {
    name: 'error-type',
    description: '错误信息提示类型（multiple为true时固定为tooltips）',
    type: 'String',
    value: 'tooltips(悬浮提示)/text(底部文本)',
    default: 'text'
  },
  {
    name: 'tip',
    description: '提示信息',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'delay-time',
    description: '上传完毕后列表消失时间',
    type: 'Number',
    value: '—',
    default: '—'
  },
  {
    name: 'validate-name',
    description: '用来验证文件名是否合法的',
    type: 'RegExp',
    value: '—',
    default: '—'
  },
  {
    name: 'custom-request',
    description: '覆盖默认的上传行为，自定义上传的实现',
    type: 'Function',
    value: '—',
    default: '—'
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-upload 上',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'files',
    description: '当前上传文件默认列表（将弃用，需要绑定文件列表请使用v-model）',
    type: 'Array',
    value: '—',
    default: '[]'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'on-done',
    description: '所有文件上传完毕后的事件',
    parameter: 'fileList'
  },
  {
    name: 'on-progress',
    description: '文件上传进行时的事件',
    parameter: 'e, file, fileList'
  },
  {
    name: 'on-success',
    description: '文件上传成功后的事件',
    parameter: 'file, fileList'
  },
  {
    name: 'on-error',
    description: '文件上传失败后的事件',
    parameter: 'file, fileList'
  },
  {
    name: 'on-exceed',
    description: '文件上传个数超出限制后的事件',
    parameter: 'file, fileList'
  },
  {
    name: 'on-delete',
    description: '文件上传成功后，点击删除文件触发的事件',
    parameter: 'file（删除的哪个文件对象）,fileList（删除后的文件列表）'
  },
];

export const slots: DocumentSlot[] = [
  { name: 'custom-area', description: '上传组件自定义内容' },
  { name: 'custom-operation', description: '自定义上传组件自定义操作插槽，可接收文件数据fileData，可用于设置预览' }
];

export const document: BkDocument = { attributes, events, slots };

export default document;
