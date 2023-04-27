import QuickAction from '../../components/QuickAction/QuickAction'
import AnalyticsChart from '../../components/AnalyticsChart/AnalyticsChart'
import ClientList from '../../components/ClientList/ClientList'
import '../App.css'



export default function Dashboard() {

    return (
        <div className='dashboardBody'>
            <h1 className='dashboardTitle'>Dashboard</h1>

        <div className="mainContainer">
            <div className='quickViewContainer'>
                <QuickAction />
                <AnalyticsChart />
            </div>
            <div className='clientListContainer'>
                <ClientList />
            </div>
        </div>

            <div>
            <span>Calendar</span>
                <span>Billing</span>
            </div>
        </div>
    )
}