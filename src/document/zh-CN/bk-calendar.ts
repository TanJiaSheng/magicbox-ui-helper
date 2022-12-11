import { DocumentSlot, DocumentEvent, BkDocument, DocumentAttribute } from '../index';

export const attributes: DocumentAttribute[] = [
	{
		name: 'value/v-model',
		description: '绑定值',
		type: 'Date/string/number',
		value: '—',
		default: '—',
	},
	{
		name: 'range',
		description: '时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。',
		type: 'Array',
		value: '—',
		default: '—',
	},
  {
		name: 'multiple',
		description: '多选',
		type: 'Boolean',
		value: '—',
		default: 'false',
	},
  {
		name: 'hide-header',
		description: '隐藏头部',
		type: 'Boolean',
		value: '—',
		default: 'false',
	},
  {
		name: 'hide-panel',
		description: '隐藏日期选择器',
		type: 'Boolean',
		value: '—',
		default: 'false',
	},
  {
		name: 'is-card',
		description: '卡片形式',
		type: 'Boolean',
		value: '—',
		default: 'false',
	},
	{
		name: 'first-day-of-week',
		description: '周起始日',
		type: 'Number',
		value: '1 到 7',
		default: 1,
	},
  {
		name: 'format',
		description: '时间格式',
		type: 'String',
		value: '—',
		default: 'false',
	},
  {
		name: 'cell-class-name',
		description: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className',
		type: 'Function(cell, date)',
		value: '-',
		default: '-',
	},
];

export const events: DocumentEvent[] = [
  {
    name: 'cell-click',
    description: '选择日期改变,返回当前选择日期',
    parameter: 'date / [date]'
  },
  {
    name: 'change-filter',
    description: '修改筛选条件',
    parameter: 'Date'
  }
];

export const slots: DocumentSlot[] = [
	{
		name: 'dateCell',
		description: '单元格代表的日期',
	},
	{
		name: 'header',
		description: '头部',
	},
];

export const dateCellSopedSlot: DocumentAttribute[] = [
  {
    name: 'date',
    description: '单元格代表的日期',
    type: 'Date',
    value: '-',
    default: '-'
  },
  {
    name: 'date',
    description: '{ type, isSelected, day}，type 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd',
    type: 'Object',
    value: '-',
    default: '-'
  }
];

export const document: BkDocument = { attributes, events, slots, dateCellSopedSlot };

export default document;
