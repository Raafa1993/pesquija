import { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonDefault from "../../Components/form/ButtonDefault";
import InputSms from "../../Components/form/InputSms";
import getValidationErrors from "../../Utils/getValidationErrors";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

// IMAGES
import FaceEmoji from "../../images/faceEmoji.png";
import { CheckIcon } from "../../icons/CheckIcon";

import {
  Container,
  ContentTop,
  ContentBottom,
  Header,
  SectionImage,
  Main,
} from "./styles";

export default function Confirmation() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const user = JSON.parse(window.localStorage.getItem("@Pesquija:user") as any);

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});
        setLoad(false);

        const schema = Yup.object().shape({
          code: Yup.string().required("Código obrigatório").max(6).min(6),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { code }: any = data;

        const newData = {
          token: code
          // user: user
        };

        console.log(newData);

        localStorage.setItem('@Pesquija:token', JSON.stringify(newData));

        // const response = await api.post("/usuario", newData);
        // console.log(response.data)

        setLoad(true);
        // alert('Cadastro realizado com sucesso!')

        setTimeout(() => {
          history.push(`/home`)
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
          <h1>{`${user.name }, seu cadastro foi finalizado com sucesso! ✅`}</h1>

          <SectionImage>
            <img src={FaceEmoji} alt="Emoji" />
          </SectionImage>
        </Header>
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
                placeholder="Código SMS"
              />
            </div>
{/* 
            {load === true && (
              <div className="checkIcon">
                <CheckIcon />  
              </div>
            )} */}

            <ButtonDefault type="submit">
              Finalizar meu cadastro
            </ButtonDefault>
          </Form>
        </Main>
      </ContentBottom>
    </Container>
  );
}
