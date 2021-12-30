import { FunctionComponent } from 'react';
import { 
    AccountCircle,
    Search
} from '@mui/icons-material';
import { 
    Autocomplete,
    TextField,
    Box,
    Typography
} from "@mui/material";
import { HeaderStyled, ToolBarStyled } from './styles';

interface DashboardHeaderProps {
    
}

const items = [
    {name : "Profile", href: ""},
    {name : "Balance", href: ""}
];

 {/* {items.map(
                        (item) =>  <Link 
                            margin='20px'
                            color="textPrimary"
                            variant='button'
                            underline='none'
                            href={item.href}> 
                                    {item.name}
                            </Link>
                        )
                    }  */}

 
const DashboardHeader: FunctionComponent<DashboardHeaderProps> = () => {
    return (
        <HeaderStyled position='sticky' >
            <ToolBarStyled >
                    <Typography variant="h3" color="orangered">Kare</Typography>
                    <Autocomplete 
                        options={items.map(item => item.name)}
                        sx={ {width:400} }
                        renderInput={params => (
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField {...params} id="input-with-sx" label="Search" variant="standard" />
                            </Box>
                            
                        )}
                    />
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large'/>
            </ToolBarStyled>
        </HeaderStyled>
    );
}
 
export default DashboardHeader;