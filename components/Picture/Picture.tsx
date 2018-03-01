import * as React from 'react'
import { assetPrefix, urlToCurrentSite } from '../Link/Link'

const Picture: React.SFC<ReactCommonProps & { src: string; alt: string }> = ({
  src,
  alt,
  className,
  style,
  ...rest
}) => (
  <picture {...rest}>
    <img
      src={`${urlToCurrentSite(src) ? assetPrefix : ''}${src}`}
      alt={alt}
      className={className}
      style={style}
    />
  </picture>
)

export default Picture
