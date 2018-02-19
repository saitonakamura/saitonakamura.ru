import * as React from 'react'
import Link from '../Link'

const Header: React.SFC<{}> = props => (
  <nav {...props}>
    <Link href="/">
      <a>Home</a>
    </Link>
    |
    <Link href="/talks">
      <a>Talks</a>
    </Link>
    |
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    |
    <Link href="/projects">
      <a>Projects</a>
    </Link>
  </nav>
)

export default Header
