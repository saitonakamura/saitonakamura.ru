import NextJsLink, { LinkState } from 'next/link'
import * as React from 'react'

const assetPrefix = process.env.ASSET_PREFIX

const Link: React.SFC<LinkState> = ({ href, ...rest }) => (
  <NextJsLink href={href} as={`${assetPrefix}${href}`} {...rest} />
)

export default Link
