import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;

    background: transparent;
    border: none;

    &:hover {
      background: ${shade(0.2, '#021623')};
    }

`;
