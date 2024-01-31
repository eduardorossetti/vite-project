import { Post } from "./components/Post"
import { Header } from "./components/Header"
import './styles.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/eduardorossetti.png",
      name: "Eduardo Rossetti",
      role: "Web Developer Jr"
    },
    content: [
      { type: 'paragraph', content: `Fala pessoal 👋` },
      { type: 'paragraph', content: `Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻` },
      { type: 'link', content: `devonlane.design` },
    ],
    publishAt: new Date('2023-12-10 20:00:09')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CEO Rocketseat"
    },
    content: [
      { type: 'paragraph', content: `Fala pessoal 👋` },
      { type: 'paragraph', content: `Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻` },
      { type: 'link', content: `<a href='#'>devonlane.design</a>` },
      { type: 'link', content: `<a href='#'>#uiux</a> {' '}` },      
    ],
    publishAt: new Date('2023-12-10 20:00:09')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}