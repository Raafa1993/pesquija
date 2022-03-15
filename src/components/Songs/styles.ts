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
max-width: 960px;
margin: 0 auto;
padding: 0 2rem;
height: 100%;
margin-top: 140px;

.questions {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  width: 100%;
  
  .songContainer {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      border-bottom: 2px dashed #DADADA;
  }

  .song {
      display: flex;
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
          .name {
            font-size: 14px;
            font-weight: 800;
            color: var(--black);
          }
          span {
            font-size: 12px;
            font-weight: 400;
            color: #9C9C9C;
          }
      }

  }
  .score {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
      .zero,
      .one,
      .two,
      .three,
      .four,
      .five {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: #B5B5B5;
        color: var(--white);
        cursor: pointer;
      } 
      .zero.active {
          background: var(--red);
      } 
      .one.active {
          background: #E95858;
      } 
      .two.active {
          background: #F19797;
      } 
      .three.active {
          background: #8DD09C;
      } 
      .four.active {
          background: #2BA145;
      } 
      .five.active {
          background: var(--green);
      } 
  }

}
`;
