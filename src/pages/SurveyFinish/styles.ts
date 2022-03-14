import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: var(--background);
`

export const DashboardTop = styled.div`
    width: 60rem;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    .trophy {
        width: 170px;
        height: 230px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .confetti {
            left: 50% !important;
            transform: translateX(-50%);
        }
    }
    h3 {
        font-size: 22px;
        line-height: 32px;
        color: var(--white);
        font-weight: 500;
        span {
            font-weight: 800;
        }
    }
    .gem {
        display: flex;
        flex-direction: column;
        font-size: 75px;
        align-items: center;

        p {
            font-size: 24px;
            font-weight: 800;
            color: var(--white);
            span {
                font-size: 36px;
                font-weight: 800;
                color: var(--white);
            }
        }
    }
    .emoji {
        margin-top: 0.625rem;
        font-size: 1rem;
        font-weight: 600;
        color: var(--yellow);
    }

    @media (max-width: 1400px) {
        padding: 40px 20px 20px 20px;
        .gem {
            font-size: 35px;
            p {
                font-size: 20px;
                font-weight: 800;
                color: var(--white);
                span {
                    font-size: 32px;
                    font-weight: 800;
                    color: var(--white);
                }
            }
        }
    }
    @media (max-width: 1000px) {
      
    }
`

export const DashboardBottom = styled.div`
    width: 60rem;
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    padding-top: 20px;
    position: fixed;
    bottom: 0;
    background: var(--white);
    
    button {
        margin-top: 15px;
        width: 500px;
        background: var(--blue);
    }
    @media(max-width: 1400px) {
        height: 40vh;
        padding: 10px 2.5rem;
        .warning {
            width: 180px;
            height: 180px;
            margin-top: -70px; 
        }
        .infos {
            padding-top: 35px;
        }
        button {
            height: 65px;
        }
    }
    @media(max-width: 1000px) {
        width: 100%;
        button {
            width: 100%;
        }
    }
`

export const SurveyContainer = styled.div`
    width: 500px;
    height: 350px;
    border: 2px solid var(--yellow);
    border-radius: 1rem;
    background: #FFFBE6;
    padding: 30px;
    margin-top: 10px;

    h3 {
        text-transform: uppercase;
        color: var(--black);
        span {
            font-weight: 800;
        }
    }
    p {
        font-weight: 400;
        color: var(--black);
    }

    .surveyDetails {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;

        .companyPhoto {
            width: 75px;
            height: 75px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 50%;
        }

        .minutes,
        .stars {
            height: 50px;
            border-radius: 8px;
            margin-bottom: 10px;
            padding: 15px;
            text-align: center;
            color: var(--white);
        }
        .minutes,
        .stars {
            background: var(--blue);
        }  
    }
    @media(max-width: 1400px) {
        overflow-y: scroll;
        margin-top: 10px;
        height: 200px;        
    }

    @media(max-width: 1000px) {
        width: 100%;
        height: 70%;
        .surveyDetails {
            margin-top: 20px;
        }
    }
`