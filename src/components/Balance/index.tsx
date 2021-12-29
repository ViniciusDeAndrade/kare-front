import { FunctionComponent } from 'react'; 
import { 
    Grid, 
    Typography,
    Box
} from '@mui/material';
interface BalanceProps {
    
}
 
const Balance: FunctionComponent<BalanceProps> = () => {
    return (
        <Grid ml={9} container spacing={3} alignItems='center' justifyContent='center'>

            <Grid item xs={6}>
                <Box sx={{
                    width: 500,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography variant="h3" color="orangered">
                        Your current balance is
                    </Typography>
                    <Typography variant="h4">R$ 0,00</Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3" color="orangered">
                    Your investiments have accumulated
                </Typography>
                <Typography variant="h4">R$ 0,00</Typography>
            </Grid>
        </Grid>
    );
}
 
export default Balance;