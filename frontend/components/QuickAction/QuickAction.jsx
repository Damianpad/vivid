import { StyledQuickAction } from "./QuickAction.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus, faFileInvoice, faFolderPlus, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

const QuickAction = () => {

    return(
        <StyledQuickAction>
        

        <div className="quickActionContainer">
            <h2>Quick Action</h2>
            <ul className="actionItems">
                <div className="itemContainer">
                    <li> Create Client </li>
                    <FontAwesomeIcon icon={faUserPlus} className="actionIcon"/>
                </div>

                <div className="itemContainer">
                    <li> Create Invoice </li> 
                    <FontAwesomeIcon icon={faFileInvoice} className="actionIcon" />
                </div>
                
                <div className="itemContainer">
                    <li> New Project </li>
                    <FontAwesomeIcon icon={faFolderPlus} className="actionIcon"/>
                </div>
                
                <div className="itemContainer">
                    <li> Book Appointment </li>
                    <FontAwesomeIcon icon={faCalendarPlus} className="actionIcon" />
                </div>
                
            </ul>
        </div>
        </StyledQuickAction>
    )
}

export default QuickAction;