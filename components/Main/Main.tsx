import * as React from 'react'
import Picture from '../Picture'
import avatarUrl from './avatar_squared.jpg'
import styles from './Main.css'

const Main: React.SFC<ReactCommonProps & {}> = ({ className, ...rest }) => (
  <main className={`${className || ''} ${styles.main}`} {...rest}>
    <Picture
      src={avatarUrl}
      className={styles.avatar}
      alt="Avatar of Mikhail Bashurov"
    />
    <div className={styles.introduction}>
      Hi I’m <span className={styles.name}>Mikhail Bashurov</span>, fullstack
      developer with React and Dotnet core or Node.js
    </div>
  </main>
)

export default Main
