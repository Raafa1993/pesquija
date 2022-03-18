import { useHistory } from 'react-router-dom';

import {
    Container,
    Content,
} from "./styles";

export default function ExitPage() {
    return (
        <Container>
            <Content>
                <h1>
                    Obrigado por participar, mas infelizmente você não faz parte do perfil dessa pesquisa.😢😎
                </h1>
            </Content>
        </Container>
    );
}