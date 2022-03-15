import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  width: 100%;
  height: 40px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: var(--white);
  }

  p {
    text-align: center;
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--white);
    margin-top: 24px;
    max-width: 600px;
  }
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 3.6rem;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

    .register {
      background: var(--black);
      border: 1px solid var(--white);
      &:hover {
        /* opacity: .8; */
        /* background: var(--blue);
        border: 1px solid var(--blue); */
      }
    }
  }

  @media (max-width: 499px) {
    margin-top: 2rem;
  }
`;

