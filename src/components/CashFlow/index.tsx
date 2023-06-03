import {useState} from 'react'
import { Button } from "../Button";
import { Orders } from "../Order";
import { Header, Input, Wrapper, Container, Sessions, StatusSession } from "./style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CashFlow({...rest}:Props){
    
   
    return(
        <Wrapper>            
            <Header>
                <Input placeholder="Perquisar"/>
                <Button title="+ Nova transação" {...rest}/>
            </Header>
            <Container>
                <StatusSession/>
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
            <Orders amount={13241} category="Trabalho" date="17/05/2023" status="in" title="Job de dev" />
            <Orders amount={213412} category="Trabalho" date="17/05/2023" status="out" title="Job de dev"/>
            <Orders amount={213412} category="Trabalho" date="17/05/2023" status="in" title="Job de dev"/>
            
        </Wrapper>
    )

}