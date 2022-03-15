import { useState } from "react";

import HeadphoneImg from "../../images/headphone.png";

import { Container, ContentTop, Header, ContentBottom, Main } from "./styles";
import ButonQuestion from "../form/ButonQuestion";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { useHistory } from "react-router-dom";
import ButtonRadio from "../form/ButtonRadio";

interface ButtonsProps {
  load: boolean;
  data: any;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: any) => void;
  hadnleOnNextPage: (value: any, key: any) => void;
}

export default function Questions({
  load,
  data,
  currentPage,
  totalPages,
  setCurrentPage,
  hadnleOnNextPage,
}: ButtonsProps) {
  const history = useHistory();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  function handleOnPreviusPage() {
    if (currentPage === 0) {
      history.push("/home");
    }

    setCurrentPage(currentPage - 1);
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  return (
    <Container>
      <ContentTop>
        <Header>
          <div className="backToPage">
            <button className="buttonBackToPage" onClick={handleOnPreviusPage}>
              <ArrowLeftIcon />
            </button>
          </div>
          <div className="headerInfo">
            <span>{`${currentPage + 1} de ${totalPages}`}</span>
            <h1>{data.pergunta}</h1>
          </div>
          {/* <div className="sectionImage">
            <img src={HeadphoneImg} alt="headphone" />
          </div> */}
        </Header>
      </ContentTop>
      <ContentBottom>
        <Main>
          <div className="questions">
            {load ? (
              <div>Carregando</div>
            ) : (
              <>
                {data.tipo === "checkbox"
                  ? data.opcoes.map((row: any, key: any) => (
                      <ButonQuestion onClick={() => hadnleOnNextPage(row, key)}>
                        {row}
                      </ButonQuestion>
                    ))
                  : data.opcoes.map((row: any, key: any) => (
                      <ButtonRadio
                        key={key}
                        isSelected={selectedItems.includes(key) ? true : false}
                        onClick={() => handleSelectItem(key)}
                      >
                        {row}
                      </ButtonRadio>
                    ))}

                {data.opcoes.map((row: any) => {})}
              </>
            )}
          </div>
          {data.tipo === 'radio' && (
            <div className="footerQuestion">
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="buttonNextpage">
                <ArrowLeftIcon />
              </button>
            </div>
          )}
        </Main>
      </ContentBottom>
    </Container>
  );
}

