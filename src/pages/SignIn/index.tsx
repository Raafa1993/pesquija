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
import Emoji from 'a11y-react-emoji';

interface SignInFormData {
  email: any;
  senha: any;
}

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const { signIn } = useAuth();

  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    senha: "",
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
          email: Yup.string().required("Email obrigatório").email('Digite e-mail valido'),
          senha: Yup.string().required("Senha obrigatório"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          senha: data.senha,
        });

        setLoad(false);
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
            <h1>Faça seu login! <Emoji className="gem" symbol="🎁" label="gift" />  </h1>
            <p>
              Você está apenas à alguns cliques de{" "}
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
                  value={formData.email}
                  name="email"
                  placeholder="Digite seu email"
                  onChange={handleInputChange}
                />
              </div>

              <div className="field">
                <InputForm
                  value={formData.senha}
                  type="password"
                  name="senha"
                  // mask="fone"1
                  placeholder="Digite sua senha"
                  onChange={handleInputChange}
                />
              </div>

              <ButtonDefault type="submit" disabled={load}>
                Entrar
              </ButtonDefault>

              <ButtonDefault 
                className="register"
                type="button"
                onClick={() => history.push('/register')}
              >
                Cadastre-se
              </ButtonDefault>
            </Form>
          </SectionForm>
        </Main>
      </Content>
    </Container>
  );
}
