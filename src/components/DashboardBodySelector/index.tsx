import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { profile } from 'console';
import { FunctionComponent } from 'react';
import Balance from '../Balance';

interface DashboardBodySelectorProps {
    render: "profile" | "balance"
}
 
const DashboardBodySelector: FunctionComponent<DashboardBodySelectorProps> = (props) => {
    const render = props.render;
    return (
        <Container>
            <Box sx={{ mt: 1 }}>

                {render == "profile" ? (
                    <div>foi profile</div>
                    ) 
                    : (
                        <Balance/>
                        )
                    }
            </Box>
        </Container>
    );
}
 
export default DashboardBodySelector;