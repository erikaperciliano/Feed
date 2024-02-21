import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Erika Perciliano" 
            content="Aliquip laboris dolor magna laborum dolore consequat labore amet sit esse minim officia nulla duis. Minim ea non cillum adipisicing dolore elit aute mollit Lorem commodo id tempor fugiat. Consequat ex mollit cillum ipsum commodo nulla laboris. Proident pariatur irure laboris velit cillum aliquip id. Amet voluptate est anim sunt pariatur in. Proident non aliquip nostrud ipsum aliqua consequat aliquip labore do laboris amet aliquip."
          />
          <Post 
            author="Raquel Ferreira" 
            content="Aliquip laboris dolor magna laborum dolore consequat labore amet sit esse minim officia nulla duis. Minim ea non cillum adipisicing dolore elit aute mollit Lorem commodo id tempor fugiat. Consequat ex mollit cillum ipsum commodo nulla laboris. Proident pariatur irure laboris velit cillum aliquip id. Amet voluptate est anim sunt pariatur in. Proident non aliquip nostrud ipsum aliqua consequat aliquip labore do laboris amet aliquip."
          />
        </main>
      </div>
    </div>
  )
}

export default App
