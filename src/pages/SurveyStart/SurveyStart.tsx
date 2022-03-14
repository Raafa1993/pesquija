import { DashboardBottom, DashboardContainer, SurveyContainer } from "./styles";
import Warning from '../../assets/Warning.png';
import Emoji from 'a11y-react-emoji';
import Company2 from '../../assets/porto-seguro.png';
import ButtonDefault from "../../components/form/ButtonDefault";

export default function SurveyStarts() {
    return (
        <DashboardContainer>
            <DashboardBottom>
                <div className="warning" style={{backgroundImage: `url(${Warning})`}} />
                <div className="infos">
                    <p>Inscreva-me nesta pesquisa e use minhas informações conforme descrito na <span>Política de Privacidade</span>.</p>
                    <p>Ao clicar em <span>Iniciar pesquisa</span> você concorda e assume que leu e entendeu nossa política de privacidade, assim como vamos usar e compartilhar suas informações pessoais.</p>
                </div>

                <SurveyContainer>
                    <h3>pesquisa: <span>Consumo de rádio</span></h3>
                    <p>Pesquisa parar conhecer melhor o seu hábito de consumo de rádio <Emoji symbol="📻" label="radio" /></p>                    
                    <div className="surveyDetails">
                        <div className="companyPhoto" style={{backgroundImage: `url(${Company2})`}} />
                            
                        <div className="details">
                            <div className="minutes">5 minutos</div>
                            <div className="stars"><Emoji symbol="⭐⭐⭐⭐⭐" label="stars" /> Fácil</div>
                            <div className="points"><Emoji className="gem" symbol="💎" label="blue gem" /> 35 pontos</div>
                        </div>
                    </div>

                </SurveyContainer>

                <ButtonDefault>
                    Iniciar pesquisa
                </ButtonDefault>

            </DashboardBottom>
        </DashboardContainer>
    )
}