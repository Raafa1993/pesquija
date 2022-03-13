import { useHistory } from "react-router-dom";
import { ArrowLeftIcon } from "../../../icons/ArrowLeftIcon";

import { Container } from "./styles";

export default function ButtonBackToPage({ ...rest }) {
  const history = useHistory()
  return (
    <Container
      onClick={() => history.goBack()}
      {...rest}
    >
      <ArrowLeftIcon />
    </Container>
  )
}
