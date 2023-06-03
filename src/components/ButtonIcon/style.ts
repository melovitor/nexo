import styled from "styled-components"
import {Gear} from '@phosphor-icons/react'

export const Container = styled.button`
    border-style: none;
    background-color: rgb(230, 230, 230);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`


export const Icon = styled(Gear)`
    color: rgba(0,0,0,.6);
    transition: .2s;
    &:active{
        color: black;
    }
    &:hover{
        color: black;
    }
`
