import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 4rem 0 8.375rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme["base-profile"]};

  display: flex;
  align-items: center;
  justify-content: center;
`