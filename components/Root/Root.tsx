import * as React from 'react'
import Header from '../Header'
import styles from './Root.css'

const Root: React.SFC<{} & ReactCommonComponent> = ({
  children,
  className,
  ...rest
}) => (
  <div className={`${styles.container} ${className}`} {...rest}>
    <div className={styles.content}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  </div>
)

export default Root
