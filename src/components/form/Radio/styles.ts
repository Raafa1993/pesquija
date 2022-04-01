import styled, { css } from "styled-components";

interface Props {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Label = styled.label<Props>`
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
    color: var(--black);
    cursor: pointer;

    ${props => props.isSelected && css`
      background: #021623;
      color: var(--white);
    `}

    /* &:hover {
      background: rgba(2, 22, 35, 0.04);
    } */

  input {
    position: absolute;
    transition: scale(0);
    appearance: none;
  }

  .radioButton {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid var(--liteGray);

  }

  .radioButtonInner {
    display: block;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--green);
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    transition: all 0.35s;

  }

  .radioLabel {
    font-size: 0.937rem;
    color: var(--black);
    ${props => props.isSelected && css`
      color: var(--white);
    `}
  }


  input:checked ~ .radioLabel {
    /* color: red; */
  }
`;
