import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  max-width: 600px;

  h1 {
    text-align: center;
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--white);
  }
`;



