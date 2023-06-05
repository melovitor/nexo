import {useState, useEffect} from 'react'
import { Button } from "../Button";
import { Orders } from "../Orders";
import { Header, Input, Wrapper, Container, Sessions, StatusSession, SearchStyle, Icon } from "./style";
import { NewOrder } from '../NewOrder';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    data: any 
    inAmount: (value: number) => void;   
    outAmount: (value: number) => void;   
}

export function CashFlow({ data, inAmount, outAmount, ...rest }: Props) {
    const [orders, setOrders] = useState<any[]>([]);
    const [isEdit , setIsEdit] = useState(false)
    const [editableKey , setEditableKey] = useState(Number)
    const [search, setSearch] = useState(String)

    useEffect(() => {
        setOrders(data);
    }, [data]);
  
    const inValues = data.filter((item: { in: any; }) => item.in);
    const inTotalAmount = inValues.reduce((acc: number, item: { amount: string; }) => {
    const amount = parseFloat(item.amount) || 0;
    return acc + amount;
    }, 0);

    const outValues = data.filter((item: { out: any; }) => item.out);
    const outTotalAmount = outValues.reduce((acc: number, item: { amount: string; }) => {
    const amount = parseFloat(item.amount) || 0;
    return acc + amount;
    }, 0);

    inAmount(inTotalAmount)
    outAmount(outTotalAmount)

    function handleDelete(value: number){
        setOrders(data.splice(value, 1))
    };
    function handleEdit(value: number){ 
        setIsEdit(true)
        setEditableKey(value)
    };

    function handleValue(item: { title: string, amount: string, category: string, in: boolean, out: boolean }){ 
      const { title, amount, category, in: isIn, out: isOut } = item;

      data[editableKey].title = title
      data[editableKey].amount = amount
      data[editableKey].category = category
      data[editableKey].in = isIn
      data[editableKey].out = isOut
    }  

    
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
        {data.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()))
        .map((item: any, index: any)   => (
          <Orders
            key={index}
            id={index}
            amount={item.amount}
            category={item.category}
            date={item.date}
            status={item.in ? 'in' : 'out'}
            title={item.title}
            onDeletedValue={handleDelete}
            onEditValue={handleEdit}
          />
        ))}
        {isEdit ?
          <NewOrder formTitle='Editar trasação' handleClose={() => {setIsEdit(false)}} handleData={handleValue} defaltValues={data[editableKey]}/>
          : []
        }
      </Wrapper>
    );
  }
  

