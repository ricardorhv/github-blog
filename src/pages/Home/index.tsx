import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { PostsSection, SearchSection } from "./styles";

export function Home() {
  return (
    <div>
      <Header/>
      <SearchSection>
        <div>
          <h5>Publicações</h5>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo"/>
      </SearchSection>
      <PostsSection>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsSection>
    </div>
  )
}