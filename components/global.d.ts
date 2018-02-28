type ReactCommonProps = {
  className?: string
  style?: React.CSSProperties
}

declare module '*.css' {
  const content: { [key: string]: string }
  export default content
}

declare module '*.svg' {
  const svg: React.SFC<ReactCommonProps & {}>
  export default svg
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}
