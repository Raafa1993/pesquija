import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../../icons/ArrowLeftIcon";

import { Container } from "./styles";

export default function ButtonBackToPage({ ...rest }) {
  const navigate = useNavigate()
  return (
    <Container
      onClick={() => navigate(-1)}
      {...rest}
    >
      <ArrowLeftIcon />
    </Container>
  )
}
