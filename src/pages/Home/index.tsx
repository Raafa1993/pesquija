import Emoji from "a11y-react-emoji";

//Images
import Company from "../../assets/worldformats.png";
import UserImage from '../../images/User.png';

import {
  DashboardContainer,
  DashboardBottom,
  Profile,
  Surveys,
} from "./styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import api from "../../services/api";

interface User {
  id: string;
  nome: string;
  avatar: string;
  telefone: string;
  nascimento: string;
  genero: string;
}

interface SearchProps {
  id_pesquisa: number,
  titulo: string,
  pontos: number,
  status: string,
  imagem: string,
}

export default function Home() {
  const history = useHistory();
  const { user } = useAuth();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<SearchProps[]>([]);

  useEffect(() => {
    setLoad(true);
    api.get('/pesquisa').then((res) => {
      setData(res.data.result)
    })
    setLoad(false)
  }, [])

  
  return (
    <DashboardContainer>
      <Profile>
        <div
          className="userImage"
          style={{ backgroundImage: `url(${UserImage})` }}
        />
        <div>
          <div className="name">{user.nome}</div>
          <div className="phone">{user.telefone}</div>
          <span>
            Participe de + pesquisas para receber cada vez mais!
            <Emoji symbol="✨" label="bright" />
          </span>
        </div>
      </Profile>

      <DashboardBottom>
        <div className="status">
          <div className="points">
            <p>Seus pontos</p>
            <span>
              <Emoji symbol="💎" label="blue gem" /> {user.ponstos || '0'}
            </span>
          </div>
          <div className="survey">
            <p>Pesquisas concluídas</p>
            <span>
              <Emoji symbol="🏆" label="trophy" /> {user.pesquisas || '0'}
            </span>
          </div>
        </div>

        <div className="title">
          <h3>Painel de pesquisas</h3> <Emoji symbol="👀" label="eyes" />
          <p>
            Que tal participar de uma pesquisa agora?{" "}
            <Emoji symbol="👀" label="eyes" />
          </p>{" "}
        </div>

        <Surveys>
          <div className="unlocked">
            {data.map((row) => {
              return (
                <div className="column" key={row.id_pesquisa}>
                  <div className="columLeft">
                    <div
                      className="companyImage"
                      style={{ backgroundImage: `url(${Company})` }}
                    />
                    <div className="surveyName">
                      <p>{row.titulo}</p>
                      <span>{row.pontos} pontos</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => history.push(`/questao/${row.id_pesquisa}`)} 
                    className={`buttonQuestion ${row.status === 'ativa' ? 'ok' : 'block'}`}>
                    {row.status === 'ativa' ? 'Participar' : 'Bloqueada'}
                  </button>
                
                </div>
              );
            })}
          </div>
        </Surveys>
      </DashboardBottom>
    </DashboardContainer>
  );
}
