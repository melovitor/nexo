import { ButtonStyle ,Content, Reference } from "./style"

type Props = {
    content: string
    reference: string
}

export function TextButton({content, reference}: Props){
    return(        
        <ButtonStyle onClick={() => {console.log('Link')}}>
            <Content>{content}</Content>
            <Reference>{reference}</Reference>
        </ButtonStyle>        
    )
}