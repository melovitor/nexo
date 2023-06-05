import { Container, Wrapper, TextButton, Text } from "./style";

type Props = {
    handleDelete: () => void
    handleEdit: () => void
};

export function Menu({handleDelete, handleEdit}: Props){
    
    return(
        <Wrapper>
            <TextButton onClick={() => handleEdit()}> 
                <Text>
                    Editar
                </Text>
            </TextButton>
            <Container/>
            <TextButton onClick={() => handleDelete()}>
                <Text>
                    Deletar
                </Text>
            </TextButton>
        </Wrapper>
    )

}