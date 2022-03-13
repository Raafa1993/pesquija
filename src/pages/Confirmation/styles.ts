import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 100%;
  margin-top: 32px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 1.375rem;
    font-weight: 800;
    color: var(--white);
    max-width: 400px;
  }
`;

export const SectionImage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  z-index: 2;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  /* padding-bottom: 32px; */
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  margin: 60px 40px;

  p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--black);
    /* max-width: 260px; */
    line-height: 24px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-top: 24px;
    width: 100%;
    gap: 26px;

    .field {
      width: 100%;
    }

    .checkIcon {
      display: grid;
      place-items: center;

      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin: 12px 0;
      background-color: var(--green);
      @media (max-width: 499px) {
        width: 44px;
        height: 44px;
      }
    }
  }
`;
