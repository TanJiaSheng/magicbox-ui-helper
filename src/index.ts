export enum ExtensionLanguage {
  cn = 'zh-CN',
  en = 'en-US'
}

export interface ExtensionConfigutation {
  language: ExtensionLanguage,
  link: string
}
