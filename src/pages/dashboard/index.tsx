import { FunctionComponent } from 'react';

import DashboardHeader from '../../components/header';
import DashboardBodySelector from '../../components/DashboardBodySelector';

interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardBodySelector render="balance"/>
        </>
    );
}
 
export default Dashboard;