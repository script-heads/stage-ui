/// <reference types="vite-plugin-svgr/client" />

import monacoType from 'monaco-editor/monaco.d.ts'

declare module '*?raw' {
  const content: string
  export default content
}

declare const monaco: monacoType
