import {useState, useEffect} from 'react'
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
}


export function Orders({status, title, amount, category, date}:Props){
    const [isOpen, setIsopen] = useState(false)

    function formatCurrency(number: number) {
        return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
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
                    <text>{formatCurrency(amount)}</text>
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
                {isOpen ? <Menu/>: [] }
        </Wrapper>
   
    )
}