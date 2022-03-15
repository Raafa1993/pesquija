import { useCallback, useEffect, useState } from "react";

import HeadphoneImg from "../../images/headphone.png";

import { Container, ContentTop, Header, ContentBottom, Main } from "./styles";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { useHistory } from "react-router-dom";
import ButtonRadio from "../form/ButtonRadio";
import Songs from "../Songs/Songs";
import api from "../../services/api";
import Radio from "../form/Radio";

interface ButtonsProps {
  load: boolean;
  data: any;
  isImage: boolean;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: any) => void;
  handleOnChange: (value: any) => void;
}

export default function Questions({
  load,
  data,
  currentPage,
  totalPages,
  setCurrentPage,
  isImage,
  handleOnChange
}: ButtonsProps) {
  const history = useHistory();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [radioSelected, setRadioSelected] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    itemsCheck: [],
    itemsRadio: 0,
  })

  const [error, setError] = useState({
    error: false,
    message: ''
  })

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
    
    // setFormData({...formData, ['items']: selectedItems})
    
  }

  function hadnleOnRadio(item: any) {
    setRadioSelected(item)

    setFormData({...formData, 'itemsRadio': item})
  }


  console.log("FORMDATA", formData)

  const handleSubmit = useCallback(async (event: any) => {
    try {
      event.preventDefault();
      setLoading(true)

      if (formData.itemsCheck.length <= 0)
        throw {
          message: "Selecione uma opção",
        };

      if (formData.itemsRadio < 0)
        throw {
          message: "Selecione uma opção",
      };


      setLoading(false)

      setCurrentPage(currentPage + 1)

    } catch (e: any) {
      setTimeout(() => {
        setError({
          error: true,
          message: e.message,
        });
        setLoading(false)
      }, 1000);
    }
  }, [history]
  )
  

  console.log(radioSelected)

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
          {isImage && (
            <div className="sectionImage">
              <img src={HeadphoneImg} alt="headphone" />
            </div>
          )}
        </Header>
      </ContentTop>
      <ContentBottom>
        <Main>
          <form onSubmit={handleSubmit}>

          <div className="questions">
            {load ? (
              <div>Carregando</div>
            ) : (
              <>
                {data.tipo === 'checkbox' && (
                  data.opcoes.map((row: any, key: any) => (
                    <Radio
                      key={key}
                      options={[
                        {
                          label: row,
                          value: key,
                        },
                      ]}
                      value={radioSelected}
                      onChange={(value) => hadnleOnRadio(value)}
                    />
                  ))
                )}

                {data.tipo === 'radio' && (
                  data.opcoes.map((row: any, key: any) => (
                    <ButtonRadio
                      key={key}
                      isSelected={selectedItems.includes(key) ? true : false}
                      onClick={() => handleSelectItem(key)}
                    >
                      {row}
                    </ButtonRadio>
                  ))
                )}

                {data.tipo === 'subRange' && (
                  data.opcoes.map((row: any, key: any) => (
                    <Songs
                      row={row}
                      image={row.image}
                      title={row.title}
                      subTitle={row.subTitle}
                      music={row.caminho}
                    />
                  ))
                )}
              </>
            )}
          </div>
            {currentPage + 1 === totalPages ? (
              <div className="finalQUestion">
                <button
                  className="buttonFinalQuestion"
                  onClick={() => history.push('/fim-pesquisa')}
                >
                  Finalizar pesquisa
                </button>
              </div>
            ) : (
              <div className="footerQuestion">
                <button
                  type="submit"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="buttonNextpage"
                >
                  <ArrowLeftIcon />
                </button>
              </div>
            )}
          </form>
        </Main>
      </ContentBottom>
    </Container>
  );
}
