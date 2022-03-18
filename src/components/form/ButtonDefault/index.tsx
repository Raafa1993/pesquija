import React, { ButtonHTMLAttributes } from "react";
import { IconLoading } from "../../../icons/IconLoading";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  isQuestion?: boolean
}

export default function ButtonDefault({ loading, isQuestion, disabled, children, ...rest }: ButtonProps) {
  return (
    <Container
      isQuestion={isQuestion}
      disabled={disabled}
      isLoading={Number(loading)}
      {...rest}
    >
      {loading ? <IconLoading /> : children}
    </Container>
  )
}
