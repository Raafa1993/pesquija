import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserIcon } from "../../icons/UserIcon";
import StartImg from "../../images/star.png";
import { CardQuestionFinished } from "../../pages/FinishedSearch/styles";
import api from "../../services/api";
import ButtonDefault from "../form/ButtonDefault";

import {
  Overlay,
  Container,
  Content,
  SectionImage,
  SectionButtons,
} from "./styles";

interface ModalProps {
  id: string;
  note?: string;
  onClose: () => void;
  hadnleOnSetNote: (value: any) => void;
}

interface PropsQuestion {
  titulo: string;
  pontos: number;
  tempo: number;
  dificuldade: string;
  descricao: string;
}

export default function ModalQuestion({
  id,
  onClose,
  hadnleOnSetNote,
  note,
}: ModalProps) {
  const handleCloseModal = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  const history = useHistory();
  const params = useParams<any>();
  const [data, setData] = useState<PropsQuestion>();

  const [confetti, setConfetti] = useState(true);
  const [star, setStar] = useState("⭐️");

  useEffect(() => {
    setTimeout(function () {
      setConfetti(false);
    }, 3500);
  }, []);

  useEffect(() => {
    api.get(`/pesquisa/${params.id}`).then((res) => {
      setData(res.data.result.pesquisa);
      setStar(
        res.data.result.pesquisa.dificuldade === "facil"
          ? "⭐️"
          : "" || res.data.result.pesquisa.dificuldade === "medio"
          ? "⭐️⭐️⭐️"
          : "⭐️" || res.data.result.pesquisa.dificuldade === "dificil"
          ? "⭐️⭐️⭐️⭐️⭐️"
          : "⭐️",
      );
    });
  }, [params]);

  return (
    <Overlay id={id} onClick={handleCloseModal}>
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

          <CardQuestionFinished>
            <div className="headerCardFinished">
              <h1 className="titleCardFinished">
                PESQUISA: <span>{data?.titulo}</span>
              </h1>
              <p className="paragraphyCardFinished">{data?.descricao}</p>
            </div>

            <div className="mainCArdFinished">
              <div className="imageCardFinished">
                <UserIcon />
              </div>

              <div className="buttonsCardFinished">
                <div className="buttonTimeCardFinished">
                  {data?.tempo} minutos
                </div>

                <div className="buttonTimeCardFinished">
                  {star + data?.dificuldade}
                </div>
              </div>
            </div>
          </CardQuestionFinished>

          <ButtonDefault>Iniciar pesquisa</ButtonDefault>
        </Content>
      </Container>
    </Overlay>
  );
}
