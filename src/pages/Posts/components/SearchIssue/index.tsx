import { SearchIssueContainer, SearchIssueHeader, SearchIssueInput } from "./styles";

export function SearchIssue() {
	return (
		<SearchIssueContainer>
			<SearchIssueHeader>
				<h3>Publicações</h3>
				<span>6 publicações</span>
			</SearchIssueHeader>
			<form>
				<SearchIssueInput placeholder="Buscar conteúdo"/>
			</form>
		</SearchIssueContainer>
	)
}