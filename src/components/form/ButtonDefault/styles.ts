import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface Props {
    isLoading: number;
    disabled?: boolean;
    isQuestion?: boolean;
}

export const Container = styled.button<Props>`
    display: grid;
    place-items: center;
    width: 100%;
    height: 64px;

    background: #089BFF;
    border: none;
    border-radius: 16px;

    font-size: 1rem;
    line-height: 32px;
    font-weight: 600;
    color: var(--white);

    /* margin-top: 40px; */
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#089BFF')};
    }

    ${props => props.disabled && css`
      background: #364046;
      color: #778189;
      cursor: not-allowed;

      &:hover {
        background: #364046;
      }
    `}

    ${props => props.isQuestion && css`
      background: var(--green);

      &:hover {
        background: ${shade(0.2, '#1BA039')};
      }
    `}

    /* cursor: ${({ isLoading }) => (isLoading ? 'not-allowewd' : 'pointer')} */
    
`;
