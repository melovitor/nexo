import styled from "styled-components"
import {EyeSlash} from '@phosphor-icons/react'

export const Container = styled.button`
    position: absolute;
    display: flex;
    border-style: none;
    background-color: transparent;    
    margin-right: 12px;
`


export const Icon = styled(EyeSlash)`
    color: rgba(0,0,0,.6);
    transition: .2s;
    &:active{
        color: black;
    }
    &:hover{
        color: black;
    }
`