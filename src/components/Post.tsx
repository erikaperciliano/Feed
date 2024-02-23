import React from 'react'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src='https://avatars.githubusercontent.com/u/48223561?v=4' hasBorder/>
                <div className={styles.authorInfo}>
                    <strong>Erika Perciliano</strong>
                    <span>Software Developer</span>
                </div>
            </div>

            <time title='May 11th at 8:13am' dateTime='2022-05-11 08:13:30'>Published 1h ago</time>
        </header>

        <div className={styles.content}>
           <p>Hey guys 👋</p> 
           <p>I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare 🚀</p>
           <p>👉 <a href=''>jane.design/doctorcare</a></p>
           <p>
                <a href=''>#newproject</a> {''}
                <a href=''>#nlw</a> {''}
                <a href=''>#rocketseat</a> {''} 
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Leave your feedback</strong>
            <textarea placeholder="leave a comment"/>

            <footer>
                <button type='submit'>Comment</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </article>
  )
}
