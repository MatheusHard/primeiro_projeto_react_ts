import '../global.css'
import styles from '../app/App.module.css'
import { Post } from './pages/post/Post'
import { Header } from '../components/hearder/Header';
import { SideBar } from '../components/sidebar/SideBar';

const listaPosts = [

  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/MatheusHard.png',
      name: 'MAtheus Athayde',
      role: 'Severino Full Milkshake'
    },
    contents:[
      { id: 1, type: 'paragraph', content:'Fala Poivo' },
      { id: 2, type: 'paragraph', content:'Voces estoudam, ou não Poivo' },
      { id: 3, type: 'link', content:'matheus@notech.com.br' },
    ],
    publishedAt: new Date('2024-06-17 08:00:31')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Cabelo agua de Salsicha',
      role: 'Severino Full Milkshake'
    },
    contents:[
      { id: 1,  type: 'paragraph', content:'Fala Poivo' },
      { id: 2, type: 'paragraph', content:'Voces estoudam, ou não Poivo' },
      { id: 3, type: 'link', content:'diego3@notech.com.br' },
    ],
    publishedAt: new Date('2024-06-17 14:10:31')
  }
];

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {
          listaPosts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author} 
                publishedAt={post.publishedAt}
                contents={post.contents}/>
            )
          })}
          
        </main>
      </div>
     
    </div>
  )
}

