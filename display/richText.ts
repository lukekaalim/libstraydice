export type RichTextNode =
  | { type: 'keyword', keyword: string }
  | { type: 'text', text: string }
  | { type: 'nodes', nodes: RichTextNode[] }