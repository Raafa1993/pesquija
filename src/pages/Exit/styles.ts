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

  .exit {
    font-weight: 600;
    color: var(--white);
    background: var(--black);
    padding: 10px;
    margin-top: 25px;
    border-radius: 8px;
    border: 1px solid var(--blue);
    transition: all .3s;
    &:hover {
      background: var(--blue);
    }
  }
`;



