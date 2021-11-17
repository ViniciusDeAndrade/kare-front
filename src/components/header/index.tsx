import { Section, ButtonAlign } from './styles';
import Botao from '../button';
import Typography  from '@material-ui/core/Typography';
import Popup from '../modal';
import { useState } from 'react';

const handleModal = (modalState: boolean, modalFunc: Function) => modalFunc(!modalState);

export default function Header () {
    const [modalLogin, showModalLogin] = useState(false);
    const [modalSignIn, showModalSignIn] = useState(false);
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
                        onClick: () => handleModal(modalLogin, showModalLogin)
                    })
                }/>
                <Botao o={
                    ({
                        onClick: () => handleModal(modalSignIn, showModalSignIn),
                        text:"sign up", 
                        color:"primary", 
                        variant:"outlined"
                    })
                }/>
            </ButtonAlign>
            {
                modalLogin && (<Popup show={modalLogin} hide={showModalLogin} title="Login" body="enter your credentials"/>)
            }

            {
                modalSignIn && (<Popup show={modalSignIn} hide={showModalSignIn}  title="Sign in" body="set your credentials"/>)
            }

        </Section>
    
        );
    }