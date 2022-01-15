import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment, FunctionComponent } from 'react';

import Balance from '../Balance';
import LeftMenu from '../LeftMenu';

interface DashboardBodySelectorProps {
    render: "profile" | "balance"
}
 
const DashboardBodySelector: FunctionComponent<DashboardBodySelectorProps> = (props) => {
    const render = props.render;
    return (
        <Fragment >
            <LeftMenu />
            <Container>
                <Box sx={{ mt: 1 }}>

                    {render == "profile" ? (
                        <div>foi profile</div>
                        ) : (
                        <Balance/>
                        )
                    }
                </Box>
            </Container>
        </Fragment>
    );
}
 
export default DashboardBodySelector;