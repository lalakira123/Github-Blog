import { Profile } from "./components/Profile";
import { SearchIssue } from "./components/SearchIssue";
import { PostsContainer, IssuesContainer, IssueCard, IssueHeader } from "./styles";


export function Posts() {
	return (
		<PostsContainer>
			<Profile />
			<SearchIssue />
			<IssuesContainer>
				<IssueCard>
					<IssueHeader>
						<h3>JavaScript data types and data structures</h3>
						<span>Há 1 dia</span>
					</IssueHeader>
					<p>
					   Programming languages all have built-in data structures, but these 
					   often differ from one language to another. This article attempts to 
					   list the built-in data structures available in...
					</p>
				</IssueCard>

				<IssueCard>
					<IssueHeader>
						<h3>JavaScript data types and data structures</h3>
						<span>Há 1 dia</span>
					</IssueHeader>
					<p>
					   Programming languages all have built-in data structures, but these 
					   often differ from one language to another. This article attempts to 
					   list the built-in data structures available in...
					</p>
				</IssueCard>

				<IssueCard>
					<IssueHeader>
						<h3>JavaScript data types and data structures</h3>
						<span>Há 1 dia</span>
					</IssueHeader>
					<p>
					   Programming languages all have built-in data structures, but these 
					   often differ from one language to another. This article attempts to 
					   list the built-in data structures available in...
					</p>
				</IssueCard>

				<IssueCard>
					<IssueHeader>
						<h3>JavaScript data types and data structures</h3>
						<span>Há 1 dia</span>
					</IssueHeader>
					<p>
					   Programming languages all have built-in data structures, but these 
					   often differ from one language to another. This article attempts to 
					   list the built-in data structures available in...
					</p>
				</IssueCard>
			</IssuesContainer>
		</PostsContainer>
	)
}