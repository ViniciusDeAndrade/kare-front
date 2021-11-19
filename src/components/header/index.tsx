import { HeaderStyled, ButtonAlign } from './styles';
import Botao from '../button';
import Typography  from '@material-ui/core/Typography';
import Popup from '../modals';
import Login from '../modals/login';
import { useState } from 'react';

const handleModal = (modalState: boolean, modalFunc: Function) => modalFunc(!modalState);

export default function Header () {
    const [modalLogin, showModalLogin] = useState(false);
    const [modalSignIn, showModalSignIn] = useState(false);

    return (
    
            <>
                <HeaderStyled>
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

                </HeaderStyled>

                <Login show={modalLogin} hide={showModalLogin} />     
                <Popup show={modalSignIn} hide={showModalSignIn}  title="Sign in" body="set your credentials"/>
                
            </>
        );
    }