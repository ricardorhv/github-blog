import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface PostType {
  title: string;
  username: string;
  createdAt: string;
  comments: number;
  url: string;
  description: string;
}

interface Issues {
  title: string;
  user: {
    login: string;
  };
  created_at: string
  comments: number;
  html_url: string;
  body: string;
}

interface PostContextType {
  posts: PostType[];
}

export const PostContext = createContext({} as PostContextType)

interface PostContextProviderProps {
  children: ReactNode;
}

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<PostType[]>([])

  async function fetchPosts() {
    const response = await axios.get('https://api.github.com/repos/ricardorhv/github-blog/issues')
    const issues: Issues[] = response.data

    issues.map(({
      title, 
      user: { login: username }, 
      created_at: createdAt, 
      comments, 
      html_url: url,
      body: description,
    }) => {
      setPosts(state => [...state, {
        title,
        username,
        createdAt,
        comments,
        url,
        description
      }])
    })
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  
  return (
    <PostContext.Provider
      value={{
        posts,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}