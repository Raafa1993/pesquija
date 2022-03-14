import React, { useEffect, useState } from 'react';
import ButonQuestion from '../../components/form/ButonQuestion';
import ButtonBackToPage from '../../components/form/ButtonBackToPage';
import ButtonDefault from '../../components/form/ButtonDefault';
import ModalDefault from '../../components/Modal/Modal';

// IMAGES
import HeadphoneImg from "../../images/headphone.png";
import Star from '../../images/star.png'
import api from '../../services/api';

import {
  Container,
  ContentTop,
  Header,
  ContentBottom,
  Main,
} from "./styles";

export default function Question() {

  const [loading, setLoading] = useState<any>(true)
  const [questions, setQuestions] = useState<any>([])
  const [modal, setModal] =useState<boolean>(false)

  useEffect(() => {
    getSurveys()    
  }, [])

  async function getSurveys() {
    setLoading(true)
    const response = await api.get(`pesquisa`)
    setQuestions(response.data)
    setLoading(false)
    console.log(questions, 'log do questions 47')
  }
  
  return (
    <Container>
      <ContentTop >
        <Header>
          <div className="backToPage">
            <ButtonBackToPage />
          </div>              
            <div className='headerInfo'>
            <span>1 de 6</span>
              <h1>pesquisa</h1>
            </div>
          <div className="sectionImage">
            <img src={HeadphoneImg} alt="headphone" />
          </div>
        </Header>  
      </ContentTop>
      <ContentBottom>
        <Main>
          <div className="questions">
            <ButonQuestion onClick={() => setModal(true)}>
              1 a 2 vezes por semana
            </ButonQuestion>
            <ButonQuestion>
              2 a 3 vezes por semana
            </ButonQuestion>
            <ButonQuestion>
            Mais de 4 vezes por semana
            </ButonQuestion>
          </div>
        </Main>
      </ContentBottom>

      {
        modal && (
          <ModalDefault
            id="overlayModal"
            onClose={() => setModal(!modal)}
            openModal={modal}
          >
            <div className='modal'>
              <div className='image' style={{ backgroundImage: `url(${Star})`}} />
              <div className='title'>Você tem certeza que gostaria de classificar essa música com a <span>nota 5</span> ?</div>
              <div className='buttons'>
                <ButtonDefault 
                  className='no'
                  onClick={() => setModal(false)}
                >
                  Não  
                </ButtonDefault>
                <ButtonDefault className='yes'>
                  Sim  
                </ButtonDefault>
              </div>
            </div>
          </ModalDefault>
      )}
    </Container>
  );
}
