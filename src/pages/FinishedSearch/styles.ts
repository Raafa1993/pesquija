import styled from "styled-components";

export const Continaer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: var(--background);
`

export const ContentTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 60%; */
    height: 100vh; // manter enquanto está sem a div bottom

`;

export const ContentBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40%;
    background-color: var(--white);

`;

export const SectionTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    height: 100%;
    position: relative;

    .confetti {
            left: 50% !important;
            transform: translateX(-50%);
            position: absolute;
            height: 100%;
            z-index: 50;
        }

    .cardTrophy {
        /* display: grid;
        place-items: center; */
        
        img {
            width: 200px;
            object-fit: cover;
        }
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-bottom: 12px;

    .titleFinished {
        /* width: 320px; */
        width: 380px;
        font-weight: 600;
        font-size: 1.375rem;
        line-height: 32px;
        text-align: center;
        color: var(--white);
        margin-top: 12px;
    }

    .diamondFinished {
        font-size: 3rem;
        text-align: center;
    }

    .pontsFinished {
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 29px;
        text-align: center;
        color: var(--white);
        letter-spacing: -1px;

        span {
            font-size: 2rem;
            line-height: 44px;
            letter-spacing: -1px;
        }
    }

    .paragraphyFinished {
        font-weight: 600;
        /* font-size: 0.75rem; */
        font-size: 1rem;
        line-height: 24px;
        text-align: center;
        color: #FFD600;
    }

    .flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width: 1400px) and (min-width: 1300px) {
        .flex {
            flex-direction: row;
            margin-bottom: 20px;
        }
        .titleFinished {
            text-align: left;
        }
    }
`;

export const SectionBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    height: 100%;
    gap: 8px;
`;

export const CardQuestionFinished = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 100%;
    height: 160px;
    padding: 1.75rem;

    background: #FFFBE6;
    border: 1px solid #FFD600;
    border-radius: 16px;

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
            width: 4.75rem;
            height: 4.75rem;
            border-radius: 50%;
            background-color: var(--blue);
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


