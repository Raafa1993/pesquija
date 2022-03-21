import { useCallback, useEffect, useState } from "react";

import HeadphoneImg from "../../images/headphone.png";

import { Container, ContentTop, Header, ContentBottom, Main } from "./styles";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { useHistory, useParams } from "react-router-dom";
import ButtonRadio from "../form/ButtonRadio";
import Songs from "../Songs/Songs";
import api from "../../services/api";
import Radio from "../form/Radio";
import { useToasts } from 'react-toast-notifications';

interface ButtonsProps {
  load: boolean;
  data: any;
  isImage: boolean;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: any) => void;
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
}: ButtonsProps) {
  const history = useHistory();
  const params:any = useParams()
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [radioSelected, setRadioSelected] = useState<any>(false)
  const [loading, setLoading] = useState(false)
  const [play, setPlay] = useState<any>(null)
  const { addToast } = useToasts();

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

  function handleOnLogout() {
    
    window.localStorage.removeItem('@Pesquija:user');
    window.localStorage.removeItem('@Pesquija:token');
    history.push('/exit');
    window.location.reload();

  } 

  const handleSubmitNext = useCallback(async (event: any) => {
    try {
      event.preventDefault();
      setLoading(true)

      if (data.tipo === 'radio' && formData.itemsCheck.length <= 0)
        throw "Selecione alguma opção"
      
      //Check for this specific question that only works with two answers selecteds
      if (data.tipo === 'radio' && data.id_pergunta === 15 && formData.itemsCheck.length !== 2)
        throw "Selecione duas opções"

      //Check for this specific question that stop works when an specific answer is selected
      if (data.tipo === "checkbox" && data.id_pergunta === 7 && formData.itemsRadio.value === 4) {
        handleOnLogout()
        throw "Obrigado por responder."
      }
      
      //Check for this specific question that stop works when an specific answer is selected
      if (data.tipo === "radio" && data.id_pergunta === 10 && formData.itemsCheck[0].value === 4) {
        handleOnLogout()
        throw "Obrigado por responder."
      }

      //Check for this specific question that stop works when an specific answer is selected
      if (data.tipo === "checkbox" && data.id_pergunta === 12 && formData.itemsRadio.value === 5) {
        handleOnLogout()
        throw "Obrigado por responder."
      }
     
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
      addToast(e, { appearance: 'error' });
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

      setPlay(false)
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

  const [shuffled, setShuffled] = useState<any>()

  useEffect(() => {
    shuffler()
  }, [data])


  function shuffler() {
    if (data.tipo === 'subRange') {
      const shuffle = (arr: any) => [...arr].sort(() => Math.random() - 0.5);
      const newList = shuffle(data.opcoes);
      setShuffled(newList)
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
                    shuffled.map((row: any, key: any) => (
                    <Songs
                      image={row.image}
                      title={row.title}
                      subTitle={row.subTitle}
                      music={row.caminho}
                      index={key}
                      key={key}
                      handleOnOption={(item) => handleOnOption(item)}
                      positionAudio={positionAudio}
                      setPositionAudio={setPositionAudio}
                      play={play}
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
