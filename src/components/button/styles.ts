import styled from "styled-components";
import { Button } from "@material-ui/core";
import { ButtonProps } from '../interfaces/ButtonProps';


export const StyledButton = styled(Button)<ButtonProps>`
   color: ${props => props.color}
   variant: ${props => props.variant}
   margin: inherit;
`;