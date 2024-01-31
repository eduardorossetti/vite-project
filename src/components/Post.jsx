/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Comments } from './Comments'
import { useState } from 'react'

export function Post({ author, publishAt, content }) {
  const [comments, setComments] = useState(['Muito bom!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOnde = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOnde)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Para publicar um comentário, é preciso que tenha ao menos um caracter!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>
        <main className={styles.content}>
          {content.map(item => {
            if (item.type === 'paragraph') {
              return <p key={item.content}>{item.content}</p>
            } else if (item.type === 'link') {
              return (
                <p key={item.content}>
                  <a href="#">{item.content}</a>
                </p>
              )
            }
          })}
        </main>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe o seu feedback</strong>
          <textarea
            name="comment"
            placeholder="Deixe o seu comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comments key={comment} content={comment} onDeleteComment={deleteComment} />
          })}
        </div>
      </article>
    </>
  )
}
