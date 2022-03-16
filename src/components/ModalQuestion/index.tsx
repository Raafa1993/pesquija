import { useHistory } from "react-router-dom";
import StartImg from "../../images/star.png";
import ButtonDefault from "../form/ButtonDefault";

import UserImage from '../../images/User.png';

import {
  Overlay,
  Container,
  Content,
  SectionImage,
  CardQuestion,
} from "./styles";


interface ModalProps {
  id: string;
  onClose: () => void;
  itemQuestion: {
    id_pesquisa: number,
    titulo: string,
    pontos: number,
    status: string,
    imagem: string,
    respondida: boolean,
    descricao: string,
    tempo: string,
    dificuldade: string,

  };
  openModal: boolean;
}


export default function ModalQuestion({
  id,
  onClose,
  itemQuestion,
  openModal
}: ModalProps) {
  const handleCloseModal = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  const history = useHistory();
  const star = itemQuestion.dificuldade === 'facil' ? '⭐️' :  "" 
            || itemQuestion.dificuldade === "medio" ? '⭐️⭐️⭐️' : ""
            || itemQuestion.dificuldade === "dificil" ? '⭐️⭐️⭐️⭐️⭐️' : ""

  return (
    <Overlay id={id} openModal={openModal} onClick={handleCloseModal}>
      <Container>
        <Content>
          <SectionImage>
            <img src={StartImg} alt="imagem estrela" />
          </SectionImage>

          <p className="titleModalQuestion">
            Inscreva-me nesta pesquisa e use minhas informações conforme
            descrito na <strong>Política de Privacidade.</strong>{" "}
          </p>
          <p className="subTitleModalQuestion">
            Ao clicar em <strong>”Iniciar pesquisa”</strong> você concorda e
            assume que leu e entendeu nossa política de privacidade, assim como
            vamos usar e compartilhar suas informações pessoais.
          </p>

          <CardQuestion>
            <div className="headerCardFinished">
              <h1 className="titleCardFinished">
                PESQUISA: <span>{itemQuestion?.titulo}</span>
              </h1>
              <p className="paragraphyCardFinished">{itemQuestion?.descricao}</p>
            </div>

            <div className="mainCArdFinished">
              <div className="imageCardFinished">
                <img src={UserImage} alt="imagem do usuario" />
              </div>

              <div className="buttonsCardFinished">
                <div className="buttonTimeCardFinished">
                  {itemQuestion?.tempo} minutos
                </div>

                <div className="buttonTimeCardFinished">
                  {star + itemQuestion?.dificuldade}
                </div>

                <div className="buttonTimeCardFinished">
                  {`💎 ${itemQuestion?.pontos} pontos`}
                </div>
              </div>
            </div>
          </CardQuestion>

          <ButtonDefault
            isQuestion={true}  
            onClick={() => history.push(`/questao/${itemQuestion.id_pesquisa}`)}
          >
            Iniciar pesquisa
          </ButtonDefault>
        </Content>
      </Container>
    </Overlay>
  );
}
