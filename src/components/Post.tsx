import React from 'react'

import { format, formatDistanceToNow } from 'date-fns'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import { enUS } from 'date-fns/locale'


type PostAuthorProps = {
    author: {
        avatarUrl: string,
        name: string
        role: string
    },
    content: {
        type: string,
        content: string
    }[],
    publishedAt: Date;
    
}

export function Post({ author, content, publishedAt }: PostAuthorProps) {
    const publishedDateFormatted = format(publishedAt, " LLLL d 'at' HH:mm'h'", {
        locale: enUS
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUS,
        addSuffix: true
    })

    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src='https://avatars.githubusercontent.com/u/48223561?v=4' hasBorder/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>

        <div className={styles.content}>
           {content.map((line, index) => {
                if (line.type === 'paragraph') {
                    return <p key={index}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p><a key={index} href="#">{line.content}</a></p>
                }
            })}
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
