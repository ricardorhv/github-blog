import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft, faComment, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatDay } from "../../../../utils/formatter";

import { HeaderContainer, HeaderInfo } from "./styles";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  title: string;
  comments: number;
  createdAt: string;
  url: string;
  username: string;
}

export function Header({ title, comments, createdAt, url, username }: HeaderProps) {
  const postDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })
  const commentsText = comments > 1 ? 'comentários' : 'comentário'

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Voltar</span> 
        </NavLink>

        <NavLink to={url} target="_blank">
          <span>Ver no Github</span> 
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </NavLink>
      </div>
      <h3>{title}</h3>
      <HeaderInfo>
        <div>
          <FontAwesomeIcon icon={faGithub}/>
          <span>{username}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faCalendarDay}/>
          <span>{formatDay(postDate)}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment}/>
          <span>
            {comments} {commentsText}
          </span>
        </div>
      </HeaderInfo>
    </HeaderContainer>
  )
}