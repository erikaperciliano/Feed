import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/48223561?v=4',
      name: 'Erika Perciliano',
      role: 'Software Engineer', 
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' }, 
      { type: 'paragraph', content:'I just uploaded another project to my portfolio. Its a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
     ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'John Doe',
      role: 'Software Engineer', 
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' }, 
      { type: 'paragraph', content:'I just uploaded another project to my portfolio. Its a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
     ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return(
                <Post 
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
