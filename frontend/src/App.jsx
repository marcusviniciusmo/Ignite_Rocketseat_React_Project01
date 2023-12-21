import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Marcus Vinícius"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius nemo beatae enim tempora odio ex eligendi, magni quas officiis iusto commodi aperiam, nulla ea exercitationem sit repudiandae totam corrupti?"
      />

      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </>
  )
}
