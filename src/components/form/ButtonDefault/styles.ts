import { shade } from 'polished';
import styled from 'styled-components';

interface Props {
    isLoading: number;
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

    margin-top: 40px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#089BFF')};
    }

    cursor: ${({ isLoading }) => (isLoading ? 'not-allowewd' : 'pointer')}
    
`;
