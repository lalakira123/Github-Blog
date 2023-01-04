import { IconContent, IconsContainer, IssueContainer, IssueContent, NavIssueContainer, TitleIssueContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";

export function Issue() {
	return (
		<IssueContainer>
			<TitleIssueContainer>
				<NavIssueContainer>
					<a href="#">
						<FontAwesomeIcon icon={faAngleLeft} color="#3294f8" />
						<span>VOLTAR</span>
					</a>
					<a href="#">
						<span>VER NO GITHUB</span>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294f8" />
					</a>
				</NavIssueContainer>

				<h3>JavaScript data types and data structures</h3>

				<IconsContainer>
					<IconContent>
						<FontAwesomeIcon icon={faGithub} color="#3A536B" />
						<span>lalakira123</span>
					</IconContent>
					<IconContent>
						<FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />
						<span>Há 1 dia</span>
					</IconContent>
					<IconContent>
						<FontAwesomeIcon icon={faComment} color="#3A536B" />
						<span>5 comentários</span>
					</IconContent>
				</IconsContainer>
			</TitleIssueContainer>

			<IssueContent>
				<p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
</p>
			</IssueContent>
		</IssueContainer>
	)
}