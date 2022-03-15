import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--background);
`

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 2.5rem;

    .userImage {
        background-position: center;
        background-size: cover;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .name {
        margin-top: 0.625rem;
        font-size: 1.4rem;
        color: var(--white);
        font-weight: 800;
    }
    .phone {
        color: var(--blue);
        font-size: 1.2rem;
    }
    span {
        margin-top: 0.625rem;
        font-size: 1rem;
        font-weight: 600;
        color: var(--yellow);
    }
    @media (max-width: 1400px) {
        gap: 2rem;
        padding-top: 3rem;
        flex-direction: row;
    }
    @media(max-width: 1000px) {
        flex-direction: column;
        span {
            width: 90%;
        }
    }
`

export const DashboardBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 60vh;
    padding: 2.5rem;
    border-radius: 1.375rem 1.375rem 0 0;
    position: fixed;
    bottom: 0;
    background: var(--white);
    .status {
        display: flex;
        gap: 2.5rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-top: -2.5rem;
        .points,
        .survey {
            background: #FFFBE6;
            border: 2px solid var(--yellow);
            border-radius: 1rem;
            width: 14.063rem;
            padding: 1.25rem;
            p {
                text-transform: uppercase;
                font-size: .75rem;
                font-weight: 500;
            }
            span {
                font-size: 1.375rem;
                font-weight: 800;
                color: var(--black);
            }
        }
    }
    .title {
        margin-top: 2.5rem;
        h3 {
            color: var(--black);
            text-transform: uppercase;
        }
        p {
            font-size: .875rem;
            font-weight: 400;
            margin-top: .625rem;
        }

    }
    @media(max-width: 1000px) {
        .status {
            gap: 10px;
            .points, 
            .survey{
                width: 12rem;
                height: 6rem;
                padding: 1rem;
                p {
                    margin-bottom: 10px;
                }
            }
        }
    }
`

export const Surveys = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1.25rem;
    height: 30rem;
    .unlocked {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 24rem;
        overflow-y: auto;
        .companyImage {
            width: 3.125rem;
            height: 3.125rem;
            background-size: cover;
            background-position: center;
            border-radius: 50%;
        }
    }
    .column {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1.25rem;
        width: 100%;
        height: 4.375rem;
        margin-bottom: 10px;
        border-radius: 1rem;
        button {
            padding: .938rem;
            border-radius: 1rem;
            outline: none;
            transition: ease-in-out .2s;
        }
        button.ok {
            border: 2px solid var(--green);
            background: #f3f9f4;
            color: var(--green);
            &:hover{
                background: #9ee7aa;
                color: var(--white);
            }
        }
        button.block {
            border: 2px solid var(--red);
            background: #f7f2f2;
            color: var(--red);
            cursor: not-allowed;
        }
        .surveyName {
            p {
                color: var(--black);
                font-weight: 400;
            }
            span {
                color: var(--blue);
                font-weight: 800;
            }
        }
    }
    @media (max-width: 1400px) {
        width: 100%;
        overflow: auto;
    }   
`