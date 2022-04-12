import { useEffect, useState } from "react";
import { DashboardBottom, DashboardContainer, SurveyContainer } from "./styles";
import Warning from '../../assets/Warning.png';
import Emoji from 'a11y-react-emoji';
import Company2 from '../../assets/worldformats.png';
import ButtonDefault from "../../components/form/ButtonDefault";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/api";

export default function SurveyStarts() {
    const history = useHistory();
    const [star, setStar] = useState('⭐️');
    const [data, setData] = useState<any>();
    const params = useParams<any>();

    useEffect(() => {
        //api.get(`/pesquisa/${params.id}`)
        api.get(`/pesquisa/`+1).then((res) => {
            setData(res.data.result.pesquisa)
            setStar(res.data.result.pesquisa.dificuldade === 'facil' ? '⭐️' : '' || res.data.result.pesquisa.dificuldade === 'medio' ? '⭐️⭐️⭐️' : '⭐️' || res.data.result.pesquisa.dificuldade === 'dificil' ? '⭐️⭐️⭐️⭐️⭐️' : '')
        })
    }, [params])

    return (
        <DashboardContainer>
            <DashboardBottom>
                <div className="warning" style={{backgroundImage: `url(${Warning})`}} />
                <div className="infos">
                    <p>Inscreva-me nesta pesquisa e use minhas informações conforme descrito na <span>Política de Privacidade</span>.</p>
                    <p>Ao clicar em <span>Iniciar pesquisa</span> você concorda e assume que leu e entendeu nossa política de privacidade.</p>
                </div>

                <SurveyContainer>
                    <h3>pesquisa: 
                        {/* {data?.titulo} */}
                        <span> Consumo de rádio FM</span>
                    </h3>
                    <p>
                        {/* {data?.descricao} */}
                        Pesquisa para conhecer melhor o seu hábito de consumo de rádio
                    </p>                    
                    <div className="surveyDetails">
                        <div className="companyPhoto" style={{backgroundImage: `url(${Company2})`}} />
                            
                        <div className="details">
                            <div className="minutes"> 
                            {/* {data?.tempo} */}
                                5 minutos
                            </div>
                            <div className="stars">
                                <Emoji symbol={star} label="stars" /> Fácil 
                                {/* {data?.dificuldade} */}
                             </div>
                            <div className="points">
                                <Emoji className="gem" symbol="💎" label="blue gem" /> 
                                {/* {data?.pontos} */}
                                35 pontos
                            </div>
                        </div>
                    </div>

                </SurveyContainer>

                <ButtonDefault
                    onClick={() => history.push('/questao/1')}
                >
                    Iniciar pesquisa
                </ButtonDefault>

            </DashboardBottom>
        </DashboardContainer>
    )
}