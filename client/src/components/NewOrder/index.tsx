import { useState} from 'react'
import { Buttons, Container, Header, Title, Wrapper, Button } from "./style";
import IconClose from '../../assets/fechar.svg'
import { ModalInput } from '../ModalInput';
import { InOutButton } from '../InOutButton';
import { format } from 'date-fns';
import Axios from 'axios'

type NewOrderProps = {
    handleClose: () => void;
    formTitle: string
    defaltValues?: object
};


export function NewOrder({ handleClose, formTitle, defaltValues}: NewOrderProps){   
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
            idtransaction: defaltValues ? defaltValues.idtransaction : '',
            title: title,
            amount: amount,
            category: category,
            in: inValue,
            out: outValue,
            date: formattedDate
        }

        

        Axios.post("http://localhost:5174/transaction", {
          data,
          isCreate: defaltValues ? false : true,
          isEdit: defaltValues ? true : false,
          token: localStorage.getItem("isAuth")
        }).then((res) => {
          location.reload();
        })

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
                    onChange={(e) => {setTitle(e.target.value)}}
                    defaultValue={title} 
                />
                <ModalInput 
                    placeholder='Valor' 
                    type='number' 
                    onChange={(e) => {setAmount(e.target.value)}}
                    defaultValue={amount} 
                />
                <Buttons>
                <InOutButton title='Entrada' status='IN'  onClick={() => {setInValue(!inValue)}}/>
                <InOutButton title='Saida' status='OUT'  onClick={() => {setOutValue(!outValue)}} />
                </Buttons>
                <ModalInput 
                    placeholder='Categoria' 
                    onChange={(e) => {setCategory(e.target.value)}}
                    defaultValue={category}
                />
                <Button onClick={handleCreateNewOrder}>
                    <text>Cadastrar</text>
                </Button>
            </Container>
        </Wrapper>
        
    )
}