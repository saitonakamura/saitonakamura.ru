import * as React from 'react'
import Link from '../Link'
import GithubSvg from './github.svg'
import styles from './Header.css'
import HomeSvg from './home.svg'
import MailSvg from './mail.svg'
import TwitterSvg from './twitter.svg'
// import FacebookSvg from './facebook.svg'

const Header: React.SFC<ReactCommonProps & {}> = ({ className, ...rest }) => (
  <header className={`${className || ''} ${styles.header}`} {...rest}>
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}>
          <HomeSvg className={styles.icon} />
        </a>
      </Link>
      <Link href="/talks">
        <a className={styles.link}>Talks</a>
      </Link>
      <Link href="/blog">
        <a className={styles.link}>Blog</a>
      </Link>
      <Link href="https://twitter.com/saitonakamura">
        <a className={styles.link}>
          <TwitterSvg className={styles.icon} />
        </a>
      </Link>
      <Link href="https://github.com/saitonakamura">
        <a className={styles.link}>
          <GithubSvg className={styles.icon} />
        </a>
      </Link>
      <Link href="mailto:michael.bashurov@gmail.com">
        <a className={styles.link}>
          <MailSvg className={styles.icon} />
        </a>
      </Link>
    </nav>
  </header>
)

export default Header
