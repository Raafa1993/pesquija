import styled from "styled-components";

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
  max-width: 600px;

  .questions {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    width: 100%;

    .songContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 15px;
        gap: 15px;
        border-bottom: 2px dashed #dadada;
      .play {
        border: none;
        background: transparent;
        transition: all 0.2s;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }

    .song {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      .artist {
        width: 64px;
        height: 64px;
        border-radius: 12px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .infos {
        flex: 1;
        .name {
          font-size: 14px;
          font-weight: 800;
          color: var(--black);
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: #9c9c9c;
        }
      }
    }

    .score {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .buttonSound {
      display: grid;
      place-items: center;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: #b5b5b5;
      color: var(--white);
      cursor: pointer;

      &.zero {
        background: var(--red);
      }
      &.one {
        background: #e95858;
      }
      &.two {
        background: #f19797;
      }
      &.three {
        background: #8dd09c;
      }
      &.four {
        background: #2ba145;
      }
      &.five {
        background: var(--green);
      }
    }
   
  }
`;
