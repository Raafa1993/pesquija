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
  respondida: boolean,
}

export default function Home() {
  const history = useHistory();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<SearchProps[]>([]);
  const [profile, setProfile] = useState<any>({})

  useEffect(() => {

    const tokenString:any = window.localStorage.getItem('@Pesquija:user')
    const token = JSON.parse(tokenString)

    setLoad(true);
    api.get('/pesquisa').then((res) => {
      setData(res.data.result)
      api.get('/usuario/'+token.id_usuario).then((response) => {
        setProfile({...response.data.result})
        console.log(response.data.result)
        setLoad(false)
      })
    })
  }, [])

  
  return (
    <DashboardContainer>
      <Profile>
        <div
          className="userImage"
          style={{ backgroundImage: `url(${UserImage})` }}
        />
        <div>
          <div className="name">{profile.nome}</div>
          <div className="phone">{profile.telefone}</div>
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
              <Emoji symbol="💎" label="blue gem" /> {profile.pontos ? profile.pontos : 0}
            </span>
          </div>
          <div className="survey">
            <p>Pesquisas concluídas</p>
            <span>
              <Emoji symbol="🏆" label="trophy" /> {profile.pesqusasRespontidas ? profile.pesqusasRespontidas : 0}
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
            { load === false && data.map((row) => {
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
                    onClick={() => row.respondida === false ? history.push(`/questao/${row.id_pesquisa}`) : () => {}} 
                    className={`buttonQuestion ${!row.respondida ? 'ok' : 'block'}`}>
                    {!row.respondida ? 'Participar' : 'Bloqueada'}
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
