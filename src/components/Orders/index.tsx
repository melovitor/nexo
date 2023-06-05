import {useState} from 'react'
import { Sessions, StatusSession, Wrapper } from "./style";
import { ButtonIcon } from "../ButtonIcon";
import InIcon from "../../assets/entrada.svg"
import OutIcon from "../../assets/saída.svg"
import { Menu } from '../Menu';


type Props ={
    status: 'in' | 'out'
    title: string
    amount: number
    category: string
    date: string
    id: number
    onDeletedValue: (value: number) => void;
    onEditValue: (value: number) => void;
}


export function Orders({status, title, amount, category, date, id, onDeletedValue, onEditValue}:Props){
    const [isOpen, setIsopen] = useState(false)  

    amount = Number(amount)
    const formattedAmount = amount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    function handleDeleteOrder (){
        onDeletedValue(id)
        setIsopen(!isOpen)
    }
    function handleEditOrder (){
        onEditValue(id)
        setIsopen(!isOpen)
    }

    return(
        <Wrapper >
            <StatusSession>
                {status === 'in' ? <img src={InIcon} alt="In icon"/> : <img src={OutIcon} alt="Out icon"/>}                
            </StatusSession>
                <Sessions>
                    <text>{title}</text>
                </Sessions>
                <Sessions>
                    <text>{formattedAmount}</text>
                </Sessions>
                <Sessions>
                    <text>{category}</text>
                </Sessions>
                <Sessions>
                    <text>{date}</text>
                </Sessions>
                <StatusSession>
                    <ButtonIcon  onClick={() => setIsopen(!isOpen)} />
                </StatusSession>  
                {isOpen ? <Menu  handleEdit={handleEditOrder} handleDelete={handleDeleteOrder}/>: [] }
        </Wrapper>
   
    )
}