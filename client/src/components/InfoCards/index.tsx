import { Header, Quantity, Title, Wrapper } from "./style";
import InIcon from "../../assets/entrada.svg"
import OutIcon from "../../assets/saída.svg"
import TotalIcon from "../../assets/total.svg"

type Props = {
    title: string
    status: number
    quantity: number
}

export function InfoCards({title, status, quantity}:Props){
    var iconStatus
    if(status === 1){
        iconStatus = InIcon
    } else if(status === 2){
        iconStatus = OutIcon
    } else{
        iconStatus = TotalIcon
    }

    function formatCurrency(number: number) {
        return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      }
      

    return(
        <Wrapper status={status}>
            <Header>
                <Title status={status}>{title}</Title>
                    <img src={iconStatus}/>
            </Header>
            <Quantity status={status}>{formatCurrency(quantity)}</Quantity>
        </Wrapper>
    )

}