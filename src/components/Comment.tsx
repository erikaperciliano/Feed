import React, { useState } from 'react'

import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'


interface CommentProps {
    content: string;
    onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount(likeCount + 1)
    }

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
                    
                    <button 
                        title='Delete comment'
                        onClick={handleDeleteComment}
                    >
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Applaud <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
