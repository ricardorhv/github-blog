import { ReactNode, createContext, useState } from "react";
import { api } from "../lib/axios";

export interface PostType {
  id: number;
  title: string;
  username: string;
  createdAt: string;
  comments: number;
  url: string;
  description: string;
}

export interface Issues {
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

interface PostFiltered {
  data: {
    items: Issues[];
  }
}

interface SearchPostContextProps {
  children: ReactNode
}

interface SearchPostContextType {
  postsFiltered: PostType[];
  searchForPostName: (query: string) => Promise<void>;
  resetPostsFiltered: () => void;
}

export const SearchPostContext = createContext({} as SearchPostContextType)

export function SearchPostContextProvider({ children }: SearchPostContextProps) {
  const [postsFiltered, setPostsFiltered] = useState<PostType[]>([])
  
  function resetPostsFiltered() {
    setPostsFiltered([])
  }

  async function searchForPostName(query: string) {
    const posts: PostFiltered = await api.get('search/issues', {
      params: {
        q: query,
      },
    })
    posts.data.items.map(post => {
      setPostsFiltered(state => [...state, {
        title: post.title,
        comments: post.comments,
        createdAt: post.created_at,
        username: post.user.login,
        description: post.body,
        url: post.html_url,
        id: post.number
      }])
    })
  }

  return (
    <SearchPostContext.Provider
      value={{
        postsFiltered, 
        searchForPostName,
        resetPostsFiltered
      }}
    >
      {children}
    </SearchPostContext.Provider>
  )
}