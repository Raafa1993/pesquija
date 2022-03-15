import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 35%;
  background-color: #089bff;
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
  background-color: #089bff;
  position: relative;

  .backToPage {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1rem;

    .buttonBackToPage {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;

      background: transparent;
      border: none;
    }
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
      color: #ffd600;
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
  height: 65%;
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
  margin-top: 80px;

  overflow-x: scroll;
  

  .questions {
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 100%;
    gap: 1.25rem;

    /* @media (max-width: 580px) {
      grid-template-columns: 1fr;
    } */
  }

  .footerQuestion {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 20px 0;
    height: 100%;
    align-items: end;

    .buttonNextpage {
      display: grid;
      place-items: center;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: none;

      background: #089bff;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }

      svg {
        transform: rotate(-180deg);
      }
    }
  }
`;
