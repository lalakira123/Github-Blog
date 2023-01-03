import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconContent, IconsContainer, ProfileContainer, ProfileInfoContainer, TitleContainer } from "./styles";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
    return (
        <ProfileContainer>
				<img src="https://avatars.githubusercontent.com/u/83435979?v=4" alt=""/>

				<ProfileInfoContainer>
					<TitleContainer>
						<h2>Laerte Akira</h2>
						<a href="/#">
							GITHUB 
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294f8" />
						</a>
					</TitleContainer>

					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia quasi quo expedita quos blanditiis laboriosam laborum voluptates voluptatibus maiores! Error iusto laborum eveniet id qui in consequuntur voluptates explicabo?</p>
					
					<IconsContainer>
						<IconContent>
							<FontAwesomeIcon icon={faGithub} color="#3A536B" />
							<span>lalakira123</span>
						</IconContent>
						<IconContent>
							<FontAwesomeIcon icon={faBuilding} color="#3A536B" />
							<span>Vayon Insurance Solutions</span>
						</IconContent>
						<IconContent>
							<FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
							<span>32 seguidores</span>
						</IconContent>
					</IconsContainer>
				</ProfileInfoContainer>
			</ProfileContainer>
    )
}