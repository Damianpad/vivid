import { StyledBillingAction } from "./BillingAction.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines } from "@fortawesome/free-solid-svg-icons"

export default function BillingAction() {

    return(
        <StyledBillingAction>
            <section className="actionContainer">  
                <FontAwesomeIcon icon={faFileLines} />
                <section className="dataContainer">
                    <span>Invoices</span>
                    <span>100</span>
                </section>
            </section>
        </StyledBillingAction>
    )
}