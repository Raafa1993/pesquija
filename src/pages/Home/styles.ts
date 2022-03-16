import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background);
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 40px;
  height: 40%;
 

  .userImage {
    background-position: center;
    background-size: cover;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    margin-top: 0.625rem;
    font-size: 1.4rem;
    color: var(--white);
    font-weight: 800;
  }
  .phone {
    color: var(--blue);
    font-size: 1.2rem;
    margin-top: 0.625rem;
  }
  span {
    margin-top: 0.625rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--yellow);
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    span {
      width: 90%;
    }
  }
`;

export const DashboardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 60%;
  padding: 2.5rem;
  border-radius: 1.375rem 1.375rem 0 0;
  background: var(--white);
  position: relative;
  .status {
    display: flex;
    gap: 2.5rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -2.5rem;
    .points,
    .survey {
      background: #fffbe6;
      border: 2px solid var(--yellow);
      border-radius: 1rem;
      width: 14.063rem;
      padding: 1.25rem;
      p {
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 500;
      }
      span {
        font-size: 1.375rem;
        font-weight: 800;
        color: var(--black);
      }
    }
  }
  .title {
    margin-top: 2.5rem;
    h3 {
      color: var(--black);
      text-transform: uppercase;
    }
    p {
      font-size: 0.875rem;
      font-weight: 400;
      margin-top: 0.625rem;
    }
  }
  @media (max-width: 800px) {
    .status {
      gap: 10px;
      .points,
      .survey {
        width: 12rem;
        height: 6rem;
        padding: 1rem;
        p {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const Surveys = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.25rem;
  height: 30rem;
  width: 100%;
  max-width: 960px;
  overflow: scroll;
  .unlocked {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 24rem;
    overflow-y: auto;
    .companyImage {
      width: 3.125rem;
      height: 3.125rem;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
    }
  }
  .column {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    width: 100%;
    max-width: 600px;
    height: 4.375rem;
    margin-bottom: 10px;
    border-radius: 1rem;

    .columLeft {
      display: flex;
      align-items: center;
    }
    .buttonQuestion {
      padding: 0.938rem;
      border-radius: 1rem;
      outline: none;
      transition: ease-in-out 0.2s;

      &.ok {
        border: 2px solid var(--green);
        background: #f3f9f4;
        color: var(--green);
        &:hover {
          background: #9ee7aa;
          color: var(--white);
        }
      }
      &.block {
        border: 2px solid var(--red);
        background: #f7f2f2;
        color: var(--red);
        cursor: not-allowed;
      }
    }
    .surveyName {
      margin-left: 1rem;
      p {
        color: var(--black);
        font-weight: 400;
      }
      span {
        color: var(--blue);
        font-weight: 800;
      }
    }
  }
`;
