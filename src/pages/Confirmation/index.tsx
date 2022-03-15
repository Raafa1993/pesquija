import { useCallback, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ButtonDefault from "../../components/form/ButtonDefault";
import InputSms from "../../components/form/InputSms";
import getValidationErrors from "../../Utils/getValidationErrors";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

// IMAGES
import FaceEmoji from "../../images/faceEmoji.png";

import {
  Container,
  ContentTop,
  ContentBottom,
  Header,
  SectionImage,
  Main,
} from "./styles";
import api from "../../services/api";

export default function Confirmation() {
  const params = useParams<any>()
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(true);
  // const SMS = JSON.parse(window.localStorage.getItem("@Pesquija:sms") as any);
  
  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});
        setLoad(true);

        const schema = Yup.object().shape({
          code: Yup.string().required("Código obrigatório").max(5).min(4),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { code }: any = data;

        const newData = {
          token: code,
          id_usuario: params.id
        };

        await api.post("/token-validar", newData);
        setLoad(false);
        
        setTimeout(() => {
          history.push("/login")
        }, 3000)
      } catch (err: any) {
        setLoad(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        alert(err.response.data.message);
      }
    },
    [history],
  );

  return (
    <Container>
      <ContentTop>
        <Header>
          <h1>{`${'Usuario' }, seu cadastro foi finalizado com sucesso! ✅`}</h1>
        </Header>
        <SectionImage>
          <img src={FaceEmoji} alt="Emoji" />
        </SectionImage>
      </ContentTop>

      <ContentBottom>
        <Main>
          <p>
            Enviaremos um SMS para que você possa ativar a sua conta.{" "}
            <span className="colorHighlightsStrong">
              Insira o código recebido abaixo{" "}
            </span>
            ⬇️
          </p>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className="field">
              <InputSms
                type="text"
                name="code"
                // value={SMS}
                placeholder="Código SMS"
              />
            </div>
          {/* 
            {load === true && (
              <div className="checkIcon">
                <CheckIcon />  
              </div>
            )} */}

            <ButtonDefault
              type="submit"
              loading={!load}  
            >
              Finalizar meu cadastro
            </ButtonDefault>
          </Form>
        </Main>
      </ContentBottom>
    </Container>
  );
}
