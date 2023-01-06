import styled from "styled-components"

export const ProfileContainer = styled.section`
	margin-top: -5.5rem;
	background-color: ${(props) => props.theme["base-profile"]};
	padding: 2rem;
	border-radius: 10px;

	display: grid;
	grid-template-columns: 9.25rem 1fr;
	gap: 2rem;

	img {
		width: 9.25rem;
		border-radius: 8px;
	}
`

export const ProfileInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.5rem;

	p {
		line-height: 25.6px;
		margin-bottom: 3rem;
	}
`

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h2 {
		color: ${(props) => props.theme["base-title"]};
		font-size: 1.5rem;
	}

	a {
		color: ${(props) => props.theme.blue};
		font-size: 0.75rem;
		font-weight: 700;
		text-decoration: none;

		display: flex;
		align-items: center;
		gap: 0.5rem;

		border-bottom: 1px solid transparent;
	}

	a:hover {
		border-bottom: 1px solid ${(props) => props.theme.blue};
	}
`

export const IconsContainer = styled.div`
	display: flex;
	gap: 1.5rem;
`

export const IconContent = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`