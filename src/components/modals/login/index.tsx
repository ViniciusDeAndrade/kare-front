import { 
    Modal,
    Box, 
    Typography, 
    Grid, 
    Input 
} from '@mui/material';
import { useState } from 'react';


import Botao from '../../button';
import { LoginProps } from '../../interfaces/LoginProps';


const handleChange = (fun: Function, value: String) => 
    fun(value);


const Login = (props: LoginProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return ( 
        <Modal
            open={props.show}
            onClose={() => props.hide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={
                {

                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }
            }>
                <Typography 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h2"
                >
                    Login
                </Typography>
                
                <Grid container spacing={4}>
                    
                    <Grid item xs={12}>
                        <Input 
                            fullWidth
                            value={email}
                            name="email"
                            placeholder="email"
                            type="email"
                            onChange={
                                event => handleChange(setEmail, event.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input 
                            fullWidth
                            value={password}
                            name="password"
                            placeholder="password"
                            type="password"
                            onChange={
                                event => handleChange(setPassword, event.target.value)
                            }
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Botao
                            o={
                                ({
                                    onClick: () => props.hide(),
                                    text: "cancel",
                                    color: "warning",
                                    variant: "outlined"
                                })
                            }
                            />
                    </Grid>

                    <Grid item xs={6}>
                        <Botao
                            o={
                                ({
                                    onClick: () => console.log(email, password),
                                    text: "login",
                                    color: "primary",
                                    variant: "contained"
                                })
                            }
                        />
                    </Grid>
                </Grid>
            </Box>

        </Modal>
     );
}
 
export default Login;