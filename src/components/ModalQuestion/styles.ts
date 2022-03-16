import styled from 'styled-components';

interface Props {
    id: string,

}

export const Overlay = styled.div<Props>`
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 85%;

  background: var(--white);
  border-radius: 12px 12px 0 0;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 600px;
  margin: 0 auto;




  .titleModalQuestion {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #021623;
  }

`

export const SectionImage  = styled.div`
  display: flex;
  width: 120px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-0%, -50%);

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
