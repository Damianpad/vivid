import QuickAction from '../../../components/QuickAction/QuickAction'
import AnalyticsChart from '../../../components/AnalyticsChart/AnalyticsChart'
import ClientList from '../../../components/ClientList/ClientList'
import Calendar from '../../../components/Calendar/Calendar'
import { StyledDashboard } from './dashboard.style'
import '../../App.css'



export default function Dashboard() {

    return (
        <StyledDashboard>
        <div className='dashboardBody'>
            <h1 className='dashboardTitle'>Dashboard</h1>
        </div>
        <div className="mainContainer">
            
                <QuickAction />
                <AnalyticsChart />
                <Calendar />
           
        </div>
{/* 
        <div className="mainContainer">
            <div className='quickViewContainer'>
                <QuickAction />
                <AnalyticsChart />
                <Calendar />
            </div>
            <div className='clientListContainer'>
                <ClientList />
            </div>
        </div>

            <div>
                
                <span>Billing</span>
            </div> */}

        </StyledDashboard>

    )
}