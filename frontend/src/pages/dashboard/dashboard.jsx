import QuickAction from '../../../components/QuickAction/QuickAction'
import AnalyticsChart from '../../../components/AnalyticsChart/AnalyticsChart'
import ClientList from '../../../components/ClientList/ClientList'
import ClientCard from '../../../components/ClientCard/ClientCard'
import Calendar from '../../../components/Calendar/Calendar'
import EngagementChart from '../../../components/EngagementChart/EngagementChart'
import { StyledDashboard } from './dashboard.style'
import SearchBar from '../../../components/SearchBar/SearchBar'
import '../../App.css'



export default function Dashboard() {

    return (
        <StyledDashboard>
        <div className='dashboardHeader'>
            <h1 className='dashboardTitle'>Dashboard</h1>
                <section className='subContainer'>
                    <h2 className='dashboardSubTitle'>Welcome Back Damian!</h2>
                    <SearchBar />
                </section>
            <hr class="custom-line"/>
            
        </div>
        <div className="mainContainer">
            
                <QuickAction />
                <section className='bodyContainer'>
                    <AnalyticsChart />
                    <EngagementChart />
                    <section className='scheduleContainer'>
                        <Calendar />
                    </section>
                    <section className='clientListContainer'>
                        <ClientCard />
                        <ClientCard />
                    </section>
                </section>


           
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