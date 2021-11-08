import { ButtonProps } from '../interfaces/ButtonProps';
import { StyledButton } from './styles';

const click = () => alert('cliquei novamente');

function Botao (props: ButtonProps) {
    return (
        <StyledButton
            variant={props.o?.variant} 
            color={props.o?.color} 
            onClick={click}
        >
            {props.o?.text}
        </StyledButton>
    );
}

export default Botao;