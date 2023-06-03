import { Container, Wrapper, TextButton, Text } from "./style";

export function Menu(){

    return(
        <Wrapper>
            <TextButton onClick={() => {console.log('Text')}}>
                <Text>
                    Editar
                </Text>
            </TextButton>
            <Container/>
            <TextButton>
                <Text>
                    Deletar
                </Text>
            </TextButton>
        </Wrapper>
    )

}