import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Marcus Vinícius"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius nemo beatae enim tempora odio ex eligendi, magni quas officiis iusto commodi aperiam, nulla ea exercitationem sit repudiandae totam corrupti?"
          />

          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </>
  )
}
