/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comments({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleCommentDelete() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comments}>
      <Avatar hasBorder={false} src="https://github.com/filipedeschamps.png" />

      <div className={styles.commentsBox}>
        <div className={styles.commentsContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Filipe Deschamps</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
                1h atrás
              </time>
            </div>

            <button onClick={handleCommentDelete} title="Deletar comentário">
              <Trash size={20} />
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
