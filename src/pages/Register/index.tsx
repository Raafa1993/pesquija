import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import ButtonBackToPage from "../../components/form/ButtonBackToPage";
import ButtonDefault from "../../components/form/ButtonDefault";
import InputForm from "../../components/form/InputForm";
import {
  Container,
  Content,
  Header,
  SectionTitle,
  SectionForm,
  Footer,
} from "./styles";

export default function Register() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    sexo: "",
  });

  const handleIsFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);
  }, []);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, phone, date, sexo } = formData;

    const data = {
      name,
      phone,
      date,
      sexo,
    };

    // await api.post('create', data)

    await alert(`usuario cadastrado ${JSON.stringify(data)}`);
  }

  return (
    <Container>
      <Content>
        <Header>
          <ButtonBackToPage />
        </Header>
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
          <form onSubmit={handleSubmit}>
            <div className="field">
              <InputForm
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                onChange={handleOnChange}
              />
            </div>
            <div className="field">
              <InputForm
                type="text"
                name="phone"
                mask="fone"
                placeholder="Digite seu telefone"
                onChange={handleOnChange}
              />
            </div>

            <div className="field">
              <InputForm
                type="text"
                name="date"
                mask="date"
                placeholder="Digite data de nascimento"
                onChange={handleOnChange}
              />
            </div>

            <div className="field">
              <InputForm
                type="text"
                name="sexo"
                placeholder="Digite seu sexo"
                onChange={handleOnChange}
              />
            </div>

            <ButtonDefault type="submit">Finalizar meu cadastro</ButtonDefault>
          </form>
        </SectionForm>
        <Footer>
          <h2>Com o seu cadastro você já ganha 20 pontos 💎️</h2>
        </Footer>
      </Content>
    </Container>
  );
}
