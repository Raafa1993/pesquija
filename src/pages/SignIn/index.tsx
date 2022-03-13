import { useCallback, useRef, useState } from "react";

import getValidationErrors from "../../Utils/getValidationErrors";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import {
  Container,
  Content,
  Header,
  Main,
  SectionTitle,
  SectionForm,
} from "./styles";
import ButtonBackToPage from "../../components/form/ButtonBackToPage";
import InputForm from "../../components/form/InputForm";
import ButtonDefault from "../../components/form/ButtonDefault";

interface SignInFormData {
  name: string;
  phone: string;
}

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const { signIn } = useAuth();

  const [formData, setFormData] = useState<SignInFormData>({
    name: "",
    phone: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        setLoad(true);

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          phone: Yup.string().required("Telefone obrigatório"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          name: data.name,
          phone: data.phone,
        });

        setLoad(false);

        setTimeout(() => {
          history.push(`/confirmation`);
        }, 3000);
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
      <Content>
        <Header>
          <ButtonBackToPage />
        </Header>

        <Main>
          <SectionTitle>
            <h1>Parabéns!🎉</h1>
            <p>
              Agora basta preencher o cadastro abaixo para começar a participar de
              nossas pesquisas e{" "}
              <span className="colorHighlights">
                ganhar muitos e muitos prêmios
              </span>
              .
            </p>
          </SectionTitle>

          <SectionForm>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <InputForm
                  value={formData.name}
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  onChange={handleInputChange}
                />
              </div>

              <div className="field">
                <InputForm
                  value={formData.phone}
                  type="text"
                  name="phone"
                  mask="fone"
                  placeholder="Digite seu telefone"
                  onChange={handleInputChange}
                />
              </div>

              <ButtonDefault type="submit" disabled={load}>
                Entrar
              </ButtonDefault>

              <ButtonDefault 
                type="button"
                onClick={() => history.push('/register')}
              >
                Cadastre-se
              </ButtonDefault>
            </Form>
          </SectionForm>
        </Main>
        {/* <Footer>
          <h2>Com o seu cadastro você já ganha 20 pontos 💎️</h2>
        </Footer> */}
      </Content>
    </Container>
  );
}
