import { Section, ButtonAlign } from './styles';
import Botao from '../button';
import Typography  from '@material-ui/core/Typography';

const login = (querer: string) => alert(`${querer} fazer login`);

const signIn = (querer: string) => alert(`${querer} me cadastrar`);

export default function Header () {
    return (
        <Section>
            <Typography variant="h6" gutterBottom component="div">
                {/* <img src={kare} alt="Kare"/> */}
                Kare Project
            </Typography >
            <ButtonAlign>
                <Botao o={
                    ({
                        text:"login", 
                        color:"primary", 
                        variant:"contained",
                        onClick: login
                    })
                }/>
                <Botao o={
                    ({
                        onClick: signIn,
                        text:"sign up", 
                        color:"primary", 
                        variant:"outlined"
                    })
                }/>
            </ButtonAlign>
        </Section>
        );
    }