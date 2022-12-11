import { BkDocument } from '../index';
import { DocumentAttribute } from '../index';
import { DocumentMethod } from '../index';
import { DocumentEvent } from '../index';
import { DocumentSlot } from '../index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'data',
    description: '显示的数据',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'height',
    description: 'Table 的高度，默认为自动高度。如果 height 为 Number 类型，单位 px；如果 height 为 String 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'max-height',
    description: 'Table 的最大高度。合法的值为数字。',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'stripe',
    description: '是否为斑马纹 table',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'border',
    description: '是否带有边框',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'outer-border',
    description: '是否带有外边框',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'row-border',
    description: '是否带有横向边框, 当 border 为 true 时，此属性设置无效',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'col-border',
    description: '是否带有纵向边框, 当 border 为 true 时，此属性设置无效',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Table 的尺寸, 用于控制表格显示文本的最大行数',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'fit',
    description: '列的宽度是否自撑开',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'show-header',
    description: '是否显示表头',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'highlight-current-row',
    description: '是否要高亮当前行',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'row-class-name',
    description: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
    type: 'Function({row, rowIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'row-style',
    description: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
    type: 'Function({row, rowIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'cell-class-name',
    description: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
    type: 'Function({row, column, rowIndex, columnIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'cell-style',
    description: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
    type: 'Function({row, column, rowIndex, columnIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'header-row-class-name',
    description: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
    type: 'Function({row, rowIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'header-row-style',
    description: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
    type: 'Function({row, rowIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'header-cell-class-name',
    description: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
    type: 'Function({row, column, rowIndex, columnIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'header-cell-style',
    description: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
    type: 'Function({row, column, rowIndex, columnIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'header-cell-attributes',
    description: '表头单元格的 DOM 原生属性。',
    type: 'Function({row, column, rowIndex, columnIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'row-key',
    description:
      '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。',
    type: 'Function(row)/String',
    value: '—',
    default: '—'
  },
  {
    name: 'empty-text',
    description: '空数据时显示的文本内容，也可以通过 `slot="empty"` 设置',
    type: 'String',
    value: '—',
    default: '暂无数据'
  },
  {
    name: 'default-expand-all',
    description: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'expand-row-keys',
    description: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
    type: 'Array',
    value: '—',
    default: ''
  },
  {
    name: 'default-sort',
    description: '默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序',
    type: 'Object',
    value: '`order`: ascending, descending',
    default: '如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending'
  },
  {
    name: 'tooltip-effect',
    description: 'tooltip `effect` 属性',
    type: 'String',
    value: 'dark/light',
    default: ''
  },
  {
    name: 'show-summary',
    description: '是否在表尾显示合计行',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'sum-text',
    description: '合计行第一列的文本',
    type: 'String',
    value: '—',
    default: '合计'
  },
  {
    name: 'summary-method',
    description: '自定义的合计计算方法',
    type: 'Function({ columns, data })',
    value: '—',
    default: '—'
  },
  {
    name: 'span-method',
    description: '合并行或列的计算方法',
    type: 'Function({ row, column, rowIndex, columnIndex })',
    value: '—',
    default: '—'
  },
  {
    name: 'select-on-indeterminate',
    description: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
    type: 'Boolean',
    value: 'true / false',
    default: 'true'
  },
  {
    name: 'pagination',
    description: 'Table 的分页。current 属性表示当前页码,count 属性表示数据总量，详细配置可见 Pagination 分页组件',
    type: 'Object',
    value: '—',
    default: '-'
  },
  {
    name: 'auto-scroll-to-top',
    description: 'Table 分页变化时，表格是否自动滚动到顶部',
    type: 'Boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'scroll-loading',
    description: '表格底部loading加载效果，可以配合表格scroll-end事件使用，isLoading属性控制底部加载显隐。其余属性可参考spin组件',
    type: 'Object',
    value: '—',
    default: `{ isLoading: false, size: 'mini', theme: 'info', icon: 'circle-2-1', placement: 'right' }`
  },
  {
    name: 'ext-cls',
    description: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM .bk-table 上。',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'virtual-render',
    description: '	内置的虚拟滚动配置。',
    type: 'Boolean/Object',
    value: '—',
    default: 'false'
  },
  {
    name: 'affix-option',
    description: '表头置顶图钉设置。',
    type: 'Object',
    value: `{ active: true(是否激活), offsetTop: 0(和顶部距离), target: 'window'(定位的元素DOM) }`,
    default: "false"
  }
];

export const virtualRender: DocumentAttribute[] = [
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    value: 'true / false',
    default: '—'
  },
  {
    name: 'height',
    description: '虚拟滚动区域高度，如果 height 为 Number 类型，单位 px；如果 height 为 String 类型，则这个高度会设置为 style.height 的值',
    type: 'String / Number',
    value: '-',
    default: 'table.body.height'
  },
  {
    name: 'width',
    description: '虚拟滚动区域宽度，如果 width 为 Number 类型，单位 px；如果 width 为 String 类型，则这个高度会设置为 style.width 的值',
    type: 'String / Number',
    value: '-',
    default: 'table.body.width'
  },
  {
    name: 'lineHeight',
    description: '虚拟滚动区域每行高度，如果 lineHeight 为 Number 类型，单位 px；如果 lineHeight 为 String 类型，则这个高度会设置为 style.height 的值',
    type: 'String / Number',
    value: '-',
    default: 'table.body.row.height'
  },
];

export const methods: DocumentMethod[] = [
  {
    name: 'clearSelection',
    description: '用于多选表格，清空用户的选择',
    parameter: '—'
  },
  {
    name: 'toggleRowSelection',
    description: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
    parameter: 'row, selected'
  },
  {
    name: 'toggleAllSelection',
    description: '用于多选表格，切换所有行的选中状态',
    parameter: '-'
  },
  {
    name: 'toggleRowExpansion',
    description: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
    parameter: 'row, expanded'
  },
  {
    name: 'setCurrentRow',
    description: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
    parameter: 'row'
  },
  {
    name: 'clearSort',
    description: '用于清空排序条件，数据会恢复成未排序的状态',
    parameter: '—'
  },
  {
    name: 'clearFilter',
    description: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件',
    parameter: 'columnKey'
  },
  {
    name: 'doLayout',
    description: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法',
    parameter: '—'
  },
  {
    name: 'sort',
    description: '手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。',
    parameter: 'prop: string, order: string'
  }
];

export const events: DocumentEvent[] = [
  {
    name: 'select',
    description: '当用户手动勾选数据行的 Checkbox 时触发的事件',
    parameter: 'selection, row'
  },
  {
    name: 'select-all',
    description: '当用户手动勾选全选 Checkbox 时触发的事件',
    parameter: 'selection'
  },
  {
    name: 'selection-change',
    description: '当选择项发生变化时会触发该事件',
    parameter: 'selection'
  },
  {
    name: 'cell-mouse-enter',
    description: '当单元格 hover 进入时会触发该事件',
    parameter: 'row, column, cell, event'
  },
  {
    name: 'cell-mouse-leave',
    description: '当单元格 hover 退出时会触发该事件',
    parameter: 'row, column, cell, event'
  },
  {
    name: 'cell-click',
    description: '当某个单元格被点击时会触发该事件',
    parameter: 'row, column, cell, event, rowIndex, columnIndex'
  },
  {
    name: 'cell-dblclick',
    description: '当某个单元格被双击击时会触发该事件',
    parameter: 'row, column, cell, event, rowIndex, columnIndex'
  },
  {
    name: 'cell-contextmenu',
    description: '当某个单元格被鼠标右键点击时会触发该事件',
    parameter: 'row, column, cell, event, rowIndex, columnIndex'
  },
  {
    name: 'row-click',
    description: '当某一行被点击时会触发该事件',
    parameter: 'rrow, event, column, rowIndex, columnIndex'
  },
  {
    name: 'row-contextmenu',
    description: '当某一行被鼠标右键点击时会触发该事件',
    parameter: 'rrow, event, column, rowIndex, columnIndex'
  },
  {
    name: 'row-dblclick',
    description: '当某一行被双击时会触发该事件',
    parameter: 'rrow, event, column, rowIndex, columnIndex'
  },
  {
    name: 'header-click',
    description: '当某一列的表头被点击时会触发该事件',
    parameter: 'column, event'
  },
  {
    name: 'header-contextmenu',
    description: '当某一列的表头被鼠标右键点击时触发该事件',
    parameter: 'column, event'
  },
  {
    name: 'sort-change',
    description: '当表格的排序条件发生变化的时候会触发该事件',
    parameter: '{ column, prop, order }'
  },
  {
    name: 'filter-change',
    description: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
    parameter: 'filters'
  },
  {
    name: 'current-change',
    description: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
    parameter: 'currentRow, oldCurrentRow'
  },
  {
    name: 'header-dragend',
    description: '当拖动表头改变了列的宽度的时候会触发该事件',
    parameter: 'newWidth, oldWidth, column, event'
  },
  {
    name: 'expand-change',
    description: '当用户对某一行展开或者关闭的时候会触发该事件',
    parameter: 'row, expandedRows'
  },
  {
    name: 'page-change',
    description: '当用户切换表格分页时会触发的事件',
    parameter: 'newPage'
  },
  {
    name: 'page-limit-change',
    description: '当用户切换表格每页显示条数时会出发的事件',
    parameter: 'limit'
  },
  {
    name: 'scroll-end',
    description: '当表格滚动到底部时触发该事件',
    parameter: ''
  }
];

export const slots: DocumentSlot[] = [
  {
    name: 'prepend',
    description: '插入至表格第一行之前的内容'
  },
  {
    name: 'append',
    description: '插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。'
  },
  {
    name: 'empty',
    description: '暂无数据插槽'
  },
];

export const document: BkDocument = { attributes, virtualRender, methods, events, slots };

export default document;
