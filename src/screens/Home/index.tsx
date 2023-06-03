import {useState} from 'react'
import { CashFlow } from "../../components/CashFlow";
import { Header } from "../../components/Header";
import { InfoCards } from "../../components/InfoCards";
import { NewOrder } from "../../components/NewOrder";
import { CardsStyle, Wrapper } from "./style";

export function Home(){
    const [openNewOrder, setOpenNewOrder] = useState(false)

    return(
        <Wrapper>
            <Header/>
            <CardsStyle>
                <InfoCards title="Entrada" status={1} quantity={52423}/> 
                <InfoCards title="Saida" status={2} quantity={52423}/>
                <InfoCards title="Saldo" status={3} quantity={52423}/>
            </CardsStyle>
            <CashFlow onClick={() => {setOpenNewOrder(!openNewOrder)}}/>
            {openNewOrder ? <NewOrder /> : []}
            

        </Wrapper>
    )
}