import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/axios";

import { PostContent } from "./styles";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Header } from "./components/Header";
import { PostType } from "../../context/SearchPostContext";

export function Post() {
  const [post, setPost] = useState<PostType>({} as PostType)
  const { id } = useParams()
  
  async function fetchPost() {
    const response = await api.get(`repos/ricardorhv/github-blog/issues/${id}`)
    const issue = response.data

    setPost({
      title: issue.title,
      comments: issue.comments,
      createdAt: issue.created_at,
      username: issue.user.login,
      description: issue.body,
      url: issue.html_url,
      id: issue.number
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])
  
  return (
    <div>
      <Header
        title={post.title}
        createdAt={post.createdAt}
        comments={post.comments}
        username={post.username}
        url={post.url}
      />
      <PostContent>
        <ReactMarkdown children={post.description} />
      </PostContent>
    </div>
  )
}