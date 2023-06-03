import { Container, TextInput} from "./style"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder: string
    direct?: string
    type?: string
}

export function ModalInput({label, placeholder, type, ...rest}: Props){

    return(
        <Container {...rest}>
            <TextInput placeholder={placeholder} type={type}/>
        </Container>
    )   
}