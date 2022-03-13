import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--background);
`

export const DashboardBottom = styled.div`
    width: 100vw;
    height: 70vh;
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
`

export const SurveyContainer = styled.div`
    width: 500px;
    height: 350px;
    border: 2px solid var(--yellow);
    border-radius: 1rem;
    background: #FFFBE6;
    padding: 30px;
    margin-top: 40px;

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
        margin-top: 20px;

        .companyPhoto {
            width: 150px;
            height: 150px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .details {

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
    }
`