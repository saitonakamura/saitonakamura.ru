import * as React from 'react'
import Root from './Root'

export const withRoot = (component: React.ComponentType) => () => (
  <Root>{React.createElement(component)}</Root>
)
