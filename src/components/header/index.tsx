import { Section, ButtonAlign } from './styles';
import Botao from '../button';

export default function Header () {
    return (
        <Section>
            <div>
                {/* <img src={kare} alt="Kare"/> */}
                Kare Project
            </div>
            <ButtonAlign>
                <Botao o={
                    ({
                        text:"sign in", 
                        color:"primary", 
                        variant:"contained"
                    })
                }/>
                <Botao o={
                    ({
                        text:"sign up", 
                        color:"primary", 
                        variant:"outlined"
                    })
                }/>
            </ButtonAlign>
        </Section>
        );
    }