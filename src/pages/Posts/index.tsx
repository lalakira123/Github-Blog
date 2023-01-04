import { Profile } from "./components/Profile";
import { SearchIssue } from "./components/SearchIssue";
import { PostsContainer } from "./styles";


export function Posts() {
	return (
		<PostsContainer>
			<Profile />
			<SearchIssue />
		</PostsContainer>
	)
}