// IMAGES
import ChatQuestion from "../../images/chatQuestion.png";

import { Container, Content, SectionImage, ImageCenter, Footer, } from "./styles";

export default function Wellcome() {
  return (
    <Container>
      <Content>
        <h1>
          Participe de pesquisas, <span className="colorHighlights">ganhe pontos</span> e troque por prêmios
          😎💎
        </h1>

        <SectionImage>
          <ImageCenter>
            <img src={ChatQuestion} alt="chat de questões" />
          </ImageCenter>
        </SectionImage>

        <Footer>
          <h2>É fácil! Responda à pesquisas, receba recompensas e <span className="colorHighlights">troque por prêmios</span>.</h2>

          <button>
            Quero participar e ganhar
          </button>
        </Footer>
      </Content>
    </Container>
  );
}
