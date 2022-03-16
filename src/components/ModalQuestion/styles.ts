import styled from 'styled-components';

interface Props {
    id: string,
    openModal: boolean,
}

export const Overlay = styled.div<Props>`
  background: rgba(0, 0, 0, 0.8);
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => props.openModal ? 'flex' : 'none'};
  justify-content: center;
  align-items: end;
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 80%;

  background: var(--white);
  border-radius: 12px 12px 0 0;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;

  .titleModalQuestion {
    font-weight: 600;
    font-size: 1rem;
    line-height: 19px;
    text-align: center;
    color: #021623;
    margin-top: 48px;
  }

  .subTitleModalQuestion {
    font-weight: 600;
    font-size: 1rem;
    line-height: 19px;
    text-align: center;
    color: #021623;
    margin-top: 14px;
  }

  button {
    margin-top: 20px;
  }

`

export const SectionImage  = styled.div`
  display: flex;
  width: 120px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -260%);

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const CardQuestion = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 1.375rem;

    background: #FFFBE6;
    border: 1px solid #FFD600;
    border-radius: 16px;
    margin-top: 2rem;

    .headerCardFinished {
        display: flex;
        flex-direction: column;


        .titleCardFinished {
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 17px;
            color: var(--black);

            span {
                text-transform: uppercase;
                font-weight: 800;
            }
        }

        .paragraphyCardFinished {
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 15px;
            color: var(--black);
            margin-top: 8px;

        }
    }

    .mainCArdFinished {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        margin-top: 12px;


        .imageCardFinished {
            display: grid;
            place-items: center;
            width: 112px;
            height: 112px;
            border-radius: 50%;
            /* background-color: var(--blue); */
        }

        .buttonsCardFinished {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 8px;

            .buttonTimeCardFinished {
                display: grid;
                place-items: center;

                padding: 0 15px;
                height: 32px;

                background: var(--black);
                border-radius: 8px;

                text-align: center;

                font-weight: 600;
                font-size: 0.75rem;
                line-height: 32px;
                color: var(--white);
            }
        }

    }

`