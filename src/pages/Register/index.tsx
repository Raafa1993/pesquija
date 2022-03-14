import { useCallback, useRef, useState } from "react";
import ButtonBackToPage from "../../components/form/ButtonBackToPage";
import ButtonDefault from "../../components/form/ButtonDefault";
import InputForm from "../../components/form/InputForm";
import getValidationErrors from "../../Utils/getValidationErrors";
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  Container,
  Content,
  Header,
  Main,
  SectionTitle,
  SectionForm,
  Footer,
} from "./styles";
import api from '../../services/api';

export default function Register() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory()
  const [load, setLoad] = useState(false);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true)
      
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        email: Yup.string().required("Email obrigatório"),
        senha: Yup.string().required("Senha obrigatória"),
        confirmeSenha: Yup.string().required("Confirmação de senha obrigatória"),
        telefone: Yup.string().required("Telefone obrigatório"),
        nascimento: Yup.string().required("Data de nascimento obrigatório"),
        genero: Yup.string().required("Genero obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
  
      const { nome, email, senha, confirmeSenha, telefone, nascimento, genero }: any =  data;
  
      const newData = {
        nome,
        email,
        senha,
        confirmeSenha,
        telefone,
        nascimento,
        genero,
      };

      localStorage.setItem('@Pesquija:user', JSON.stringify(newData));
      const response = await api.post('usuario', newData);
      localStorage.setItem('@Pesquija:id_usuario', JSON.stringify(response.data.result.id_usuario));
     
      setLoad(false)
      // alert('Cadastro realizado com sucesso!')

      setTimeout(() => {
        history.push(`/confirmation`)
      }, 3000)

    } catch(err: any) {
      setLoad(false)

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      // alert(err.response.data.message)
    }

  }, [history])

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
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="field">
                <InputForm
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                />
              </div>
              <div className="field">
                <InputForm
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="field">
                <InputForm
                  type="password"
                  name="confirmeSenha"
                  placeholder="confirme sua senha"
                />
              </div>
              <div className="field">
                <InputForm
                  type="text"
                  name="telefone"
                  // mask="fone"
                  placeholder="Digite seu telefone"
                />
              </div>

              <div className="field">
                <InputForm
                  type="text"
                  name="nascimento"
                  mask="date"
                  placeholder="Digite data de nascimento"
                />
              </div>

              <div className="field">
                <InputForm
                  type="text"
                  name="genero"
                  placeholder="Digite seu sexo"
                />
              </div>

              <ButtonDefault
                type="submit"
                disabled={load}
              >
                  Finalizar meu cadastro
                </ButtonDefault>
            </Form>
          </SectionForm>
          <Footer>
            <h2>Com o seu cadastro você já ganha 20 pontos 💎️</h2>
          </Footer>
        </Main>
      </Content>
    </Container>
  );
}
