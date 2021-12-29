import { FunctionComponent } from 'react';
import { 
    Link,
    Grid
} from "@mui/material";

interface DashboardHeaderProps {
    
}

const items = [
    {name : "Profile", href: ""},
    {name : "Balance", href: ""}
]

 
const DashboardHeader: FunctionComponent<DashboardHeaderProps> = () => {
    return (
        <Grid container >
            <Grid item xs={12}>
                <div style={{marginBottom: '10px', padding: "20px", backgroundColor: "gray"}}>
                    {items.map(
                        (item) =>  <Link 
                            margin='20px'
                            color="textPrimary"
                            variant='button'
                            underline='none'
                            href={item.href}> 
                                    {item.name}
                            </Link>
                        )
                    } 
                </div>
            </Grid>
        </Grid>
    );
}
 
export default DashboardHeader;