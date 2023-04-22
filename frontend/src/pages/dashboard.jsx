import '../App.css'



export default function Dashboard() {

    return (
        <div className='dashboardBody'>
            <h1 className='dashboardTitle'>Dashboard</h1>

            <div>
                <span>Pipeline</span>
            </div>
            <div>
                <span>Calendar</span>
                <span>Billing</span>
            </div>
            <div>
                <span>Analytics</span>
            </div>
        </div>
    )
}