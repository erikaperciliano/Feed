import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'

function App() {

  return (
    <div>
      <Header/>
      <Post 
        author="Erika Perciliano" 
        content="Aliquip laboris dolor magna laborum dolore consequat labore amet sit esse minim officia nulla duis. Minim ea non cillum adipisicing dolore elit aute mollit Lorem commodo id tempor fugiat. Consequat ex mollit cillum ipsum commodo nulla laboris. Proident pariatur irure laboris velit cillum aliquip id. Amet voluptate est anim sunt pariatur in. Proident non aliquip nostrud ipsum aliqua consequat aliquip labore do laboris amet aliquip."
      />
       <Post 
        author="Raquel Ferreira" 
        content="Aliquip laboris dolor magna laborum dolore consequat labore amet sit esse minim officia nulla duis. Minim ea non cillum adipisicing dolore elit aute mollit Lorem commodo id tempor fugiat. Consequat ex mollit cillum ipsum commodo nulla laboris. Proident pariatur irure laboris velit cillum aliquip id. Amet voluptate est anim sunt pariatur in. Proident non aliquip nostrud ipsum aliqua consequat aliquip labore do laboris amet aliquip."
      />
    </div>
  )
}

export default App
