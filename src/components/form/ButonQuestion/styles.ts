import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface Props {
    isLoading: number;
    disabled?: boolean;
}

export const Container = styled.button<Props>`
    display: grid;
    place-items: center;
    width: 100%;
    height: 64px;

    background: rgba(255, 214, 0, 0.04);
    border: 1px solid #FFD600;
    border-radius: 16px;

    font-size: 1rem;
    line-height: 32px;
    font-weight: 500;
    color: var(--black);

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, '#FFD600')};
    }

    ${props => props.disabled && css`
      background: #364046;
      color: #778189;
      border: 1px solid #364046;
      cursor: not-allowed;

      &:hover {
        background: #364046;
      }
    `}

    /* cursor: ${({ isLoading }) => (isLoading ? 'not-allowewd' : 'pointer')} */
    
`;
