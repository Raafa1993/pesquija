import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused?: boolean;
  isField?: boolean;
  isDisabled?: Boolean;
  isErrored: boolean;
}

export const Label = styled.label<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  font-size: 1rem;
  /* color: var(--darkBlack); */
  font-weight: 600;
  /* text-transform: capitalize; */

  /* ${(props) =>
    props.isFocused &&
    css`
      color: var(--green);
    `}

    ${(props) =>
    props.isField &&
    css`
      color: var(--green);
    `} */
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid #ffffff;
  padding: 16px 24px;
  width: 100%;
  height: 56px;
  position: relative;

  ${(props) =>
    props.isFocused &&
    css`
      background: rgba(27, 160, 57, 0.04);
      border-color: var(--green);
    `}

  ${(props) =>
    props.isField &&
    css`
      background: rgba(27, 160, 57, 0.04);
      border: 1px solid var(--green);
    `}

    ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid #c53030;
    `}

  select {
    appearance: none;
    width: 100%;
    height: 50px;
    padding: 14px 14px;
    font-size: 1rem;
    background: transparent;
    border: none;
    border-radius: 2px;
    outline: none;
    color: var(--dark);
    z-index: 5;
    text-align: center;

    &::placeholder {
      color: #959595;
      font-size: 14px;
    }

    ${(props) =>
      props.isDisabled &&
      css`
        cursor: not-allowed;
        opacity: 0.4;
      `}
  }

  svg {
    position: absolute;
    right: 4%;
    top: 40%;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    path {
      stroke: #474747;
    }
  }
`;

export const Error = styled.div`
  display: flex;
  position: absolute;
  right: 6px;
  top: -17px;
  * {
    animation: fadeInUp 0.4s linear;
  }
  span {
    font-size: 12px;
    font-weight: 600;
    color: #c53030;
  }
`;
