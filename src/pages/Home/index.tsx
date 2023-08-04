import { useContext } from "react";
import { Header } from "./components/Header";
import { PostCard } from "./components/PostCard";
import { PostsSection, SearchSection } from "./styles";
import { PostContext } from "../../context/PostContext";

export function Home() {
  const { posts } = useContext(PostContext)
  const quantityOfPosts = posts.length

  return (
    <div>
      <Header/>
      <SearchSection>
        <div>
          <h5>Publicações</h5>
          <span>{quantityOfPosts} publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo"/>
      </SearchSection>
      <PostsSection>
        {
          posts.map(post => (
            <PostCard 
              title={post.title}
              createdAt={post.createdAt}
              description={post.description}
              key={post.title}
            />
          ))
        }
      </PostsSection>
    </div>
  )
}