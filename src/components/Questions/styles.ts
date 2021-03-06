import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h3 {
        margin-bottom: 20px;
      }
      input {
        border: 1px solid var(--blue);
        border-radius: 8px;
        font-size: 16px;
        padding: 5px 10px;
      }
      button {
        margin-top: 20px;
        height: 45px;
      }
    }
  }
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 35vh;
  background-color: #089bff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
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
    height: calc(100% - 120px);
    justify-content: center;
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
      @media (max-width: 1500px) {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }

  .sectionImage {
    width: 190px;
    border-radius: 16px;
    position: absolute;
    bottom: -110px;

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
  height: 65vh;
  /* @media(max-width: 500px) {
    height: 55vh;
  } */
  background-color: var(--white);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100%;
  overflow: scroll;

  scrollbar-width: thin;         
  scrollbar-color: var(--blue);
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 12px;
  }

  p {
    font-weight: 700;
    color: var(--black);
    margin-top: 10px;
    padding: 0 10px;
  }
  
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    margin-bottom: 30px;
  }

  .questions {
    display: grid;
    grid-template-columns: 1fr;

    width: 100%;
    gap: 1.25rem;
  }

  .finalQUestion {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 1rem;
  }

  .buttonFinalQuestion {
    display: grid;
    place-items: center;
    background: #021623;
    border: 1px solid #021623;
    border-radius: 16px;

    width: 100%;
    height: 56px;

    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;

    @media (max-width: 425px) {
      margin-bottom: 10px;
    }
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
