import { profile } from 'console';
import { FunctionComponent } from 'react';
import Balance from '../Balance';

interface DashboardBodySelectorProps {
    render: "profile" | "balance"
}
 
const DashboardBodySelector: FunctionComponent<DashboardBodySelectorProps> = (props) => {
    const render = props.render;
    return (
        <div>{render == "profile" ? (
            <div>foi profile</div>
        ) 
        : (
            <Balance/>
          )
        }
        </div>
    );
}
 
export default DashboardBodySelector;