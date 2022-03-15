import Emoji from "a11y-react-emoji";

//Images
import Company from "../../assets/worldformats.png";
import User from "../../assets/user.jpg";

import {
  DashboardContainer,
  DashboardBottom,
  Profile,
  Surveys,
} from "./styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";

interface User {
  id: string;
  nome: string;
  avatar: string;
  telefone: string;
  nascimento: string;
  genero: string;
}

export default function Home() {
  const history = useHistory()
  const { user } = useAuth()
  const [data, setData] = useState<User>(
    window.localStorage.getItem("@Pesquija:user")
      ? JSON.parse(window.localStorage.getItem("@Pesquija:user") as any)
      : [],
  );  

  const [unlocked, setUnlocked] = useState(true)

  
  return (
    <DashboardContainer>
      <Profile>
        <div
          className="userImage"
          style={{ backgroundImage: `url(${User})` }}
        />
        <div>
          <div className="name">{data.nome}</div>
          <div className="phone">{data.telefone}</div>
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
              <Emoji symbol="💎" label="blue gem" /> 350
            </span>
          </div>
          <div className="survey">
            <p>Pesquisas concluídas</p>
            <span>
              <Emoji symbol="🏆" label="trophy" /> 0
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
            {[0, 1, 2, 3, 4, 5, 6].map((row: any, key: any) => {
              return (
                <div className="column" key={key}>
                  <div
                    className="companyImage"
                    style={{ backgroundImage: `url(${Company})` }}
                  />
                  <div className="surveyName">
                    <p>Consumo de rádio</p>
                    <span>35 pontos</span>
                  </div>
                  {
                    unlocked 
                    ? <button className="ok"
                        onClick={() => history.push(`/questao`) }
                      >
                        Participar
                    </button>
                    : <button className="block">Bloqueada</button>
                  }
                </div>
              );
            })}
          </div>
        </Surveys>
      </DashboardBottom>
    </DashboardContainer>
  );
}
