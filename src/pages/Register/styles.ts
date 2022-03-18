import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  width: 100%;
  max-height: 100vh;
  @media(max-width: 500px) {
    max-height: 90vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 100%;
`;

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
    gap: 22px;

    > button {
      margin-top: 20px;
    }
  }

  @media (max-width: 499px) {
    margin-top: 2rem;
    form {
      button {
        margin-top: 14px;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 30px;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: var(--white);
  }
`;
