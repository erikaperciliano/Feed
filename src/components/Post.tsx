import React, { useState } from 'react'

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
    const [comments, setComments] = useState<string[]>(['Very good Devon, congratulations!! 👏👏']);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, " LLLL d 'at' HH:mm'h'", {
        locale: enUS
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUS,
        addSuffix: true
    })


    const handleCreateNewComment = () =>{
        event?.preventDefault();

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentChange = () => {
        event?.target.setCustomValidity('')
        setNewCommentText(event?.target.value)
    }

    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const handleNewCommentInvalid = () => {
        event?.target.setCustomValidity('This field is required!')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
           {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p><a key={line.content} href="#">{line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Leave your feedback</strong>
            <textarea
                onChange={handleNewCommentChange}
                placeholder="leave a comment"
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required
            />

            <footer>
                <button type='submit' disabled={isNewCommentEmpty}>Comment</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment 
                        key={comment } 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )
            })}
        </div>
    </article>
  )
}
