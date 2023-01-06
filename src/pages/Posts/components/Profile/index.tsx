import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconContent, IconsContainer, ProfileContainer, ProfileInfoContainer, TitleContainer } from "./styles";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { api } from '../../../../lib/axios';
import { useEffect, useState } from 'react';

interface ProfileProps {
	name: string
	html_url: string
	company: string
	login: string
	bio: string
	followers: string
	avatar_url: string
}

export function Profile() {
	const [profile, setProfile] = useState<ProfileProps>({
		name: '', 
		html_url: '', 
		company: '', 
		login: '', 
		bio: '', 
		followers: '',
		avatar_url: ''
	})

	async function getProfile() {
		const response = await api.get('/users/lalakira123')

		const {
			name, 
			html_url,
			company,
			login,
			bio,
			followers,
			avatar_url,
		} = response.data

		setProfile({name, html_url, company, login, bio, followers, avatar_url})
	}

	useEffect(() => {
		getProfile()
	}, [])

  return (
    <ProfileContainer>
			<img src={profile.avatar_url} alt=""/>

			<ProfileInfoContainer>
				<TitleContainer>
					<h2>{profile.name}</h2>
					<a href={profile.html_url}>
						GITHUB 
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294f8" />
					</a>
				</TitleContainer>

					<p>{profile.bio}</p>
					
					<IconsContainer>
						<IconContent>
							<FontAwesomeIcon icon={faGithub} color="#3A536B" />
							<span>{profile.login}</span>
						</IconContent>
						<IconContent>
							<FontAwesomeIcon icon={faBuilding} color="#3A536B" />
							<span>{profile.company}</span>
						</IconContent>
						<IconContent>
							<FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
							<span>{profile.followers} seguidores</span>
						</IconContent>
					</IconsContainer>
				</ProfileInfoContainer>
			</ProfileContainer>
    )
}