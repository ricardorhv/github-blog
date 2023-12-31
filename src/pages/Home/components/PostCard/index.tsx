import { formatDistanceToNow } from "date-fns";
import { PostCardContainer } from "./styles";
import { ptBR } from "date-fns/locale";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { formatDay } from "../../../../utils/formatter";
import { memo } from "react";

interface PostCardProps {
  id: number;
  title: string,
  createdAt: string,
  description: string,
}

function PostCardComponent({
  id,
  createdAt,
  description,
  title
}: PostCardProps) {
  const postDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer href={`/posts/${id}`}>
      <div>
        <h4>{title}</h4>
        <span>
          {formatDay(postDate)}
        </span>
      </div>
      <ReactMarkdown children={description}/>
    </PostCardContainer>
  )
}

export const PostCard = memo(PostCardComponent)