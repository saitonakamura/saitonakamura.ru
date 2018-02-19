type ReactCommonComponent = {
  className?: string
  style?: React.CSSProperties
}

declare module '*.css' {
  const content: { [key: string]: string }
  export default content
}
