import styled from "styled-components";

export const SearchIssueContainer = styled.section`
	margin-top: 4.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`

export const SearchIssueHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h3 {
		font-size: 1.125rem;
		font-weight: 700;
		color: ${(props) => props.theme["base-title"]};
	}

	span {
		font-size: 0.825rem;
		color: ${(props) => props.theme["base-span"]};
	}
`

export const SearchIssueInput = styled.input`
	flex: 1;
	width: 100%;
	padding: 0.75rem 1rem;
	border: 1px solid ${(props) => props.theme["base-border"]};
	border-radius: 6px;
	background-color: ${(props) => props.theme["base-input"]};
	color: ${(props) => props.theme["base-text"]};
	
	&::placeholder {
		color: ${(props) => props.theme["base-label"]};
	}
`