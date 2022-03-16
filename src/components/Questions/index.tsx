import { useCallback, useEffect, useState } from "react";

import HeadphoneImg from "../../images/headphone.png";

import { Container, ContentTop, Header, ContentBottom, Main } from "./styles";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { useHistory, useParams } from "react-router-dom";
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

interface RespostaAPI {
  id_pergunta?: any,
  resposta?: {
    respostas: [any]
  }
}

interface DTOForApi {
  id_pesquisa: any,
  respostaPesquisa: [RespostaAPI]
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
  const params:any = useParams()
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [radioSelected, setRadioSelected] = useState<any>(false)
  const [loading, setLoading] = useState(false)

  const [positionAudio, setPositionAudio] = useState<number>(0)

  const [formData, setFormData] = useState<any>({
    itemsCheck: [],
    itemsRadio: false,
  })

  const [DTOForApi, setDTOForApi] = useState<DTOForApi>({
    id_pesquisa: params.id,
    respostaPesquisa: [] as any
  })

  const [DTOForSongs, setDTOForSongs] = useState<any[]>([])

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

  function handleSelectItem(item: any) {
    
    const alreadySelected = selectedItems.filter(obj => obj.value === item.value).length

    if (alreadySelected > 0) {
      const filteredItems = selectedItems.filter((obj) => obj.value !== item.value);
      setSelectedItems(filteredItems);
      formData.itemsCheck = filteredItems
    } else {
      setSelectedItems([...selectedItems, item]);
      formData.itemsCheck.push(item)
    }

    setFormData({...formData})
    
  }

  function hadnleOnRadio(item: any) {
    setRadioSelected(item)

    setFormData({...formData, 'itemsRadio': item})
  }

  const handleSubmitNext = useCallback(async (event: any) => {
    try {

      event.preventDefault();
      setLoading(true)

      if (data.tipo === 'radio' && formData.itemsCheck.length <= 0)
        throw "Selecione alguma opção"

      if (data.tipo === "checkbox" && formData.itemsRadio === false )
        throw "Selecione uma opção"

      setLoading(false)
      setCurrentPage(currentPage + 1)

      const respostaPesquisa:any = DTOForApi.respostaPesquisa.filter(obj => obj.id_pergunta === data.id_pergunta)

      if ( respostaPesquisa.length === 0 ) {
        
        if ( data.tipo === 'checkbox' ) {

          DTOForApi.respostaPesquisa.push({
            id_pergunta: data.id_pergunta,
            resposta: {
              respostas: [formData.itemsRadio.label]
            }
          })

        } else if ( data.tipo === 'radio' ) {

          const arrayCheckbox:any = []

          formData.itemsCheck.map((row:any) => {
            arrayCheckbox.push(row.value)
          })

          DTOForApi.respostaPesquisa.push({
            id_pergunta: data.id_pergunta,
            resposta: {
              respostas: arrayCheckbox
            }
          })
        }
      } else {

        if ( data.tipo === 'checkbox' ) {

          const questions:any = DTOForApi.respostaPesquisa.filter(obj => obj.id_pergunta !== data.id_pergunta)
          DTOForApi.respostaPesquisa = questions

          DTOForApi.respostaPesquisa.push({
            id_pergunta: data.id_pergunta,
            resposta: {
              respostas: [formData.itemsRadio.label]
            }
          })

        } else if ( data.tipo === 'radio' ) {

          const arrayCheckbox:any = []

          formData.itemsCheck.map((row:any) => {
            arrayCheckbox.push(row.value)
          })

          const questions:any = DTOForApi.respostaPesquisa.filter(obj => obj.id_pergunta !== data.id_pergunta)
          DTOForApi.respostaPesquisa = questions

          DTOForApi.respostaPesquisa.push({
            id_pergunta: data.id_pergunta,
            resposta: {
              respostas: arrayCheckbox
            }
          })
        }

      }

      setDTOForApi({...DTOForApi})
      resetForm()

    } catch (e: any) {
      alert(e)
    }
  }, [data, formData]
  )

  function resetForm()
  {

    const formDataDefault = {
      itemsCheck: [],
      itemsRadio: false,
    }

    setRadioSelected(false)
    setSelectedItems([])
    setFormData({...formDataDefault})

  }

  function handleOnFinish()
  {

    try {
<<<<<<< HEAD
      const newDTOForAPI:any = DTOForApi.respostaPesquisa.filter((obj:any) => obj.id_pergunta !== data.id_pergunta)
  
      newDTOForAPI.push({
        id_pergunta: data.id_pergunta,
        resposta: {
          respostas: DTOForSongs
        }
      })

    } catch(e) {
      console.log(e)
    }

=======

      if ( data.tipo === 'subRange' && (data.opcoes.length !== DTOForSongs.length) ) throw "Avalie todas as músicas antes de finalizar."

      const newDTOForAPI:any = DTOForApi.respostaPesquisa.filter((obj:any) => obj.id_pergunta !== data.id_pergunta)

      newDTOForAPI.push({
        id_pergunta: data.id_pergunta,
        resposta: {
          respostas: DTOForSongs
        }
      })

      const response:any = api.post('resposta', {
        id_pesquisa: params.id,
        respostaPesquisa: newDTOForAPI
      })
>>>>>>> 177c4677b1d448cc2bfd5fb5463b31923da61377

      history.push(`/fim-questao/${params.id}`)

    } catch ( err: any ) {
      alert(err)
    }

  }

  function handleOnOption(item: {key: number, rating: number, title: string}) 
  {

    const newDTO:any[] = DTOForSongs
    newDTO[item.key] = item.rating
    setDTOForSongs([...newDTO])
   
  }

  console.log(DTOForSongs.length)
  console.log(data.opcoes.length)

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
          <form>

          <div className="questions">
   
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
                      value={radioSelected.value}
                      onChange={() => hadnleOnRadio({
                        label: row,
                        value: key,
                      })}
                    />
                  ))
                )}

                {data.tipo === 'radio' && (
                  data.opcoes.map((row: any, key: any) => (
                    <ButtonRadio
                      key={key}
                      isSelected={selectedItems.filter(obj => obj.value === key).length ? true : false}
                      onClick={() => handleSelectItem({
                        label: row,
                        value: key
                      })}
                    >
                      {row}
                    </ButtonRadio>
                  ))
                )}

                {data.tipo === 'subRange' && (
                  data.opcoes.map((row: any, key: any) => (
                    <Songs
                      image={row.image}
                      title={row.title}
                      subTitle={row.subTitle}
                      music={row.caminho}
                      index={key}
                      key={key}
                      handleOnOption={(item) => handleOnOption(item)}
                      handleOnPlay={() => console.log('')}
                      positionAudio={positionAudio}
                      setPositionAudio={setPositionAudio}
                    />
                  ))
                )}
          </div>
            {currentPage + 1 === totalPages ? (
              <div className="finalQUestion">
                <button
                  className="buttonFinalQuestion"
                  onClick={handleOnFinish}
                  type="button"
                >
                  Finalizar pesquisa
                </button>
              </div>
            ) : (
              <div className="footerQuestion">
                <button
                  type="submit"
                  onClick={handleSubmitNext}
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
