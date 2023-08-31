import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBR
  });

  const pusblishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleSubmit = () => {
    event.preventDefault();

    setComments([...comments, currentComment]);
    setCurrentComment('');
  };

  const deleteComment = (comment) => {
    const commentsWithoutDeleted = comments.filter(item => item !== comment);

    setComments(commentsWithoutDeleted);
  };

  const handleNewInvalidComment = () => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  return (
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatar} hasBorder />
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>
      <time
        title={publishedDateFormatted}
        dateTime={publishedAt.toISOString()}
      >
        {pusblishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
      {
        content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={index}><a href="#">{line.content}</a></p>
          }
        })
      }
    </div>

    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <strong>Deixe seu feedback</strong>
      <textarea 
        placeholder='Deixe um comentário'
        name='comment'
        onChange={event => {
          event.target.setCustomValidity('');
          setCurrentComment(event.target.value)
        }}
        value={currentComment}
        required
        onInvalid={handleNewInvalidComment}
      />
      <footer>
        <button 
          type="submit"
          disabled={currentComment.length === 0}
        >
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {
        comments.map((comment, index) => 
          <Comment key={index} content={comment} onDelete={deleteComment} />
        )
      }
    </div>
  </article>
  )
}