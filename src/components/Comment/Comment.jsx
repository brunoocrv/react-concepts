import { useState } from 'react'
import { ThumbsUp, TrashSimple } from 'phosphor-react'

import styles from './Comment.module.css'

import { Avatar } from '../Avatar/Avatar'

export function Comment({ content, onDelete }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/brunoocrv.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.contentAuthor}>
              <strong>User teste</strong>
              <time
                title='11 de maio às 08:13'
                dateTime='2022-05-11 08:13:30'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <TrashSimple size={24} onClick={() => onDelete(content)} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setLikes(likes + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}