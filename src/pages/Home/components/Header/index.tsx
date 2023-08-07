import { useEffect, useState } from "react";

import { api } from "../../../../lib/axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { HeaderContainer, HeaderInfo, HeaderTitle } from "./styles";

interface UserProps {
  avatar_url: string;
  name: string;
  login: string; 
  bio: string;
  followers: number;
  company?: string;
}

export function Header() {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function fetchUserData() {
    const response = await api.get('users/ricardorhv')
    const { name, avatar_url, bio, company, followers, login } = response.data
    setUser({
      name,
      avatar_url, 
      bio,
      company, 
      followers,  
      login
    })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  
  return (
    <HeaderContainer>
      <img src={user.avatar_url} alt="Profile Image"/>
      <section>
        <HeaderTitle>
          <h3>{user.name}</h3>
          <a href={`https://github.com/${user.login}`} target="_blank">
            Github
            <FontAwesomeIcon icon={faUpRightFromSquare}/>
          </a>
        </HeaderTitle>

        <p>{user.bio}</p>
        <HeaderInfo>
          <div>
            <FontAwesomeIcon icon={faGithub}/>
            <span>{user.login}</span>
          </div>
          {user.company && (<div>
            <FontAwesomeIcon icon={faBuilding}/>
            <span>{user.company}</span>
          </div>)}
          <div>
            <FontAwesomeIcon icon={faUserGroup}/>
            <span>{user.followers} seguidores</span>
          </div>
        </HeaderInfo>
      </section>
    </HeaderContainer>
  )
}