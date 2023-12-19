import { Post } from './Post'

export function App() {
  return (
    <>
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
