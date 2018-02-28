import NextJsLink, { LinkState } from 'next/link'
import * as React from 'react'

const assetPrefix = process.env.ASSET_PREFIX

const urlToCurrentSite = (url: string) =>
  url.startsWith('/') ||
  !(url.startsWith('http') || url.startsWith('mailto') || url.startsWith('tel'))

const Link: React.SFC<LinkState> = ({ href, ...rest }) => (
  <NextJsLink
    href={href}
    as={`${
      urlToCurrentSite((href || '').toString()) ? assetPrefix : ''
    }${href}`}
    {...rest}
  />
)

export default Link
