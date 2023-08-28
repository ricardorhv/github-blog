import { useContext, useEffect, useState } from "react";

import { api } from "../../lib/axios";

import { PostsSection, SearchSection } from "./styles";
import { Header } from "./components/Header";
import { PostCard } from "./components/PostCard";
import { SearchBar } from "./components/SearchBar";
import { Issues, PostType, SearchPostContext } from "../../context/SearchPostContext";

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([])
  const { postsFiltered } = useContext(SearchPostContext)

  const hasUserFilterPost = postsFiltered.length === 0 ? false : true
  const quantityOfPosts = hasUserFilterPost ? postsFiltered.length : posts.length

  async function fetchPosts() {
    const response = await api.get('search/issues?q=repo:ricardorhv/github-blog')
    const issues: Issues[] = response.data.items

    issues.map(issue => {
       setPosts(state => [...state, {
        title: issue.title,
        comments: issue.comments,
        createdAt: issue.created_at,
        username: issue.user.login,
        description: issue.body,
        url: issue.html_url,
        id: issue.number
      }])
    })
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  
  return (
    <div>
      <Header/>
      <SearchSection>
        <div>
          <h5>Publicações</h5>
          <span>{quantityOfPosts} publicações</span>
        </div>
        <SearchBar />
      </SearchSection>
      <PostsSection>
        {
          hasUserFilterPost 
            ? (
              postsFiltered.map(postFiltered => (
                <PostCard 
                  id={postFiltered.id}
                  title={postFiltered.title}
                  createdAt={postFiltered.createdAt}
                  description={postFiltered.description}
                  key={postFiltered.id}
                />
              ))
            )
            : (
              posts.map(post => (
                <PostCard 
                  id={post.id}
                  title={post.title}
                  createdAt={post.createdAt}
                  description={post.description}
                  key={post.id}
                />
              ))
            )
          
        }
      </PostsSection>
    </div>
  )
}