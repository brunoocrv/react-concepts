
import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

const posts = [
  {
    id: 1,
    author: {
      avatar: 'https://github.com/brunoocrv.png',
      name: 'Bruno Carvalho',
      role: 'Developer'
    },
    publishedAt: new Date('2023-08-29 20:00:00'),
    content: [
      {
        type: 'paragraph',
        content: 'Olá pessoal 🙌🙌🙌',
      },
      {
        type: 'paragraph',
        content: 'Post conntent teste testando testado',
      },
      {
        type: 'link',
        content: '#frontend',
      }
    ]
  },
  {
    id: 2,
    author: {
      avatar: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'CTO'
    },
    publishedAt: new Date('2023-08-30 13:30:00'),
    content: [
      {
        type: 'paragraph',
        content: 'Olá pessoal do post 2 🙌🙌🙌',
      },
      {
        type: 'paragraph',
        content: 'Post conntent teste testando testado 222222',
      },
      {
        type: 'link',
        content: '#cto',
      }
    ]
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App
