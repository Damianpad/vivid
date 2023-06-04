import { StyledBilling } from "./billing.style"
import BillingAction from "../../../components/BillingAction/BillingAction"
import AnalyticsChart from "../../../components/AnalyticsChart/AnalyticsChart"



export default function Billing() {

    return(
        <StyledBilling>
            <section className="headerContainer">
                <h1 className="billingTitle">Billing</h1>
                <h2 className='billingSubtitle'>Manage Billing Here</h2>
                <hr class="customLine"/>
            </section>

            <section className="actionContainer">
                <BillingAction />
                <BillingAction />
                <BillingAction />
                <BillingAction />
            </section>

            <section className="analyticsContainer">
                <AnalyticsChart />

            </section>
   
        </StyledBilling>

    )
}