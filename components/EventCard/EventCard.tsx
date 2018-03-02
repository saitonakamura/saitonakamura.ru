import * as React from 'react'
import Link from '../Link'
import { LifeEvent } from '../Main/events'
import styles from './EventCard.css'

const EventCard: React.SFC<
  ReactCommonProps & LifeEvent & { header: string; content: React.ReactNode }
> = ({ className, header, content, url, ...rest }) => (
  <article className={`${className || ''} ${styles.card}`} {...rest}>
    {/* tslint:disable-next-line:jsx-self-close */}
    <aside className={styles.aside}> </aside>
    <div className={styles.content}>
      <h2 className={styles.header}>
        {url ? (
          <Link href={url}>
            <a>{header}</a>
          </Link>
        ) : (
          header
        )}
      </h2>
      <div className={styles.description}>{content}</div>
    </div>
  </article>
)

export default EventCard
