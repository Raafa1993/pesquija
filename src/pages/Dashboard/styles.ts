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
        flex-direction: row;
        gap: 2rem;
        padding-top: 3rem;
    }
`

export const DashboardBottom = styled.div`
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
        .research {
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
`

export const Researches = styled.div`
    display: flex;
    gap: 1.25rem;
    margin-top: 1.25rem;
    height: 25rem;
    .unlocked,
    .locked {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        height: 22rem;
        overflow-y: auto;
        .companyImage {
            width: 3.125rem;
            height: 3.125rem;
            background-size: cover;
            background-position: center;
            border-radius: 50%;
        }
        .companyImage2 {
            width: 3.125rem;
            height: 3.125rem;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
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
        background: var(--gray-100);
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
        .researchName {
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
        .unlocked,
        .locked {
            height: calc(21rem - 8rem);
        }
    }   
`