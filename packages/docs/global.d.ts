declare module '*?raw' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: React.FC<SVGProps<SVGElement>>
  export { content as ReactComponent }
}
