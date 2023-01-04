import styled from "styled-components";

export const IssueContainer = styled.main`
	margin: 0 auto;
	max-width: 54rem;
	width: 100%;
	margin-top: -5.5rem;
`

export const TitleIssueContainer = styled.div`
	width: 100%;
	padding: 2rem;
	background-color: ${(props) => props.theme["base-profile"]};
	border-radius: 10px;

	h3 {
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
		color: ${(props) => props.theme["base-title"]};
		font-size: 1.5rem;
		font-weight: 700;
	}
`

export const NavIssueContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		color: ${(props) => props.theme.blue};
		font-size: 0.75rem;
		font-weight: 700;
		text-decoration: none;

		border-bottom: 1px solid transparent;
	}

	a:hover {
		border-bottom: 1px solid ${(props) => props.theme.blue};
	}
`

export const IconsContainer = styled.div`
	display: flex;
	gap: 2rem;
`

export const IconContent = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;

	span {
		color: ${(props) => props.theme["base-span"]};
	}
`