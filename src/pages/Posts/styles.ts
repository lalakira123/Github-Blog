import styled from "styled-components";

export const PostsContainer = styled.main`
	width: 100%;
	max-width: 54rem;
	margin: 0 auto;
	padding: 0 1rem;
`

export const IssuesContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	margin: 3rem 0;
`

export const IssueCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	max-width: 26rem;
	padding: 2rem;
	background-color: ${(props) => props.theme["base-post"]};
	border-radius: 10px;

	&:hover {
		box-shadow: 0 0 0 2px ${(props) => props.theme["base-label"]};
		cursor: pointer;
	}
`

export const IssueHeader = styled.header`
	display: flex;
	gap: 1rem;

	h3 {
		color: ${(props) => props.theme["base-title"]};
		font-size: 1.25rem;
		font-weight: 700;
		padding-right: 2rem;
	}

	span {
		color: ${(props) => props.theme["base-span"]};
		font-size: 0.75rem;
	}
`

