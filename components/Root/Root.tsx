import * as React from 'react'
import Header from '../Header'
import styles from './Root.css'

const Root: React.SFC<{} & ReactCommonProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={`${styles.container} ${className || ''}`} {...rest}>
    <div className={styles.content}>
      <Header />
      <main>{children}</main>
    </div>
  </div>
)

export default Root
