import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostType } from "../../context/PostContext";
import { Header } from "./components/Header";
import { PostContent } from "./styles";

export function Post({ 
  title,
  comments,
  createdAt,
  username,
  description, 
  url
 }: PostType) {
  return (
    <div>
      <Header
        title={title}
        createdAt={createdAt}
        comments={comments}
        username={username}
        url={url}
      />
      <PostContent>
        <ReactMarkdown children={description} />
      </PostContent>
    </div>
  )
}