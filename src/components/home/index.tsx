import { FunctionComponent } from "react";
import {
    Grid, 
    Typography, 
    TextField,
    Box,
    Button,
    Link,
    Divider,
    Paper
} from '@mui/material';


interface WelcomePageProps {
    
}
 
const WelcomePage: FunctionComponent<WelcomePageProps> = () => {
    return ( 
        <Box ml={9} mt={10}>
            <Grid container spacing={2} alignItems="center" justifyContent="center" direction="row">
                <Grid item justifyContent='center' xs={6}>
                    <Typography variant="h1" color="orangered">Kare</Typography>
                    <Typography variant="h3">Your future. Our commitment</Typography>
                </Grid>
                <Grid item  justifyContent='center' alignItems="center">
                <Box sx={
                    {
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }
                }>
                        <Paper elevation={0}>

                            <TextField 
                                fullWidth
                                required
                                id="email"
                                label="Email"
                                type="email"
                                margin="normal"
                            />
                            <TextField 
                                fullWidth
                                required
                                id="password"
                                label="Password"
                                type="password"
                                margin='normal'
                            />
                            <Button 
                                onClick = {() =>alert('login')}
                                color = "primary"
                                variant= "contained"
                                fullWidth
                            > 
                                Login
                            </Button>

                            
                            <Divider style={{ margin: '10px' }} variant="middle"> 
                            <Typography variant='h6' component='h6' marginY='10px'>
                                <Link> forgot password? </Link>
                            </Typography>

                            </Divider>

                            <Button
                                color="success"
                                variant="contained"
                                fullWidth
                            >
                                Create new account
                            </Button>
                        </Paper>
                    </Box>
                </Grid>

            </Grid> 
        </Box>
    );
}
 
export default WelcomePage;