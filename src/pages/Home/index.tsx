import { useEffect, useState } from "react";

import { api } from "../../lib/axios";

import { PostsSection, SearchSection } from "./styles";
import { Header } from "./components/Header";
import { PostCard } from "./components/PostCard";

interface Post {
  id: number;
  title: string;
  username: string;
  createdAt: string;
  comments: number;
  url: string;
  description: string;
}

interface Issues {
  number: number;
  title: string;
  user: {
    login: string;
  };
  created_at: string
  comments: number;
  html_url: string;
  body: string;
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const quantityOfPosts = posts.length

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
        <input type="text" placeholder="Buscar conteúdo"/>
      </SearchSection>
      <PostsSection>
        {
          posts.map(post => (
            <PostCard 
              id={post.id}
              title={post.title}
              createdAt={post.createdAt}
              description={post.description}
              key={post.id}
            />
          ))
        }
      </PostsSection>
    </div>
  )
}