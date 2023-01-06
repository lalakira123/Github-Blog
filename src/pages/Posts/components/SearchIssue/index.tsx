import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { SearchIssueContainer, SearchIssueHeader, SearchIssueInput } from "./styles";

interface SearchIssueProps {
	number_publish: number
	getListPost: (query?: string) => void
}

export function SearchIssue({number_publish, getListPost}: SearchIssueProps) {
	const [query, setQuery] = useState('')

	useEffect(() => {
		getListPost(query)
	}, [query])

	const handleChangeQuery = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()

		setQuery(event.target.value)
	}, [])

	return (
		<SearchIssueContainer>
			<SearchIssueHeader>
				<h3>Publicações</h3>
				<span>{number_publish} publicações</span>
			</SearchIssueHeader>
			<form>
				<SearchIssueInput 
					placeholder="Buscar conteúdo"
					value={query}
					onChange={handleChangeQuery}
				/>
			</form>
		</SearchIssueContainer>
	)
}