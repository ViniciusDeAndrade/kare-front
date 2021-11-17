import { Button } from '@material-ui/core';
import { ButtonProps } from '../interfaces/ButtonProps';
import { StyledButton } from './styles';


function Botao (props: ButtonProps) {
    return (
        <StyledButton>
            <Button
            variant={props.o?.variant} 
            color={props.o?.color}
            onClick={event => props.o?.onClick("quero")}
            >
                {props.o?.text}
            </Button>
        </StyledButton>
        
    );
}

export default Botao;