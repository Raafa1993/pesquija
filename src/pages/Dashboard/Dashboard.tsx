import Emoji from "a11y-react-emoji";

//Images
import Company from "../../assets/worldformats.png";
import Company2 from "../../assets/porto-seguro.png";
import User from "../../assets/user.jpg";

import {
  DashboardContainer,
  DashboardBottom,
  Profile,
  Surveys,
} from "./styles";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  date: string;
  sexo: string;
}

export default function Dashboard() {
  const [data, setData] = useState<User>(
    window.localStorage.getItem("@Pesquija:user")
      ? JSON.parse(window.localStorage.getItem("@Pesquija:user") as any)
      : [],
  );

  return (
    <DashboardContainer>
      <Profile>
        <div
          className="userImage"
          style={{ backgroundImage: `url(${User})` }}
        />
        <div>
          <div className="name">{data.name}</div>
          <div className="phone">{data.phone}</div>
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
          <h3>Painel de pesquisas</h3> {/*Aqui vai um icone de link??*/}
          <p>
            Que tal participar de uma pesquisa agora?{" "}
            <Emoji symbol="👀" label="eyes" />
          </p>{" "}
          {/*Aqui vai um icone de olhos*/}
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
                  <button className="ok">Participar</button>
                </div>
              );
            })}
          </div>

          <div className="locked">
            {[0, 1, 2, 3, 4, 5, 6].map((row: any, key: any) => {
              return (
                <div className="column">
                  <div
                    className="companyImage2"
                    style={{ backgroundImage: `url(${Company2})` }}
                  />
                  <div className="surveyName">
                    <p>Porto Seguro</p>
                    <span>50 pontos</span>
                  </div>
                  <button className="block">Bloqueada</button>
                </div>
              );
            })}
          </div>
        </Surveys>
      </DashboardBottom>
    </DashboardContainer>
  );
}
