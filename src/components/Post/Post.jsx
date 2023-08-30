
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img
          className={styles.avatar}
          src='https://avatars.githubusercontent.com/u/121953624?v=4' 
        />
        <div className={styles.authorInfo}>
          <strong>Bruno Carvalho</strong>
          <span>Frontend Developer</span>
        </div>
      </div>
      <time
        title='11 de maio às 13:00'
        dateTime='2022-05-08 00:13:00'
      >
        Publicado há 1h atrás
      </time>
    </header>

    <div className={styles.content}>
      <p>
        Post content
      </p>
      <p>
        Second Line content 🙌🙌🙌🙌
      </p>
      <p>
        <a href="#">#developer</a>
      </p>
    </div>
  </article>
  )
}