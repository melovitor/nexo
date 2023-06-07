import {useState, useEffect} from 'react'
import { CashFlow } from "../../components/CashFlow";
import { Header } from "../../components/Header";
import { InfoCards } from "../../components/InfoCards";
import { NewOrder } from "../../components/NewOrder";
import { CardsStyle, Wrapper } from "./style";
import { useNavigate } from "react-router-dom"
import Axios from 'axios'

export function Home(){ 
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false)
    const [openNewOrder, setOpenNewOrder] = useState(false)
    const [ordersData, setOrdersData] = useState<any[]>([])
    const [inTotal, setInTotal] = useState(0)
    const [outTotal, setOutTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const interval = 7200000; // Verificação de login a cada duas horas


    function verifyLogin() {
        Axios.post("http://localhost:5174/home", {
            token: localStorage.getItem("isAuth"),
        }).then((res) => {
            if(!res.data) setLogout(true)
        })
        
    }
    setInterval(verifyLogin, interval);    
    
    if(logout){
        localStorage.setItem("isAuth", '')
        navigate('/signin')
    }


    function closeNewOrder() {   
        setOpenNewOrder(!openNewOrder)
    }

    function handleData(data: any) {
        setOrdersData([...ordersData, data])
    }

    function inValuer(value: number){
        setInTotal(value)
    } 

    function outValuer(value: number){
        setOutTotal(value)
    } 

    useEffect(() => {
        const totalAmount = inTotal - outTotal;
        setTotal(totalAmount);
      }, [inTotal, outTotal]);

    return(
        <Wrapper>
            <Header handleLogout={() => {setLogout(true)}}/>
            <CardsStyle>
                <InfoCards title="Entrada" status={1} quantity={inTotal}/> 
                <InfoCards title="Saida" status={2} quantity={outTotal}/>
                <InfoCards title="Saldo" status={3} quantity={total}/>
            </CardsStyle>
            <CashFlow onClick={() => {setOpenNewOrder(!openNewOrder)}} data={ordersData} inAmount={inValuer} outAmount={outValuer}/>
            {openNewOrder ? <NewOrder formTitle='Nova trasação' handleData={handleData} handleClose={closeNewOrder}/> : []}           
        </Wrapper>
    )
}