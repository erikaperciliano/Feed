import React from 'react'

import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/48223561?v=4" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.AuthorAndTime}>
                        <strong>Erika Perciliano</strong>
                        <time title='May 11th at 8:13am' dateTime='2022-05-11 08:13:30'>About 1 hour ago</time>
                    </div>
                    
                    <button title='Delete comment'>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>Very good Devon, congratulations!! 👏👏</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Applaud <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
