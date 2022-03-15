import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: var(--background);
`

export const DashboardBottom = styled.div`
    width: 60rem;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    border-radius: 1.375rem 1.375rem 0 0;
    position: fixed;
    bottom: 0;
    background: var(--white);
    .warning {
        width: 300px;
        height: 300px;
        margin-top: -130px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .infos {
        width: 65%;
        text-align: center;
        padding-top: 60px;
        p {
            font-size: 1rem;
            font-weight: 600;
            color: var(--black);
            margin-bottom: 10px;
        }
        span {
            font-size: 1rem;
            font-weight: 800;
            text-decoration: underline;
            text-underline-offset: 3px;
            color: var(--black);
            cursor: pointer;
        }
    }

    button {
        margin-top: 10px;
        width: 500px;
        background: var(--green);
    }
    @media(max-width: 1400px) {
        height: 70vh;
        .warning {
            width: 180px;
            height: 180px;
            margin-top: -70px; 
        }
        .infos {
            padding-top: 55px;
        }
        button {
            height: 55px;
        }
    }
    @media(max-width: 1000px) {
        width: 100%;
        padding-bottom: 1rem;
        .infos {
            width: 90%;
        }
        button {
            width: 110%;
            height: 95px;
            margin-top: 35px;
        }
    }
`

export const SurveyContainer = styled.div`
    width: 500px;
    height: 320px;
    border: 2px solid var(--yellow);
    border-radius: 1rem;
    background: #FFFBE6;
    padding: 30px;
    margin-top: 40px;

    h3 {
        text-transform: uppercase;
        color: var(--black);
        font-weight: 600;
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
        margin-top: 20px;

        .companyPhoto {
            width: 150px;
            height: 150px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 50%;
        }

        .minutes,
        .stars,
        .points {
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
        .points {
            display: flex;
            align-items: center;
            background: var(--black);
            padding: 0 15px;
            .gem {
                font-size: 2rem;
                margin-right: 10px;
            }
        }        
    }
    @media(max-width: 1400px) {
        overflow-y: scroll;
        margin-top: 10px;
        /* height: 280px; */
    }
    @media(max-width: 1000px) {
        width: 110%;
        margin-top: 35px;
        padding: 15px;
        .surveyDetails {
            margin-top: 30px;
            .companyPhoto {
                width: 110px;
                height: 110px;
            }
        }
    }
`