import * as React from 'react'
import EventCard from '../EventCard'
import Picture from '../Picture'
import avatarUrl from './avatar_squared.jpg'
import events from './events'
import styles from './Main.css'

const Main: React.SFC<ReactCommonProps & {}> = ({ className, ...rest }) => (
  <main className={`${className || ''} ${styles.main}`} {...rest}>
    <div className={styles.header}>
      <Picture
        src={avatarUrl}
        className={styles.avatar}
        alt="Avatar of Mikhail Bashurov"
      />
      <h1 className={styles.introduction}>
        Hi I’m <span className={styles.name}>Mikhail Bashurov</span>, fullstack
        developer with React and Dotnet core or Node.js
      </h1>
    </div>
    <div className={styles.events}>
      {events.map(event => (
        <EventCard key={event.header} className={styles.event} {...event} />
      ))}
    </div>
  </main>
)

export default Main
