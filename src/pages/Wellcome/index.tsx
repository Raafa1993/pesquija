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

export default function Wellcome() {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <h1>
          Olá, <span className="colorHighlights">você</span> foi selecionado para responder a nossa pesquisa e nos ajudar a criar um produto melhor para você. 😎💎
        </h1>

        <SectionImage>
          <ImageCenter>
            <img src={WellcomeImage} alt="chat de questões" />
          </ImageCenter>

        </SectionImage>

        <Footer>
          <h2>
            É uma pesquisa rápida e divertida de responder e todas as informações cedidas serão confidenciais. <span className="colorHighlights">É só clicar no botão</span> abaixo e começar!.
          </h2>

          <ButtonDefault 
            onClick={() => history.push("/login")}
          >
            Participar da pesquisa
          </ButtonDefault>
        </Footer>
      </Content>
    </Container>
  );
}
