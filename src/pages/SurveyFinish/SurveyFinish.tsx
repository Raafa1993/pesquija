import { DashboardBottom, DashboardContainer, DashboardTop, SurveyContainer } from "./styles";
import Emoji from 'a11y-react-emoji';
import Company2 from '../../assets/porto-seguro.png';
import ButtonDefault from "../../components/form/ButtonDefault";
import Trophy from '../../images/trophy.png';
import Confetti from 'react-confetti'
import { useEffect, useState } from "react";

export default function SurveyFinish() {

    const [confetti, setConfetti] = useState(true)

    useEffect(() => {
        setTimeout(function() {
            setConfetti(false);
          }, 3500);
      }, []);

    return (
        <DashboardContainer>

            <DashboardTop>
                <div className="trophy" style={{backgroundImage: `url(${Trophy})`}}>
                <Confetti
                    width={400}
                    height={240}
                    numberOfPieces={confetti === false ? 0 : 200}
                    recycle={confetti === false ? false : true}
                    className="confetti"
                />
                </div>

                <h3><span>Fernanda</span>, parabéns! Você concluiu a pesquisa e ganhou </h3>

                <div className="gem">
                    <Emoji symbol="💎" label="Blue gem" />
                    <p><span>35</span> pontos</p>
                </div>

                <span className="emoji">
                    Participe de + pesquisas para receber cada vez mais! 
                    <Emoji symbol="✨" label="bright" />
                </span>
                
            </DashboardTop>

            <DashboardBottom>
                <SurveyContainer>
                    <h3>pesquisa: <span>Consumo de rádio</span></h3>
                    <p>Pesquisa parar conhecer melhor o seu hábito de consumo de rádio <Emoji symbol="📻" label="radio" /></p>                    
                    <div className="surveyDetails">
                        <div className="companyPhoto" style={{backgroundImage: `url(${Company2})`}} />
                            
                        <div className="details">
                            <div className="minutes">5 minutos</div>
                            <div className="stars"><Emoji symbol="⭐⭐⭐⭐⭐" label="stars" /> Fácil</div>
                        </div>
                    </div>

                </SurveyContainer>

                <ButtonDefault>
                    Ver mais pesquisas
                </ButtonDefault>

            </DashboardBottom>
        </DashboardContainer>
    )
}