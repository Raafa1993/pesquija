import styled from 'styled-components';

interface Props {
    openModal: boolean
    width?: string;
}

export const ContainerOverlay = styled.div<Props>`
  background: rgba(0, 0, 0, 0.8);
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%; 
    height: 50%;
    @media (max-width: 1100px) {
      height: 90%;
      overflow: auto;
    }
    @media (max-width: 425px) {
        justify-content: flex-start;
        margin-top: 80px;
        width: 90%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    width: 100%;
`;