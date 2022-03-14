import React from 'react';
import ButonQuestion from '../../components/form/ButonQuestion';
import ButtonBackToPage from '../../components/form/ButtonBackToPage';

// IMAGES
import HeadphoneImg from "../../images/headphone.png";

import {
  Container,
  ContentTop,
  Header,
  ContentBottom,
  Main,
} from "./styles";

export default function Question() {
  return (
    <Container>
      <ContentTop>
        <Header>
          <div className="backToPage">
            <ButtonBackToPage />
          </div>
          <div className='headerInfo'>
            <span>1 de 5</span>
            <h1>Com qual frequência você ouve rádio?</h1>
          </div>

          <div className="sectionImage">
            <img src={HeadphoneImg} alt="headphone" />
          </div>
        </Header>
      </ContentTop>
      <ContentBottom>
        <Main>
          <div className="questions">
            <ButonQuestion>
              1 a 2 vezes por semana
            </ButonQuestion>
            <ButonQuestion>
              2 a 3 vezes por semana
            </ButonQuestion>
            <ButonQuestion>
            Mais de 4 vezes por semana
            </ButonQuestion>
          </div>
        </Main>
      </ContentBottom>
    </Container>
  );
}
