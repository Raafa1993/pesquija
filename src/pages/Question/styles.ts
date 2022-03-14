import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100vw;
  height: 100vh;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
  background-color: #089BFF;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  background-color: #089BFF;
  position: relative;

  .backToPage {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  }

  .headerInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px;

    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      color: #FFD600;
    }

    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: var(--white);
      margin-top: 6px;
    }
  }

  .sectionImage {
    height: 240px;
    width: 260px;
    border-radius: 16px;
    position: absolute;
    bottom: -25%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60%;
  background-color: var(--white);
`;


export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  margin-top: 140px;

  .questions {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: 1.25rem;
  }
`;



