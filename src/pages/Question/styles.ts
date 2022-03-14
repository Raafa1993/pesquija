import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100vw;
  height: 100vh;

  .modal {
    width: 960px;
    height: 250px;
    padding: 20px;
    position: absolute;
    bottom: 0;
    background: var(--white);
    border-radius: 16px 16px 0 0;
    .image {
      width: 130px;
      height: 130px;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      margin-top: -65px;
    }
    .title {
      margin-top: 60px;
      margin-bottom: 40px;
      text-align: center;
      color: var(--black);
      font-weight: 600;
      font-size: 20px;
      span {
        font-weight: 800;
      }
    }
    .buttons {
      display: flex;
      gap: 20px;
      button {
        width: 50%;
      }
      .no {
        background: red;
        &:hover {
          background: #b50303;
        }
      }
      .yes {
        background: var(--green);
        &:hover {
          background: #027c1d;
        }
      }
    }
  }
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



