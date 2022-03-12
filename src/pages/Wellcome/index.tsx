import React from 'react';
import { useNavigate } from 'react-router-dom';

// IMAGES
import WellcomeImage from "../../images/wellcomeImage.png";

import {
  Container,
  Content,
  SectionImage,
  ImageCenter,
  Footer,
} from "./styles";
import ButtonDefault from "../../components/form/ButtonDefault";

export default function Wellcome() {
  const navigate = useNavigate();
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

            onClick={() => navigate("/register")}
          >
            Quero participar e ganhar
          </ButtonDefault>
        </Footer>
      </Content>
    </Container>
  );
}
