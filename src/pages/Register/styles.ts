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
  align-items: center;
  width: 960px;
  margin: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  width: 100%;
  height: 40px;
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: var(--white);
    margin-top: -22px;
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
  margin-top: 3.60rem;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

    >button {
      margin-top: 40px;
    }
  }

  @media(max-width: 499px) {
    margin-top: 2rem;
      button {
        margin-top: 16px;
      }
    }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: var(--white);
  }

`;

