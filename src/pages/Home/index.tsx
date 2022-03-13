import React from 'react';
import { useHistory } from 'react-router-dom';

// IMAGES
import WellcomeImage from "../../images/wellcomeImage.png";

import {
  Container,
  Content,
  SectionImage,
  ImageCenter,
} from "./styles";

export default function Home() {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <h1>
          Bem vindo a HOME😎💎
        </h1>
        <SectionImage>
          <ImageCenter>
            <img src={WellcomeImage} alt="chat de questões" />
          </ImageCenter>

        </SectionImage>
      </Content>
    </Container>
  );
}
