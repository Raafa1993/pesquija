//IMAGES
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import { useHistory, useParams } from "react-router-dom";
import ButtonDefault from "../../components/form/ButtonDefault";
import ModalConfirmation from "../../components/ModalConfirmation";
import { useAuth } from "../../hooks/Auth";
import { UserIcon } from "../../icons/UserIcon";
import TrophyImg from "../../images/trophy.png";
import api from "../../services/api";

import {
  Continaer,
  ContentTop,
  ContentBottom,
  SectionTop,
  Description,
  SectionBottom,
  CardQuestionFinished,
} from "./styles";

interface PropsQuestion {
  titulo: string;
  pontos: number;
  tempo: number;
  dificuldade: string;
  descricao: string;
}

export default function FinishedSearch() {
  const { user } = useAuth();
  const history = useHistory();
  const params = useParams<any>();
  const [data, setData] = useState<PropsQuestion>();

  const [confetti, setConfetti] = useState(true)
  const [star, setStar] = useState('⭐️')

  useEffect(() => {
      setTimeout(function() {
          setConfetti(false);
        }, 3500);
    }, []);

  useEffect(() => {
    api.get(`/pesquisa/${params.id}`).then((res) => {
      setData(res.data.result.pesquisa)
      setStar(res.data.result.pesquisa.dificuldade === 'facil' ? '⭐️' : '' || res.data.result.pesquisa.dificuldade === 'medio' ? '⭐️⭐️⭐️' : '⭐️' || res.data.result.pesquisa.dificuldade === 'dificil' ? '⭐️⭐️⭐️⭐️⭐️' : '')
    })
  }, [params])

  return (
    <Continaer>
      <ContentTop>
        <SectionTop>
          <div className="cardTrophy">
            <img src={TrophyImg} alt="trofeu imagem" />
          </div>

            <Confetti
                width={600}
                // height={480}
                numberOfPieces={confetti === false ? 0 : 200}
                recycle={confetti === false ? false : true}
                className="confetti"
            />

          <Description>
            <h1 className="titleFinished">
              {`${user.nome}, parabéns! Você concluiu a pesquisa e ganhou`}
            </h1>

            <span className="diamondFinished">💎</span>

            <h2 className="pontsFinished">
              <span>{data?.pontos} </span>pontos
            </h2>

            <p className="paragraphyFinished">
              Participe de + pesquisas para receber cada vez mais! ✨
            </p>
          </Description>
        </SectionTop>
      </ContentTop>

      <ContentBottom>
        <SectionBottom>
          <CardQuestionFinished>
            <div className="headerCardFinished">
              <h1 className="titleCardFinished">
                PESQUISA: <span>{data?.titulo}</span>
              </h1>
              <p className="paragraphyCardFinished">
                {data?.descricao}
              </p>
            </div>

            <div className="mainCArdFinished">
              <div className="imageCardFinished">
                <UserIcon />
              </div>

              <div className="buttonsCardFinished">
                <div className="buttonTimeCardFinished">{data?.tempo} minutos</div>

                <div className="buttonTimeCardFinished">{star + data?.dificuldade}</div>
              </div>
            </div>
          </CardQuestionFinished>

          {/* <ButtonDefault
            type="button"
            onClick={() => history.push('/home')}
            >
            Ver mais pesquisas
          </ButtonDefault> */}
        </SectionBottom>
      </ContentBottom>
    </Continaer>
  );
}
