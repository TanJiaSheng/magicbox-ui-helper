import { ExtensionContext } from 'vscode';
import * as vscode from 'vscode';

import { ElementHoverProvier } from './hover-tips/element-hover-provider';
import { ElementCompletionItemProvider } from './completion/element-completion-item-povider';

export function activate(context: ExtensionContext): void {
	console.log('extension "magicbox-ui-helper" is now active! 已激活');

	// 注册 completion 提示
	// [
	// 	{
	// 		language: 'vue',
	// 		scheme: 'file'
	// 	}
	// ]
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider('vue',
			new ElementCompletionItemProvider(),
			'',
			' ',
			':',
			'<',
			'"',
			"'",
			'/',
			'@',
			'(',
			'-'
		)
	);
	// 注册 hover 提示
	context.subscriptions.push(
		vscode.languages.registerHoverProvider('vue',
			new ElementHoverProvier()
		)
	);
   
}

// this method is called when your extension is deactivated
export function deactivate() { }

export default {
	activate,
	deactivate
};
