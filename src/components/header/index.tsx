import { useState } from 'react';
import { Typography }  from '@mui/material';
import { useRouter } from 'next/router';
import Btn from '../button';
import Login from '../modals/login';
import { HeaderStyled, ButtonAlign } from './styles';


const handleModal = (modalState: boolean, modalFunc: Function) => modalFunc(!modalState);

export default function Header () {
    const router = useRouter();
    const [modalLogin, showModalLogin] = useState(false);

    return (
            <>
                <HeaderStyled>
                    <Typography variant="h6" gutterBottom component="div">
                        {/* <img src={kare} alt="Kare"/> */}
                        Kare Project
                    </Typography >
                    <ButtonAlign>
                        <Btn o={
                            ({
                                text:"login", 
                                color:"primary", 
                                variant:"contained",
                                onClick: () => handleModal(modalLogin, showModalLogin)
                            })
                        }/>
                        <Btn o={
                            ({
                                onClick: () => router.push('/Signup'),
                                text:"sign up", 
                                color:"primary", 
                                variant:"outlined"
                            })
                        }/>
                    </ButtonAlign>

                </HeaderStyled>

                <Login show={modalLogin} hide={showModalLogin} />     
                
            </>
        );
    }