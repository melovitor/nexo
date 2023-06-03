import { ButtonStyle ,Content, Reference } from "./style"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?: string
    reference?: string
}

export function TextButton({content, reference, ...rest}: Props){
    return(        
        <ButtonStyle {...rest}>
            <Content>{content}</Content>
            <Reference>{reference}</Reference>
        </ButtonStyle>        
    )
}