import QuickAction from '../../components/QuickAction/QuickAction'
import AnalyticsChart from '../../components/AnalyticsChart/AnalyticsChart'
import '../App.css'



export default function Dashboard() {

    return (
        <div className='dashboardBody'>
            <h1 className='dashboardTitle'>Dashboard</h1>

            <div>
                <QuickAction />
            </div>
            <div>
                <AnalyticsChart />
                <span>Calendar</span>
                <span>Billing</span>
            </div>
            <div>

            </div>
        </div>
    )
}