import { DocumentSlot, DocumentEvent, BkDocument, DocumentAttribute } from '../index';

export const attributes: DocumentAttribute[] = [
	{
		name: 'v-model',
		description: '默认值',
		type: '	Array/number',
		value: '—',
		default: '—',
	},
	{
		name: 'year',
		description: '默认显示年份,支持 .sync 修饰符',
		type: 'Number',
		value: '—',
		default: 'new Date()',
	},
	{
		name: 'range',
		description: '自定义月份范围',
		type: 'Array',
		value: '1 ~ 12',
		default: '[1, 12]',
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
		name: 'month-click',
		description: '选择月份回调函数',
		parameter: 'day, date'
	},
	{
		name: 'day-click',
		description: '日期点击回调',
		parameter: '目前选中当前值'
	},
	{
		name: 'change-filter',
		description: '修改筛选条件',
		parameter: 'Date'
	}
];

export const slots: DocumentSlot[] = [
	{
		name: 'header',
		description: '头部',
	}
];

export const document: BkDocument = { attributes, events, slots };

export default document;
