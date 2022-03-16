//IMAGES
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import { useHistory } from "react-router-dom";
import ButtonDefault from "../../components/form/ButtonDefault";
import { useAuth } from "../../hooks/Auth";
import { UserIcon } from "../../icons/UserIcon";
import TrophyImg from "../../images/trophy.png";

import {
  Continaer,
  ContentTop,
  ContentBottom,
  SectionTop,
  Description,
  SectionBottom,
  CardQuestionFinished,
} from "./styles";

export default function FinishedSearch() {
  const { user } = useAuth();
  const history = useHistory()

  const [confetti, setConfetti] = useState(true)

  useEffect(() => {
      setTimeout(function() {
          setConfetti(false);
        }, 3500);
    }, []);

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
              {`${user.nome}, parabéns! Você concluiu a pesquisa e ganhou{" "}`}
            </h1>

            <span className="diamondFinished">💎</span>

            <h2 className="pontsFinished">
              <span>35 </span>ponstos
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
                PESQUISA: <span>CONSUMO DE RÁDIO</span>
              </h1>
              <p className="paragraphyCardFinished">
                Pesquisa para conhecer melhor o seu hábito de consumo do rádio
                📻
              </p>
            </div>

            <div className="mainCArdFinished">
              <div className="imageCardFinished">
                <UserIcon />
              </div>

              <div className="buttonsCardFinished">
                <div className="buttonTimeCardFinished">5 minutos</div>

                <div className="buttonTimeCardFinished">⭐⭐⭐⭐⭐️ Facil</div>
              </div>
            </div>
          </CardQuestionFinished>

          <ButtonDefault
            type="button"
            onClick={() => history.push('/home')}
            >
            Ver mais pesquisas
        </ButtonDefault>
        </SectionBottom>
      </ContentBottom>
    </Continaer>
  );
}
