import React, { ButtonHTMLAttributes } from "react";
import { IconLoading } from "../../../icons/IconLoading";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

export default function ButtonDefault({ loading, disabled, children, ...rest }: ButtonProps) {
  return (
    <Container
      disabled={disabled}
      isLoading={Number(loading)}
      {...rest}
    >
      {loading ? <IconLoading /> : children}
    </Container>
  )
}
