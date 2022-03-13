import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonDefault from '../../components/form/ButtonDefault';

// IMAGES
import WellcomeImage from "../../images/wellcomeImage.png";

import {
  Container,
  Content,
  SectionImage,
  ImageCenter,
  Footer,
} from "./styles";
<<<<<<< HEAD
=======
import ButtonDefault from "../../components/form/ButtonDefault";
>>>>>>> aa1ca67ba86caa1a591173f3860ab302202f40f8

export default function Wellcome() {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <h1>
          Participe de pesquisas,{" "}
          <span className="colorHighlights">ganhe pontos</span> e troque por
          prêmios 😎💎
        </h1>

        <SectionImage>
          <ImageCenter>
            <img src={WellcomeImage} alt="chat de questões" />
          </ImageCenter>

        </SectionImage>

        <Footer>
          <h2>
            É fácil! Responda à pesquisas, receba recompensas e{" "}
            <span className="colorHighlights">troque por prêmios</span>.
          </h2>

          <ButtonDefault 
            onClick={() => history.push("/register")}
          >
            Quero participar e ganhar
          </ButtonDefault>
        </Footer>
      </Content>
    </Container>
  );
}
