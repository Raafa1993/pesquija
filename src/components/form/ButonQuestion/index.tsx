import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

export default function ButonQuestion({ loading, disabled, children, ...rest }: ButtonProps) {
  return (
    <Container
      disabled={disabled}
      isLoading={Number(loading)}
      {...rest}
    >
     {children}
    </Container>
  )
}
