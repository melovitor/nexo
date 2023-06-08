import { useState} from 'react'
import { Buttons, Container, Header, Title, Wrapper, Button } from "./style";
import IconClose from '../../assets/fechar.svg'
import { ModalInput } from '../ModalInput';
import { InOutButton } from '../InOutButton';
import { format } from 'date-fns';
import Axios from 'axios'

type NewOrderProps = {
    handleClose: () => void;
    handleData: (data: any) => void;
    formTitle: string
    defaltValues?: object
};


export function NewOrder({ handleClose, handleData, formTitle, defaltValues}: NewOrderProps){   
    console.log(defaltValues)

    const [title, setTitle] = useState(defaltValues ? (defaltValues as { title: string }).title : '')
    const [amount, setAmount] = useState(defaltValues ? (defaltValues as { amount: string }).amount : '')
    const [category, setCategory] = useState(defaltValues ? (defaltValues as { category: string }).category : '')
    const [inValue, setInValue] = useState(false)
    const [outValue, setOutValue] = useState(false)
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy')

    function  handleCreateNewOrder(){
        if(!title || !amount || !category){
            alert('É necessário preencher todos os campos.');
            return
        } else if (!inValue && !outValue){
            alert('É necessário preencher todos os campos.');
            return
        }
        const data = {
            title: title,
            amount: amount,
            category: category,
            in: inValue,
            out: outValue,
            date: formattedDate
        }

        Axios.post("http://localhost:5174/transaction", {
          orders: data,
          isCreate: true,
          token: localStorage.getItem("isAuth")
        }).then((res) => {
          location.reload();
        })


        handleData(data)
        handleClose ?  handleClose() : []          
    }


    return(
        <Wrapper >
            <Container>
                <Header>
                    <Title>{formTitle}</Title>
                    <img src={IconClose} onClick={handleClose}/>
                </Header>
                <ModalInput 
                    placeholder='Titulo' 
                    value={defaltValues ? (defaltValues as { title: string }).title : ''} 
                    onChange={(e) => {setTitle(e.target.value)}}
                    defaultValue={defaltValues ? (defaltValues as { title: string }).title : ''} 
                />
                <ModalInput 
                    placeholder='Valor' 
                    type='number' 
                    value={defaltValues ? (defaltValues as { amount: string }).amount : ''} 
                    onChange={(e) => {setAmount(e.target.value)}}
                    defaultValue={defaltValues ? (defaltValues as { amount: string }).amount : ''} 
                />
                <Buttons>
                <InOutButton title='Entrada' status='IN'  onClick={() => {setInValue(!inValue)}}/>
                <InOutButton title='Saida' status='OUT'  onClick={() => {setOutValue(!outValue)}} />
                </Buttons>
                <ModalInput 
                    placeholder='Categoria' 
                    value={defaltValues ? (defaltValues as { category: string }).category : ''} 
                    onChange={(e) => {setCategory(e.target.value)}}
                    defaultValue={defaltValues ? (defaltValues as { category: string }).category : ''}
                />
                <Button onClick={handleCreateNewOrder}>
                    <text>Cadastrar</text>
                </Button>
            </Container>
        </Wrapper>
        
    )
}