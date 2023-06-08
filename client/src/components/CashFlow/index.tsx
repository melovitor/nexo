import {useState, useEffect} from 'react'
import { Button } from "../Button";
import { Orders } from "../Orders";
import { Header, Input, Wrapper, Container, Sessions, StatusSession, SearchStyle, Icon, ListEmpty } from "./style";
import { NewOrder } from '../NewOrder';
import Axios from 'axios'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    data: any 
    inAmount: (value: number) => void;   
    outAmount: (value: number) => void;   
}

export function CashFlow({ data, inAmount, outAmount,...rest }: Props) {
    const [orders, setOrders] = useState<any[]>(data);
    const [isEdit , setIsEdit] = useState(false)
    const [editOrder , setEditOrder] = useState(Object)
    const [search, setSearch] = useState(String)

    useEffect(() => {
      Axios.post("http://localhost:5174/transaction", {
        token: localStorage.getItem("isAuth")
      }).then((res) => {
        setOrders(res.data);
      });
    }, []);
  
    
    const inValues = orders.filter((item: { in: any; }) => item.in_status);
    const inTotalAmount = inValues.reduce((acc: number, item: { amount: string; }) => {
    const amount = parseFloat(item.amount) || 0;
    return acc + amount;
    }, 0);

    const outValues = orders.filter((item: { out: any; }) => item.in_status == 0);
    const outTotalAmount = outValues.reduce((acc: number, item: { amount: string; }) => {
    const amount = parseFloat(item.amount) || 0;
    return acc + amount;
    }, 0);

    inAmount(inTotalAmount)
    outAmount(outTotalAmount)

    function handleDelete(id: number){
        const order = orders[id].idtransaction
        Axios.post("http://localhost:5174/transaction", {
          data: order,
          isDelete: true,
          token: localStorage.getItem("isAuth")
        }).then((res) => {
          location.reload();
        })
    };
    function handleEdit(index: number){ 
        setIsEdit(true)
        setEditOrder(orders[index])
    };
        
    return (
      <Wrapper>
        <Header>
          <SearchStyle>
            <Icon/>
            <Input placeholder="Perquisar" onChange={(e) => {setSearch(e.target.value)}} value={search} />
          </SearchStyle>
          <Button title="+ Nova transação" {...rest} />
        </Header>
        <Container>
          <StatusSession />
          <Sessions>
            <text>Título</text>
          </Sessions>
          <Sessions>
            <text>Valor</text>
          </Sessions>
          <Sessions>
            <text>Categoria</text>
          </Sessions>
          <Sessions>
            <text>Data</text>
          </Sessions>
          <StatusSession>
            <text>Ações</text>
          </StatusSession>
        </Container>
        { !orders ? 
        <ListEmpty>
          <text>Para iniciar o controle das suas finanças, adicione uma nova transação.</text>
        </ListEmpty> : 
        orders.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()))
        .map((item: any, index: any) => (
          <Orders
            key={index}
            id={index}
            amount={item.amount}
            category={item.category}
            date={item.date}
            status={item.in_status ? 'in' : 'out'}
            title={item.title}
            onDeletedValue={handleDelete}
            onEditValue={handleEdit}
          />
        ))}
        {isEdit ?
          <NewOrder formTitle='Editar trasação' handleClose={() => {setIsEdit(false)}} defaltValues={editOrder}/>
          : []
        }
      </Wrapper>
    );
  }
  

