export type LifeEventType = 'talk' | 'blogpost'

export type LifeEvent = {
  type: LifeEventType
  header: string
  url?: string
  content: React.ReactNode
}

const events: LifeEvent[] = [
  {
    content: `Been playing with Next.js and GitHub pages, caught a few gotchas, so here's the blog post`,
    header: `Next.js app on Github Pages`,
    type: 'blogpost',
    url: `https://itnext.io/next-js-app-on-github-pages-768020f2b65e`,
  },
  {
    content: `Overview and comparison of node package managers: speed, CLI, lockfiles and determinism. (Russian)`,
    header: `Yarn, npm v5 and pnpm — who's better?`,
    type: 'talk',
  },
  {
    content: `Talk about event loop realization in browsers and node. Gotchas, specifications and documentation tour. (Russian)`,
    header: `Ivan Tooloop: asynchronicity in JS under the hood`,
    type: 'talk',
  },
  {
    content: `Talk about some interesting things, tricks  gotchas and so on in EF. (Russian)`,
    header: `Entity Framework: tips, tricks and gotchas`,
    type: 'talk',
  },
]

export default events
