import {useState} from 'react'
import { Buttons, Container, Header, Title, Wrapper } from "./style";
import IconClose from '../../assets/fechar.svg'
import { ModalInput } from '../ModalInput';
import { InOutButton } from '../InOutButton';



export function NewOrder(){   
    const [openNewOrder, setOpenNewOrder] = useState(false)


    return(
        <Wrapper >
            <Container>
                <Header>
                    <Title>Nova trasação</Title>
                    <img src={IconClose} onClick={() => {setOpenNewOrder(!openNewOrder)}} />
                </Header>
                <ModalInput placeholder='Titulo'/>
                <ModalInput placeholder='Valor'/>
                <Buttons>
                <InOutButton title='Entrada' status='IN'/>
                <InOutButton title='Saida' status='OUT'/>
                </Buttons>
                <ModalInput placeholder='Categoria'/>
            </Container>
        </Wrapper>
        
    )
}