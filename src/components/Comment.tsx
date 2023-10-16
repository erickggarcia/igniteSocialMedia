/* eslint-disable react/prop-types */
import styles from './Comment.module.css'
import { Trash } from '@phosphor-icons/react'
import { ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommenProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export const Comment = ({ content, onDeleteComment }: CommenProps) => {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="https://www.github.com/erickggarcia.png" alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erick Garcia</strong>
                            <time
                                title='26 de Setembro às 08:13'
                                dateTime='2023-09-26 08:13:00'
                            >
                                Cerca de 12 horas atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}