import { HeaderContainer, HeaderInfo, HeaderTitle } from "./styles";
import ProfileImage from '../../../../assets/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <HeaderContainer>
      <img src={ProfileImage} alt="Profile Image"/>
      <section>
        <HeaderTitle>
          <h3>Ricardo</h3>
          <a href="https://github.com/ricardorhv" target="_blank">
            Github
            <FontAwesomeIcon icon={faUpRightFromSquare}/>
          </a>
        </HeaderTitle>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure distinctio possimus officiis vero animi, nam laudantium totam ratione sint nemo, voluptatum quis adipisci sunt, itaque blanditiis expedita beatae nostrum.
        </p>
        <HeaderInfo>
          <div>
            <FontAwesomeIcon icon={faGithub}/>
            <span>ricardorhv</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding}/>
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup}/>
            <span>30 seguidores</span>
          </div>
        </HeaderInfo>
      </section>
    </HeaderContainer>
  )
}