import StartImg from "../../images/star.png";

import { Overlay, Container, SectionImage, SectionButtons } from "./styles";

interface ModalProps {
  id: string;
  note?: string;
  onClose: () => void;
  hadnleOnSetNote: (value: any) => void;
}

export default function ModalConfirmation({
  id,
  onClose,
  hadnleOnSetNote,
  note,
}: ModalProps) {
  const handleCloseModal = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  return (
    <Overlay 
        id={id}
        onClick={handleCloseModal}>
      <Container>
        <SectionImage>
          <img src={StartImg} alt="imagem estrela" />
        </SectionImage>

        <h1 className="titleModal">{`Você tem certeza que gostaria de classificar essa música com a nota ${
          note || "5"
        }?`}</h1>

        <SectionButtons>
          <button
            type="button"
            className="buttonModal cancel"
            onClick={onClose}
          >
            Não
          </button>

          <button
            type="button"
            className="buttonModal send"
            onClick={hadnleOnSetNote}
          >
            Sim
          </button>
        </SectionButtons>
      </Container>
    </Overlay>
  );
}
