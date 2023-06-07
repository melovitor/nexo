import { Container, TextInput} from "./style"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder: string
    direct?: string
    type?: string
    defaultValue?: string
}

export function ModalInput({label, placeholder, type, defaultValue ,...rest}: Props){

    return(
        <Container {...rest}>
            <TextInput placeholder={placeholder} type={type} defaultValue={defaultValue}/>
        </Container>
    )   
}