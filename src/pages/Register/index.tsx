import { useCallback, useEffect, useRef, useState } from "react";
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
import Select from "../../components/form/Select";
import { useAuth } from "../../hooks/Auth";

export default function Register() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory()
  const [load, setLoad] = useState(true);
  const [sexo, setSexo] = useState([])
  const { signIn } = useAuth();

  useEffect(() => {
    api.get('/usuario-generos').then((res) => {
      setSexo(res.data.result)
    })
  }, [])

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true)

      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        email: Yup.string().required("Email obrigatório").email('Digite e-mail valido'),
        senha: Yup.string().required("Senha obrigatória").min(4, "Minimo 4 digitos"),
        confirmeSenha: Yup.string().required("Confirmação de senha obrigatória").oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais'),
        telefone: Yup.string().required("Telefone obrigatório").max(15).min(11, "Numero invalido"),
        nascimento: Yup.string().required("Data de nascimento obrigatório").min(9, "Preencha uma data valida"),
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
        telefone: telefone.replace('(', '').replace(')', '').replace(' ', ''),
        nascimento,
        genero,
      };

      await api.post('/usuario', newData);

      await signIn({
        email: newData.email,
        senha: newData.senha,
      });

      setLoad(false)
      setTimeout(() => {
        history.push(`/home`)
      }, 3000)

    } catch(err: any) {

      console.log(err)
      
      setLoad(true)
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        
        formRef.current?.setErrors(errors);
        return;
      }
      // alert(err.response.data.message)
      // setLoad(false)

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
                  name="email"
                  placeholder="Digite seu email"
                />
              </div>
              <div className="field">
                <InputForm
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  autoComplete="new-password"
                />
              </div>
              <div className="field">
                <InputForm
                  type="password"
                  name="confirmeSenha"
                  placeholder="Confirme sua senha"
                />
              </div>
              <div className="field">
                <InputForm
                  type="tel"
                  name="telefone"
                  mask="fone"
                  placeholder="Digite seu telefone"
                />
              </div>

              <div className="field">
                <InputForm
                  type="tel"
                  name="nascimento"
                  mask="date"
                  placeholder="Digite data de nascimento"
                />
              </div>

              <div className="field">
              <Select
                name="genero"
                placeholder="Selecione uma opção"
              >
                <option value="">Selecione uma opção</option>
                {sexo.map((row: any) => (
                  <option value={row.descricao}>{row.descricao}</option>
                ))}
              </Select>
                {/* <InputForm
                  type="text"
                  name="genero"
                  placeholder="Digite seu sexo"
                /> */}
              </div>

              <ButtonDefault
                type="submit"
                loading={!load}
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
