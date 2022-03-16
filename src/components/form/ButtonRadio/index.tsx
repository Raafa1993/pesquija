import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  isSelected?: boolean
}

export default function ButtonRadio({ loading, isSelected, disabled, children, ...rest }: ButtonProps) {
  return (
    <Container
      className="animate__animated animate__zoomIn"
      type="button"
      isSelected={isSelected}
      disabled={disabled}
      isLoading={Number(loading)}
      {...rest}
    >
     {children}
    </Container>
  )
}
