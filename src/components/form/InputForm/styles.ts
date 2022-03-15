import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;

  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid #ffffff;
  padding: 16px 24px;
  width: 100%;
  height: 56px;

  transition: all 0.3s;

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

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    font-size: 16px;
    color: var(--white);
    font-weight: 500;
    text-align: center;
    outline: none;
    &::placeholder {
      color: #666360;
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
