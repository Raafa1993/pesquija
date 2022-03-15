import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface Props {
    isLoading: number;
    disabled?: boolean;
    isSelected?: boolean;
}

export const Container = styled.button<Props>`
    display: grid;
    place-items: center;
    width: 100%;
    height: 64px;

    background: rgba(2, 22, 35, 0.04);
    border: 1px solid #021623;
    border-radius: 16px;

    font-size: 1rem;
    line-height: 32px;
    font-weight: 600;
    color: #021623;

    transition: background-color 0.2s;

    /* &:hover {
      background: ${shade(0.1, '#021623')};
    } */

    ${props => props.isSelected && css`
      background: #021623;
      border: 1px solid #021623;
      color: var(--white);
    `}

    ${props => props.disabled && css`
      background: rgba(2, 22, 35, 0.04);
      color: #B5B5B5;
      border: 1px solid #B5B5B5;
      cursor: not-allowed;
      font-weight: 500;

      &:hover {
        background: rgba(2, 22, 35, 0.04);
      }
    `}

    /* cursor: ${({ isLoading }) => (isLoading ? 'not-allowewd' : 'pointer')} */
    
`;
